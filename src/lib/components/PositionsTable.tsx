import { Table, TableBody } from "@material-ui/core";
import { PortFolioUpdate } from "@stoqey/ibkr";
import React, { FC } from "react";
import { PositionsTableHeader } from "./PositionsTableHeader";
import { PositionTableItem } from "./PositionTableItem";

interface PositionsTableProps {
  positions: PortFolioUpdate[];
}

const PositionsTable: FC<PositionsTableProps> = ({ positions }) => {
  return (
    <Table>
      <PositionsTableHeader />
      <TableBody>
        {positions.map((position) => (
          <PositionTableItem position={position} key={position.conId} />
        ))}
      </TableBody>
    </Table>
  );
};

export default PositionsTable;
