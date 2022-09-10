const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SETH_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allSeth = [].concat.apply([], Object.values(newItems));
      const price = allSeth.reduce((sum, current) => { return sum + current.price}, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allSeth.length,
        totalPrice: price,
      };
    }
    case "SET_TOTAL_COUNT":
      return {
        ...state,
        totalCount: action.payload,
      };

    case "SET_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };

    default:
      return state;
  }
};
export default cart;
