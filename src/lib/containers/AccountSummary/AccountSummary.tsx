import React, { FC } from "react";
import { Paper, makeStyles, Box, Typography } from "@material-ui/core";
import { useAccountSummary } from "./AccountSummary.Hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
    borderRadius: theme.spacing(0),
    display: "flex",
  },
  accountId: {
    flex: 1,
  },
  balance: {
    fontWeight: "bold",
    color: theme.palette.success.dark,
  },
}));

export const AccountSummary: FC = () => {
  const { accountSummary } = useAccountSummary();
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      <Box className={styles.accountId}>
        <Typography>{accountSummary?.AccountId}</Typography>
      </Box>
      <Box className={styles.balance}>
        {accountSummary?.AvailableFunds} &nbsp; {accountSummary?.Currency}
      </Box>
    </Paper>
  );
};
