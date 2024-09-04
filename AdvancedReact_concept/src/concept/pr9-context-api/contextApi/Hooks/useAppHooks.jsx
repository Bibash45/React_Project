import { useContext } from "react";
import { NavbarContext } from "../context/NavContext";
// custom hook
export const useAppHook = ()=> useContext(NavbarContext);