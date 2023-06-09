import React, { useState } from "react";
import reactLogo from "../../assets/react.svg";
import webpack from "../../assets/webpack.png";
import "./Welcome.scss";

const Welcome: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="c-welcome">
      <div className="c-welcome__upper-part">
        <a href="https://vitejs.dev" target="_blank">
          <img src={webpack} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Webpack + React </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          le compte est : {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Welcome;
