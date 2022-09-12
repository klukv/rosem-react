const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};
const getTotalPrice = (arr) =>
  arr.reduce((sum, current) => sum + current.price, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SETH_CART": {
      const currentSeth = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentSeth,
          totalPrice: getTotalPrice(currentSeth),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allSeth = [].concat.apply([], items);
      const price = getTotalPrice(allSeth);

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
