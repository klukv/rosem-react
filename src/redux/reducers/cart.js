const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};
const getTotalPrice = (arr) =>
  arr.reduce((sum, current) => sum + current.price, 0);

const getNewTotalPrice = (arr) =>
  arr.reduce((sum, current) => sum + current.totalPrice, 0);

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

    case "CLEAR_CART":
      return {
        ...state,
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    case "CLEAR_CART_ITEM":
      const newItems = {
        ...state.items,
      };

      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    default:
      return state;
  }
};
export default cart;
