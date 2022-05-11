import axios from "axios";
import { FOO, ISMOBILE } from "../actionTypes";

export const getPosts = () => (dispatch) =>
  axios({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/posts`,
    headers: [],
  }).then((response) => dispatch({ type: FOO, payload: response.data }));


  export const getIsMobile = (isMobile) => {
    return (dispatch) => {
      dispatch({ type: ISMOBILE, payload: isMobile });
    };
  };
