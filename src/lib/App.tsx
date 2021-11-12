import React, { FC } from "react";
import { WebSocketProvider } from "./context/WebSocketContext";

export const App: FC = () => {
  return (
    <WebSocketProvider>
      <h1>Hello World</h1>
    </WebSocketProvider>
  );
};
