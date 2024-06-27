import { useState } from "react";

import SockJS from "sockjs-client";

import { Client, IMessage } from "@stomp/stompjs";
import { ChatMessage } from "../../types/ChatMessage";
import { MessageType } from "../../types/enums/MessageType";
import { ConnectComponent } from "../Connect";
import { Button, ChatTitle, Container, ContainerSenderAction, Input, InputContainer, MessageBox, MessageContainer, MessageContent, MessageSender, SenderAction } from "./styles";

export function ChatComponent() {
    const [stompClient, setStompClient] = useState<Client | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputMessage, setInputMessage] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [isConnected, setIsConnected] = useState<boolean>(false);

    function handleActiveClient() {
        if (username) {
            // Abre uma conexão com o servidor
            const socket = new SockJS("http://localhost:8080/ws");

            const client = new Client({
                webSocketFactory: () => socket,

                onConnect: () => {
                    setIsConnected(true);

                    // Inscreve o cliente no tópico do servidor WebSocket
                    // Receptor de mensagens/eventos
                    client.subscribe('/grupo/public', (message: IMessage) => {
                        // A função callback será executada cada vez que uma mensagem é enviada
                        const receivedMessage: ChatMessage = JSON.parse(message.body);


                        setMessages(prevMessages => [...prevMessages, receivedMessage]);
                    });

                    // Envia uma mensagem que "/topic/public" irá receber e transmitir
                    client.publish({
                        destination: '/app/add',

                        // retorna o usuario e o tipo de mensagem
                        body: JSON.stringify({ sender: username, type: MessageType.JOIN, content: null })
                    });
                },

                onDisconnect: () => {
                    setIsConnected(false);
                }
            });

            client.activate();
            setStompClient(client);
        };
    };

    function sendMessage() {
        if (stompClient && inputMessage.trim() !== '') {
            const chatMessage: ChatMessage = {
                content: inputMessage,
                sender: username,
                type: MessageType.CHAT
            };
            stompClient.publish({
                destination: '/app/add',
                body: JSON.stringify(chatMessage)
            });


            console.log(stompClient)
            console.log(username)
            console.log(messages)

            setInputMessage('');
        }
    }

    return (
        <div>
            {!isConnected ? (
                <ConnectComponent username={username} activeClient={handleActiveClient} setUsername={setUsername} />
            ) : (
                <Container>
                    <div>
                        <ChatTitle>Chat</ChatTitle>
                        <ContainerSenderAction>
                            {messages.map((message, index) => (
                                <SenderAction key={index}>{message.sender} {message.type.toLowerCase()}</SenderAction>
                            ))}
                        </ContainerSenderAction>
                    </div>

                    <MessageContainer>
                        {messages.map((message, index) => (

                            <MessageBox key={index}>
                                <MessageSender>{message.sender}</MessageSender>
                                <MessageContent>{message.content}</MessageContent>
                            </MessageBox>
                        ))}
                    </MessageContainer>


                    <InputContainer>
                        <Input
                            type="text"
                            placeholder="Mensagem..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                        />
                        <Button onClick={sendMessage}>Enviar</Button>
                    </InputContainer>
                </Container>
            )}
        </div>
    );
}