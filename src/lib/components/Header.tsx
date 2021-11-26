import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import TimelineIcon from "@material-ui/icons/Timeline";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(10),
  },
  title: {
    flex: 1,
  },
}));

const Header: FC = () => {
  const styles = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <TimelineIcon className={styles.icon} />
        <Typography variant="h6" className={styles.title}>
          Bittrade
        </Typography>
        <MenuOpenIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
