import React, { useState } from "react";
import "./CounterButton.scss";

const CounterButton: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <p className="c-counter" onClick={() => setCount((count) => count + 1)}>
      {" "}
      Hey!! Testo 🫣 {count}{" "}
    </p>
  );
};

export default CounterButton;
