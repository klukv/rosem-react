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
    case "CLEAR_CART":
      return {
        ...state,
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };

    case "PLUS_CART_ITEM": {
      const newObj = state.items[action.payload].items[0];
      const oldTotalPrice = state.items[action.payload].totalPrice;

      const plusOneItem = {
        ...state.items,
        [action.payload]: {
          items: [...state.items[action.payload].items, newObj],
          totalPrice: oldTotalPrice + newObj.price,
        },
      };

      return {
        ...state,
        items: plusOneItem,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + oldTotalPrice,
      };
    }

    case "MINUS_CART_ITEM": {
      const oneSeth = state.items[action.payload].items[0];

      const oldObjects = state.items[action.payload].items;
      const oldTotalPrice = state.items[action.payload].items[0].price;

      const newObjects =
        oldObjects.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldObjects;

      const minusOneItem = {
        ...state.items,
        [action.payload]: {
          items: newObjects,
          totalPrice: getTotalPrice(newObjects),
        },
      };

      return {
        ...state,
        items: minusOneItem,
        totalPrice:
          state.items[action.payload].totalPrice !== oldTotalPrice
            ? state.totalPrice - oldTotalPrice
            : state.totalPrice,
        totalCount:
          state.items[action.payload].items.length !== 1
            ? state.totalCount - 1
            : state.totalCount,
      };
    }

    case "CLEAR_CART_ITEM": {
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
    }

    default:
      return state;
  }
};
export default cart;
