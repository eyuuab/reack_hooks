import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CounterApp from "./UseState/CounterApp";
import StateChangeLogger from "./UseEffect/UseEffectConsole";
import StateChanger from "./UseState/UseStateConsole";
import StateChangeLoggerCleanUp from "./UseEffect/UseEffectCleanUp";
import CallApi from "./UseEffect/UseEffectApi";
import MoviesList from "./Exercise/Movies";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* useState */}
    {/* <StateChanger /> */}
    <CounterApp />

    {/* useEffect */}

    {/* <StateChangeLogger /> */}
    {/* <StateChangeLoggerCleanUp /> */}
    {/* <CallApi /> */}

    {/* Exercise */}
    {/* <MoviesList /> */}
  </React.StrictMode>
);
