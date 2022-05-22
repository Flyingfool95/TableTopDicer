import React, { useState } from "react";
import DiceDisplay from "../dice_display/DiceDisplay";
import useDice from "../../hooks/useDice";
import "./DiceRoller.scss";

export default function DiceRoller() {
  const [dice, setDice] = useState(6);
  const [amount, setAmount] = useState(1);
  const [advantage, setAdvantage] = useState(false);
  const [modifier, setModifier] = useState(0);
  const [res, setRes] = useState(0);

  const { RollDice } = useDice();

  const handleDiceRoll = (e) => {
    e.preventDefault();

    setRes(RollDice(dice, amount, modifier, advantage));
  };

  return (
    <>
      <div className="dice-roller">
        {/* Form */}
        <form className="dice-roller__form" onSubmit={handleDiceRoll}>
          <label className="dice-roller__form__label">
            <h2 className="dice-roller__form__label__title">Dice type:</h2>
            <select
              name="Dice type"
              id="dice_type"
              defaultValue={dice}
              onChange={(e) => setDice(parseInt(e.target.value))}
            >
              <option value="4">D4</option>
              <option value="6">D6</option>
              <option value="8">D8</option>
              <option value="10">D10</option>
              <option value="12">D12</option>
              <option value="20">D20</option>
              <option value="100">D100</option>
            </select>
          </label>

          <label className="dice-roller__form__label">
            <h2 className="dice-roller__form__label__title">Modifier:</h2>
            <div>
              <span>{modifier}</span>
              <input
                type="range"
                name="Modifier"
                id="modifier"
                min={-20}
                max={20}
                defaultValue={modifier}
                onChange={(e) => setModifier(parseInt(e.target.value))}
              />
            </div>
            <p onClick={() => setModifier(0)}>Reset</p>
          </label>

          <label className="dice-roller__form__label">
            <h2 className="dice-roller__form__label__title">Amount:</h2>
            <div>
              <span>{amount}</span>
              <input
                type="range"
                name="Amount"
                id="amount"
                min={1}
                max={20}
                defaultValue={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
            </div>
            <p onClick={() => setAmount(1)}>Reset</p>
          </label>

          <label className="dice-roller__form__label dice-roller__form__label__advantage">
            <h2 className="dice-roller__form__label__title">Adv./Dis.:</h2>
            <input
              type="checkbox"
              disabled={dice !== 20} // Can only have advantage on d20 rolls
              checked={advantage && dice === 20}
              onChange={(e) => setAdvantage(e.target.checked)}
            />
          </label>

          <input
            className="dice-roller__form__roll"
            type="submit"
            value="Roll!"
          />
        </form>

        {/* Divider */}
        <div className="dice-roller__divider"></div>
        {/* Dice display */}
        <DiceDisplay dice={res.mixedDice} />
      </div>
      <h1 className="total">
        Total: {res.totalModifier ?? 0} ({res.totalRoll ?? 0} + {modifier})
      </h1>
    </>
  );
}
