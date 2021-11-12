import React, {
  createContext,
  PropsWithChildren,
  FC,
  useState,
  useEffect,
  useRef,
} from "react";
import { env } from "../../env";
import { MessageParser, WebContextType } from "../types";
const { ipcRenderer } = window.require("electron");

const WebSocketContext = createContext<WebContextType>({
  toggleTrade: () => {},
});

export const WebSocketProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const ws = useRef(new WebSocket(env.WS_URL));

  const [startTrade, setStartTrade] = useState<boolean>(true);
  useEffect(() => {
    ws.current.onmessage = (event: WebSocketEventMap["message"]): void => {
      const data = MessageParser.parse(event.data);

      if (startTrade) {
        ipcRenderer.send("trade", data);
      }
    };
  }, [startTrade]);

  const toggleTrade = () => {
    setStartTrade((val) => !val);
  };

  return (
    <WebSocketContext.Provider value={{ toggleTrade }}>
      {children}
    </WebSocketContext.Provider>
  );
};
