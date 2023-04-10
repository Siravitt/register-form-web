import axios from "axios";

export const createUser = (input) =>
  axios.post(process.env.REACT_APP_ENDPOINT_URL + "/create-user", input);

export const getUser = () => axios.get(process.env.REACT_APP_ENDPOINT_URL);
