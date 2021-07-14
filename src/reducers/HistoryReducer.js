const intitialState = {
  history: [],
  theme: false,
  calculator: true,
};
export default function history(state = intitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_HISTORY":
      return {
        ...state,
        history: [payload, ...state.history],
      };
    case "CHANGE_THEME":
      return {
        ...state,
        theme: !state.theme,
      };
    case "CHANGE_CALCULATOR":
      return {
        ...state,
        calculator: !state.calculator,
      };
    default:
      return state;
  }
}
