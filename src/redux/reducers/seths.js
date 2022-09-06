const initialState = {
  items: [],
  isLoaded: false,
};

const seths = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SETHS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};
export default seths;
