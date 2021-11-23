import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  icon: {
    marginRight: 10,
  },
  title: {
    flex: 1,
  },
});

const Header: FC = () => {
  const styles = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <TimelineIcon className={styles.icon} />
        <Typography variant="h6" component="div" className={styles.title}>
          Bittrade
        </Typography>
        <MenuOpenIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
