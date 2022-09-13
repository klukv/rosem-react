export const addSethCart = (sethObj) => ({
  type: "ADD_SETH_CART",
  payload: sethObj,
});
export const clearCart = () => ({
  type: "CLEAR_CART",
});
export const clearCartItem = (id) => ({
  type: "CLEAR_CART_ITEM",
  payload: id,
});
export const plusCartItem = (id) => ({
  type: "PLUS_CART_ITEM",
  payload: id,
});
export const minusCartItem = (id) => ({
  type: "MINUS_CART_ITEM",
  payload: id,
});
