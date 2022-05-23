import React from "react";
import DiceRoller from "../../components/dice_roller/DiceRoller";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home__title">TableTop Dicer</h1>

      <DiceRoller />
    </div>
  );
}
