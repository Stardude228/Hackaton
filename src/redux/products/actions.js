import Axios from "axios";
import { FETCH_DATA_FAILED, FETCH_DATA_SUCCESS, FETCH_DATA } from "./constants";

export const fetchData = (page) => (dispatch) => {
    // console.log("PAGE", page)
    dispatch({
        type: FETCH_DATA
    });

    Axios.get(process.env.REACT_APP_API_URL + `/posts/?_limit=6&_page=${page}`)
    .then((resp) => {
        const {data, headers} = resp;
        // console.log("DATA", headers["x-total-count"], data);
        localStorage.setItem("totalCount", headers["x-total-count"])
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