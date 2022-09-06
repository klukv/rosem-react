import axios from "axios";

export const fetchSeths = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(`http://localhost:3001/seths?_sort=${sortBy}&_order=desc`)
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
