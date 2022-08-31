const initialState = {
  items: [],
  isLoaded: false,
};

const seths = (state = initialState, action) => {
  if (action.type === "SET_SETHS") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};
export default seths;
