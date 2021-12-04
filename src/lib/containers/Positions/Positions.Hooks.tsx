import { PortFolioUpdate } from "@stoqey/ibkr";
import { useEffect, useState } from "react";
const { ipcRenderer } = window.require("electron");

interface UsePortfolio {
  positions: PortFolioUpdate[];
  setPositions: (position: PortFolioUpdate[]) => void;
}

export const usePortfolio = (): UsePortfolio => {
  const [positions, setPositions] = useState<PortFolioUpdate[]>([]);

  useEffect(() => {
    ipcRenderer.on("Portfolios", (_event, positions) => {
      setPositions(positions);
    });
  }, []);

  return {
    positions,
    setPositions,
  };
};
