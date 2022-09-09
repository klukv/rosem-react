const initialState = {
  sortBy: "default",
  nameSort: "По умолчанию",
  category: null,
  order: "desc",
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        nameSort: action.payload.name,
        sortBy: action.payload.type,
        order: action.payload.order,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};
export default filters;
