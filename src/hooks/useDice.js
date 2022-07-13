import { useState } from "react";

export default function useAddProject() {
  const [D4] = useState([1, 2, 3, 4])
  const [D6] = useState([1, 2, 3, 4, 5, 6])
  const [D8] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  const [D10] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [D12] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  const [D20] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  const [D100] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
  )

  let dice = [];

  //Selecting array of dice from value in input
  const selectDice = (selectedDice) => {
    switch (selectedDice) {
      case 4:
        dice = D4
        break

      case 6:
        dice = D6
        break
      case 8:
        dice = D8
        break

      case 10:
        dice = D10
        break
      case 12:
        dice = D12
        break

      case 20:
        dice = D20
        break

      case 100:
        dice = D100
        break
    }
  }

  //Shuffle array function
  const shuffleDice = (array) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    //Returns random index in shuffled array
    return array[Math.floor(Math.random() * array.length)];
  }

  //Rolling the dice function
  const RollDice = (selectedDice, amount = 1, modifier = 0) => {

    //Resets all variables
    let mixedDice = [];
    let totalRoll = 0;
    let totalModifier = 0;

    //Sets selected type of dice
    selectDice(selectedDice)

    //Shuffles dice and picks a random index
    for (let i = 0; i < amount; i++) {
      mixedDice.push(shuffleDice(dice))
    }
    //Sums all rolls to total
    totalRoll = mixedDice.reduce((prev, curr) => {
      return prev + curr
    }, 0)

    //Add modifyer
    totalModifier = totalRoll + modifier

    //Makes sure total can't be less than 1
    if (totalModifier < 1) {
      totalModifier = 1
    }
    return {
      dice,
      mixedDice,
      totalRoll,
      totalModifier
    }
  }

  return {
    RollDice
  }
}
