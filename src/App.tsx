import React, { useState } from "react";
import { AppBar, Typography, TextField, MenuItem, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Result from "./components/Result";

const useStyle = makeStyles(() => ({
  app: {
    height: "100vh",
    textAlign: "center",
  },
  header: {
    height: "20vh",
    justifyContent: "center",
  },
  body: {
    height: "80vh",
    paddingTop: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    width: "50vh",
  },
  button: {
    width: "20vh",
  },
}));

const App: React.FC = () => {
  const classes = useStyle();
  const [city, setCity] = useState("");
  const [openResult, setOpenResult] = useState(false);

  const cityNames = ["Tokyo", "London", "Paris", "Rome", "Beijing"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    openResult ? setOpenResult(false) : setOpenResult(true);
  };

  return (
    <div className={classes.app}>
      <AppBar className={classes.header} position="static">
        <Typography variant="h6" component="div">
          Current Weather
        </Typography>
      </AppBar>
      <div className={classes.body}>
        <TextField
          className={classes.textField}
          select
          helperText="select"
          variant="standard"
          onChange={handleChange}
        >
          {cityNames.map((cityName) => (
            <MenuItem key={cityName} value={cityName}>
              {cityName}
            </MenuItem>
          ))}
        </TextField>
        <Button
          className={classes.button}
          onClick={handleClick}
          variant="contained"
        >
          {openResult ? "Close" : "Show"}
        </Button>
        {openResult && <Result />}
      </div>
    </div>
  );
};

export default App;
