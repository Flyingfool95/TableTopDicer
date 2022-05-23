import React, { useEffect, useState } from "react";
import DiceDisplay from "../dice_display/DiceDisplay";
import useDice from "../../hooks/useDice";
import "./DiceRoller.scss";

export default function DiceRoller() {
  const [dice, setDice] = useState(6);
  const [amount, setAmount] = useState(1);
  const [modifier, setModifier] = useState(0);
  const [res, setRes] = useState(0);

  const { RollDice } = useDice();

  const handleDiceRoll = (e) => {
    e.preventDefault();

    setRes(RollDice(dice, amount, modifier));
  };

  useEffect(() => {
    if (amount < 1) {
      setAmount(1);
    }
    if (amount > 18) {
      setAmount(18);
    }

    return () => {};
  }, [amount]);

  useEffect(() => {
    if (modifier < -10) {
      setModifier(-10);
    }
    if (modifier > 15) {
      setModifier(15);
    }

    return () => {};
  }, [modifier]);

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
            <div className="dice-roller__form__label__buttons">
              <div
                type="button"
                className="dice-roller__form__label__buttons__button"
                onClick={() => setModifier((prev) => prev - 1)}
              >
                -
              </div>
              <p
                className="dice-roller__form__label__buttons__amount"
                onClick={() => setModifier(0)}
              >
                {modifier}
              </p>
              <div
                type="button"
                className="dice-roller__form__label__buttons__button"
                onClick={() => setModifier((prev) => prev + 1)}
              >
                +
              </div>
            </div>
          </label>

          <label className="dice-roller__form__label">
            <h2 className="dice-roller__form__label__title">Amount:</h2>
            <div className="dice-roller__form__label__buttons">
              <div
                type="button"
                className="dice-roller__form__label__buttons__button"
                onClick={() => setAmount((prev) => prev - 1)}
              >
                -
              </div>
              <p
                className="dice-roller__form__label__buttons__amount"
                onClick={() => setAmount(1)}
              >
                {amount}
              </p>
              <div
                type="button"
                className="dice-roller__form__label__buttons__button"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </div>
            </div>
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
