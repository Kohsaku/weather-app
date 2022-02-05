import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

type PROPS = {
  date: string;
  text: string;
  icon: string;
};

const useStyle = makeStyles(() => ({
  currentdate: {
    width: "100vh",
    paddingTop: "5vh",
  },
  currentCondition: {
    width: "100vh",
  },
  currentIcon: {
    paddingTop: "1vh",
  },
}));

const Result: React.FC<PROPS> = (props) => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.currentdate}>
        <Typography variant="h5">As of {props.date}</Typography>
      </div>
      <div className={classes.currentCondition}>
        <Typography variant="h5">condition: {props.text}</Typography>
      </div>
      <img
        className={classes.currentIcon}
        src={props.icon}
        alt="weather icon"
        title="weather icon"
      />
    </div>
  );
};

export default Result;
