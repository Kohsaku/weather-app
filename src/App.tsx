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
  const [currentCondition, setCurrentCondition] = useState("");
  const [currentIcon, setCurrentIcon] = useState("");

  const cityNames = ["Tokyo", "London", "Paris", "Rome", "Beijing"];
  const apiKey = "API KEY";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const ulr = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    const res = await fetch(ulr);
    const weather = await res.json();
    setCurrentCondition(weather.current.condition.text);
    setCurrentIcon(weather.current.condition.icon);
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
        {openResult && <Result text={currentCondition} icon={currentIcon} />}
      </div>
    </div>
  );
};

export default App;
