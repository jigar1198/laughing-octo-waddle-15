import React from "react";
import { Link } from "react-router-dom";
import CustomTable from "components/table";
import { TableCell, TableRow } from "@material-ui/core";
import CustomButton from "components/form/button";

const DetailedTable = ({ tableHead, transactionList }) => {
  const tbody = transactionList.map((item, i) => {
    return (
      <TableRow>
        <TableCell align="center" component="th" scope="row">
          {i + 1}
        </TableCell>
        <TableCell align="center">
          {item.userId.userDetails.firstName +
            `\n` +
            item.userId.userDetails.lastName}
        </TableCell>
        <TableCell align="center">{item.createdAt.split("T")[0]}</TableCell>
        <TableCell align="center">{item.ackNumber}</TableCell>
        <TableCell align="center">
          <CustomButton
            label="Open"
            color="primary"
            variant="outlined"
            component={Link}
            to={`/dashboard/completed15CB/${item._id}`}
          />
        </TableCell>
      </TableRow>
    );
  });
  return <CustomTable tableHead={tableHead} tbody={tbody} />;
};
export default DetailedTable;
