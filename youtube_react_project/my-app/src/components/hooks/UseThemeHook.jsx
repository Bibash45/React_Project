import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function UseThemeHook() {
  return useContext(ThemeContext);
}

export default UseThemeHook;