import axios from "axios";
import { baseUrl } from "../BaseUrl/baseUrl";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./auth.actionType";

export const LoginProcess = (loginData) => async (dispatch) => {
    dispatch({type:LOGIN_REQUEST})
  try {
    const response = await axios.post(`${baseUrl}/login`, loginData.data);
    if(response.data.jwt!=null){
      localStorage.setItem("jwt",response.data.jwt)
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.jwt});
    console.log(response.data.jwt)
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};
export const RegisterProcess = (loginData) => async (dispatch) => {
    dispatch({type:REGISTER_REQUEST})
  try {
    const response = await axios.post(`${baseUrl}/signup`, loginData.data);
    if(response.data.jwt!=null){
     // localStorage.setItem("jwt",response.data.jwt)
    dispatch({ type:REGISTER_SUCCESS, payload: response.data.jwt});
    console.log(response.data.jwt)
    }
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error });
  }
};
export const GetProfileProcess=(jwt)=>async(dispatch)=>{
     dispatch({type:GET_USER_REQUEST})
    try{
            const response = await axios.get(`${baseUrl}/getBy/token`,{
              
              headers:{Authorization:`Bearer ${jwt}`},
            });
           // console.log(response);

            dispatch({type:GET_USER_SUCCESS,payload:response.data})
    }
    catch(error){
          dispatch({type:GET_USER_FAILURE,payload: error})
    }
}