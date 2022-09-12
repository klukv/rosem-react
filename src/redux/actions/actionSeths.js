import axios from "axios";

export const fetchSeths = (category, sortBy, order) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(`/seths?_sort=${sortBy}&_order=${order}`)
    .then(({ data }) => dispatch(setSeths(data)));
};

export const setSeths = (items) => ({
  type: "SET_SETHS",
  payload: items,
});

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});
