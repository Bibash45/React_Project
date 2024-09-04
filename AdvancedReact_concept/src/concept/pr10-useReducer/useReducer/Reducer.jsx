import {clear,remove,reset,loading} from "./actions.js"
import { data } from "../../../data.js";
const Reducer = (state, action) => {
    switch (action.type) {
      case remove:
        return {
          ...state,
          people: state.people.filter((person) => person.id !== action.payload),
        };

      case clear:
        return { ...state, people: [] };

      case reset:
        return { ...state, people: data };

      case loading:
        return { ...state, isLoading: action.payload };

      default:
        return state.people;
    }
  };
  export default Reducer;
