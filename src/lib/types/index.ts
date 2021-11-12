import { OrderStock } from "@stoqey/ibkr";

export interface WebContextType {
  toggleTrade: Function;
}

export interface WebSocketMessage extends OrderStock {}

export class MessageParser {
  public static parse(data: string): WebSocketMessage {
    return JSON.parse(data) as WebSocketMessage;
  }
}
