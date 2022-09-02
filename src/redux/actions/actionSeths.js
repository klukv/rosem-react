import axios from "axios";

export const fetchSeths = (dispatch) => {
  axios
    .get("http://localhost:3001/seths")
    .then(({ data }) => dispatch(setSeths(data)));
};

export const setSeths = (items) => ({
  type: "SET_SETHS",
  payload: items,
});
