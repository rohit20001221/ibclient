import { IBKRAccountSummary } from "@stoqey/ibkr";
import { useState, useEffect } from "react";
const { ipcRenderer } = window.require("electron");

interface UseAccountSummaryType {
  accountSummary: Partial<IBKRAccountSummary>;
}

export const useAccountSummary = (): UseAccountSummaryType => {
  const [accountSummary, setAccountSummary] =
    useState<Partial<IBKRAccountSummary>>();

  useEffect(() => {
    ipcRenderer.on("AccountSummary", (_event, accSummary) => {
      setAccountSummary(accSummary);
    });
  }, [accountSummary]);

  return { accountSummary };
};
