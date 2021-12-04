import React, { FC } from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

export const PositionsTableHeader: FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>conid</TableCell>
        <TableCell>symbol</TableCell>
        <TableCell>exchange</TableCell>
        <TableCell>position</TableCell>
      </TableRow>
    </TableHead>
  );
};
