import React from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let tongle = (state, action) => {
      console.log(action.action)
    if(action.action=="login"){
        return "login"
    }else{
        return "logout"
    }
  };

  const [state, dispatch] = useReducer(tongle, "logout");

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};
