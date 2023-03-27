import { useReducer, useContext, createContext, useRef } from "react";
import reducer from "../reducer/reducer";
const initialstate = {
  mode: "dark",
};

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const navbarRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialstate);
  const changeMode = () => {
    dispatch({ type: "CHANGE_MODE" });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const ViewPage = (pageName) => {
    window.scrollTo({
      top: pageName.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        changeMode,
        contactRef,
        ViewPage,
        skillsRef,
        aboutRef,
        projectsRef,
        navbarRef,
        isValidEmail,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const Contextvalues = () => useContext(Context);
