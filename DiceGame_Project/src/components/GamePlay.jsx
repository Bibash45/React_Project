import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState('')

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if(!selectedNumber){
      setError("You have not selected any number")
      return;
    }
    const random = generateRandomNumber(1, 7);
    setCurrentDice(random);
    if (selectedNumber === random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined)
  };

  return (
    <Main>
      <div className="top_section">
        <TotalScore  score={score} />
        <NumberSelector
        setError={setError}
        error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
    </Main>
  );
};

export default GamePlay;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 200px;
  padding-top: 70px;
  .top_section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: end;
  }
`;
