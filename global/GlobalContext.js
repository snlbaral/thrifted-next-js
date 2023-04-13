import React, { useContext } from "react";
import { useSession } from "next-auth/react";
import Loading from "@/components/loading";

const MyContext = React.createContext();

export const useGlobalContext = () => useContext(MyContext);

function GlobalContext({ children }) {
  const { status } = useSession();
  if (status === "loading") {
    return <Loading />;
  }

  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
}

export default GlobalContext;
