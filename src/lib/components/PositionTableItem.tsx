import React, { FC } from "react";
import { TableRow, TableCell } from "@material-ui/core";
import { PortFolioUpdate } from "@stoqey/ibkr";

interface PositionTableItemProps {
  position: PortFolioUpdate;
}

export const PositionTableItem: FC<PositionTableItemProps> = ({ position }) => {
  return (
    <TableRow>
      <TableCell>{position.conId}</TableCell>
      <TableCell>{position.symbol}</TableCell>
      <TableCell>{position.exchange}</TableCell>
      <TableCell>{position.position}</TableCell>
    </TableRow>
  );
};
