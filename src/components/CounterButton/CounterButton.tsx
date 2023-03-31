import React, { useState } from "react";
import "./CounterButton.scss";

const CounterButton: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <p className="c-counter" onClick={() => setCount((count) => count + 1)}>
      {" "}
      Je ne suis qu'un texte {count} <br />
      <b>Je m'appelle counter - fixed</b>
    </p>
  );
};

export default CounterButton;
