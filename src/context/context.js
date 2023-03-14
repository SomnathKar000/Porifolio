import { useReducer, useContext, createContext } from "react";
import reducer from "../reducer/reducer";
const initialstate = {
  mode: "light",
};

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const changeMode = () => {
    dispatch({ type: "CHANGE_MODE" });
  };
  return (
    <Context.Provider value={{ ...state, changeMode }}>
      {children}
    </Context.Provider>
  );
};

export const Contextvalues = () => useContext(Context);
