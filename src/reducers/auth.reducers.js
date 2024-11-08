
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./auth.actionType"


const initialState={
jwt:null,
loading:false,
error:null,
user:null
}
export const authReducers = (state=initialState,action)=>{
          

    switch(action.type){
          case LOGIN_FAILURE:
            return {...state,jwt:null,loading:false,error:action.error}
          case LOGIN_SUCCESS:
            return {...state,jwt:action.jwt,loading:false,error:null}
          case LOGIN_REQUEST:
            return {...state,jwt:null,loading:true,error:null}
          case GET_USER_FAILURE:
            return {...state,error:action.payload,loading:false,jwt:null,user:null}
            case GET_USER_SUCCESS:
              return {...state,error:null,loading:false,user:action.payload}
              case GET_USER_REQUEST:
                return {...state,error:null,loading:true,jwt:null,user:null}
          case REGISTER_FAILURE:
            return {...state,jwt:null,loading:false,error:action.error}
          case REGISTER_REQUEST:
            return {...state,jwt:null,loading:true,error:null}
          case REGISTER_SUCCESS:
            return {...state,jwt:null,loading:false,error:null}
          default:
            return state;
    }
}