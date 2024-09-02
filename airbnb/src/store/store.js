import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { listingListReducer } from "../reducers/listingReducers";
import { modalReducer } from "../reducers/modalReducer";
import { userLoginReducer } from "../reducers/userReducer";

const reducer = combineReducers({
  listingList: listingListReducer,
  modal: modalReducer,
  userLogin: userLoginReducer
});

const userInfoFormLS = localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem('userInfo')): null;

const initalstate ={
  userLogin: {userInfo: userInfoFormLS }
}
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
