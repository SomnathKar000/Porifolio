const Reducer = (state, action) => {
  if (action.type === "CHANGE_MODE") {
    let mode = "";
    state.mode === "light" ? (mode = "dark") : (mode = "light");
    return { ...state, mode };
  }
  return { ...state };
};

export default Reducer;
