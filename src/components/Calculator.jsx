import { evaluate } from "mathjs";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  const handleClick = (btn) => {
    if (btn === "C") {
      setInput("");
      setResult("");
      return;
    }

    if (btn === "=") {
      if (input === "") {
        setResult("Error");
        return;
      }

      try {
        const evaluated = evaluate(input);
        setResult(evaluated);
        setInput(String(evaluated)); // IMPORTANT: enables further calculations
      } catch {
        setResult("Error");
      }
      return;
    }

    setInput((prev) => prev + btn);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* Input field */}
      <input
        type="text"
        value={input}
        readOnly
        style={{
          width: "200px",
          height: "35px",
          fontSize: "18px",
          border: "1px solid black",
        }}
      />

      {/* Result div (ONLY ONE div as required) */}
      <div>{result}</div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "230px",
          gap: "10px",
        }}
      >
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              width: "50px",
              height: "50px",
              fontSize: "16px",
              border: "2px solid black",
              borderRadius: "8px",
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
