"use client";

import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props: any) => {
  const [authenticated, setAuthenticated] = useState({
    isLogin: false,
    username: null,
  });
  return <AppContext.Provider value={{ authenticated }} {...props} />;
};
