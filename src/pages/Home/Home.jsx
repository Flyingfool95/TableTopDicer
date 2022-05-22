import React from "react";
import { Link } from "react-router-dom";
import DiceRoller from "../../components/dice_roller/DiceRoller";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home__title">TableTop Dicer</h1>

      <DiceRoller />

      <div className="home__links">
        <Link to="/about">About</Link>
        <Link to="/donate">Donate</Link>
      </div>
    </div>
  );
}
