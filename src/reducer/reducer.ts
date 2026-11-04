import { ThemeMode } from "../types";

export interface State {
  mode: ThemeMode;
}

export type Action =
  | { type: "CHANGE_MODE" }
  | { type: "SET_MODE"; payload: ThemeMode };

const reducer = (state: State, action: Action): State => {
  if (action.type === "CHANGE_MODE") {
    const nextMode: ThemeMode = state.mode === "light" ? "dark" : "light";
    return { ...state, mode: nextMode };
  }
  if (action.type === "SET_MODE") {
    return { ...state, mode: action.payload };
  }
  return state;
};

export default reducer;

