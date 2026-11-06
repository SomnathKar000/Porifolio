import React, {
  useReducer,
  useContext,
  createContext,
  useRef,
  useEffect,
  ReactNode,
  RefObject,
} from "react";
import reducer, { State } from "../reducer/reducer";
import { ThemeMode } from "../types";

export interface ContextType {
  mode: ThemeMode;
  changeMode: () => void;
  ViewPage: (pageRef: RefObject<HTMLElement>) => void;
  navbarRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
  skillsRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  isValidEmail: (email: string) => boolean;
}

const initialState: State = {
  mode: "dark",
};

export const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navbarRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  // Sync mode with html class for Tailwind CSS dark mode
  useEffect(() => {
    if (state.mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.mode]);

  const changeMode = () => {
    dispatch({ type: "CHANGE_MODE" });
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const ViewPage = (pageRef: RefObject<HTMLElement>) => {
    if (pageRef.current) {
      window.scrollTo({
        top: pageRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <Context.Provider
      value={{
        mode: state.mode,
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

export const Contextvalues = (): ContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Contextvalues must be used within a ContextProvider");
  }
  return context;
};
