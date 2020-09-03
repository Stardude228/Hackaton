import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from "./constants";

const INIT_STATE = {
  loading: false,
  err: null,
  data: [
    { 
      id: 1,
      title: "Ferrari",
      price: "100200$",
      image: "https://cdn.motor1.com/images/mgl/0x6J3/s3/ferrari-sf90-stradale.jpg",
      comment: "lorem ipsum dolor which can be realy useful for mosst of the clients and so far it is very useful"
    },
    {
      id: 2,
      title: "Bugatti",
      price: "100200$",
      image: "https://i.ytimg.com/vi/NkiyAZ63RT8/maxresdefault.jpg",
      comment: "lorem ipsum dolor which can be realy useful for mosst of the clients and so far it is very useful"
    },
    {
      id: 3,
      title: "Lamborghini",
      price: "100200$",
      image: "https://www.market2cars.com/wp-content/uploads/2019/11/960x0.jpg",
      comment: "lorem ipsum dolor which can be realy useful for mosst of the clients and so far it is very useful"
    }
  ]
}

const ProductReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, err: null, data: action.payload };
    case FETCH_DATA_FAILED:
      return { ...state, loading: false, err: action.error };
    default:
      return state;
  }
};

export default ProductReducer;