import { OrderStock } from "@stoqey/ibkr";

export interface WebContextType {
  toggleTrade: () => void;
}

export type WebSocketMessage = OrderStock;

export class MessageParser {
  public static parse(data: string): WebSocketMessage {
    return JSON.parse(data) as WebSocketMessage;
  }
}
