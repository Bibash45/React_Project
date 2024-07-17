import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Rules from "./Rules";
const RollDice = ({ currentDice, roleDice, setScore }) => {
  const [rulesState, setRulesState] = useState(false);

  useEffect(() => {
    console.log("Current dice:", currentDice);
  }, [currentDice]);

  return (
    <>
      <Main>
        <div className="box1" onClick={roleDice}>
          <img src={`/images/${currentDice}.svg`} alt="" />
          <p>Click on Dice to roll</p>
        </div>
        <div className="box2">
          <button className="btn-1" onClick={() => setScore(0)}>
            Reset Scorer
          </button>
          <button
            className="btn-2"
            onClick={() => setRulesState((prev) => (prev = !prev))}
          >
            {!rulesState ? "Show" : "Hide"} Rules
          </button>
        </div>
        {rulesState && <Rules />}
      </Main>
    </>
  );
};

export default RollDice;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 36px;
  text-align: center;
  justify-content: center;
  margin: auto;
  .box1 {
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    text-align: center;
    width: 250px;
    height: 301px;
    p {
      line-height: 36px;
      font-weight: 500;
      font-size: 24px;
    }
  }
  .box2 {
    margin: auto;
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    .btn-1 {
      padding: 10px 18px;
      border-radius: 10px;
      background-color: #fff;
      color: black;
      border: 1px solid black;
      font-size: 24px;
      font-weight: 500;
      &:hover {
        background-color: #938b8b;
      }
    }
    .btn-2 {
      padding: 10px 18px;
      border-radius: 10px;
      background-color: black;
      color: white;
      border: 1px solid black;
      font-size: 24px;
      font-weight: 500;
      &:hover {
        background-color: #938b8b;
      }
    }
  }
`;
