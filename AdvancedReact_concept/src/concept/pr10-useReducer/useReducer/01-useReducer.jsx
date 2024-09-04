import React, { useEffect, useReducer } from "react";
import { data } from "../../../data";
import Reducer from "./Reducer";
import {clear,remove,reset,loading} from "./actions.js"

const ReducerBasics = () => {


  
  const initialState = {
    people: data,
    isLoading: true,
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const loadingFunc = () => {
    dispatch({ type: loading, payload: false });
  };

  useEffect(() => {
    setTimeout(() => {
      loadingFunc();
    }, 1000);
  }, []);

  if (state.isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => dispatch({ type: remove, payload: id })}>
              remove
            </button>
          </div>
        );
      })}

      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => {
          if (!state.people.length == 0) return dispatch({ type: clear });
          else return dispatch({ type: "RESET" });
        }}
      >
        {state.people.length == 0 ? "reset items" : "clear items"}
      </button>
    </div>
  );
};

export default ReducerBasics;
