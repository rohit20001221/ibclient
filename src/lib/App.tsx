import { ThemeProvider } from "@material-ui/core";
import React, { FC } from "react";
import { theme } from "../theme";
import Header from "./components/Header";
import { AccountSummary } from "./containers/AccountSummary/AccountSummary";
import { WebSocketProvider } from "./context/WebSocketContext";

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <WebSocketProvider>
        <Header />
        <AccountSummary />
      </WebSocketProvider>
    </ThemeProvider>
  );
};
