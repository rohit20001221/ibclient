import React, { FC } from "react";
import Header from "./components/Header";
import { WebSocketProvider } from "./context/WebSocketContext";

export const App: FC = () => {
  return (
    <WebSocketProvider>
      <Header />
    </WebSocketProvider>
  );
};
