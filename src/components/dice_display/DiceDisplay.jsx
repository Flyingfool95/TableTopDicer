import React from "react";
import "./DiceDisplay.scss";

export default function DiceDisplay({ dice }) {
  return (
    <div className="dice-display">
      {dice &&
        dice.map((d, i) => (
          <div key={i} className="dice-display__dice">
            <span>{d}</span>
          </div>
        ))}
    </div>
  );
}
