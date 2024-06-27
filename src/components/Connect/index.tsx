import { Container, BoxInput, Input, Title, Button, SubTitle } from './styles'

interface ConnectComponentProps {
    username: string
    activeClient: () => void
    setUsername: (event: any) => void
}

export function ConnectComponent({ username, activeClient, setUsername }: ConnectComponentProps) {
    return (
        <Container>
            <Title>Chat.io</Title>

            <BoxInput>
                <SubTitle>Nome</SubTitle>
                <Input
                    type="text"
                    value={username}
                    placeholder='Digite seu nome...'
                    onChange={(e) => setUsername(e.target.value)}
                />
            </BoxInput>

            <Button onClick={() => activeClient()}>Conectar</Button>
        </Container>
    );
}