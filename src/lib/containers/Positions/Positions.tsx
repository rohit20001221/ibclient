import React, { FC } from "react";
import PositionsTable from "../../components/PositionsTable";
import { usePortfolio } from "./Positions.Hooks";

export const Positions: FC = () => {
  const { positions } = usePortfolio();

  return <PositionsTable positions={positions} />;
};
