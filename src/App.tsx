import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./components/Welcome/Welcome";
import "./App.scss";
import CounterButton from "./components/CounterButton/CounterButton";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        <Welcome />
        <CounterButton />
      </div>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
