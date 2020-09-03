import Axios from "axios";
import { FETCH_DATA_FAILED, FETCH_DATA_SUCCESS, FETCH_DATA } from "./constants";

export const fetchData = () => (dispatch) => {
    dispatch({
        type: FETCH_DATA
    });

    Axios.get(process.env.REACT_APP_API_URL)
    .then((resp) => {
        const {data} = resp;
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: data
        })
    })
    .catch((e) => {
        dispatch({
            type: FETCH_DATA_FAILED,
            payload: e
        })
    })
}