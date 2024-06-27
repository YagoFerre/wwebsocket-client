import { MessageType } from "./enums/MessageType";

export interface ChatMessage {
  content: string;
  sender: string;
  type: MessageType;
}
