export const addSethCart = (sethObj) => ({
    type: "ADD_SETH_CART",
    payload: sethObj,
  });
  export const setCount = (count) => ({
    type: "SET_TOTAL_COUNT",
    payload: count,
  });
  export const setPrice = (price) => ({
    type: "SET_TOTAL_PRICE",
    payload: price,
  });