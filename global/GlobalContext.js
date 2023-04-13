import React, { useContext } from "react";

const MyContext = React.createContext();

export const useGlobalContext = () => useContext(MyContext);

function GlobalContext({ children }) {
  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
}

export default GlobalContext;
