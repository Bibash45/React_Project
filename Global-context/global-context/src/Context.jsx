import React, { createContext,useState } from "react";

const GlobalContext = createContext();

const AppContext = ({children}) => {
  const [name, setName] = useState("Bibash ");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};
export {GlobalContext};

export default AppContext;
