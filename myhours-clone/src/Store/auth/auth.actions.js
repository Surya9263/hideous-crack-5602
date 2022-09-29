
import axios from "axios";
import {AUTH_LOGIN_LOADING,AUTH_LOGIN_SUCCESS,AUTH_LOGIN_ERROR , AUTH_LOGOUT} from "./auth.types";



export const login = (creds) => async(dispatch) =>{
   
    dispatch({type : AUTH_LOGIN_LOADING})
    try{
     
       let response = await axios.post("http://localhost:8080/users/login" , creds)

       dispatch({type : AUTH_LOGIN_SUCCESS , payload : response.data})

       return response.data        // not imp
    }
    catch{
       
        dispatch({type : AUTH_LOGIN_ERROR})
    }

}


export const logout = () => async(dispatch) =>{


}





// action me nexted function hote hai thunk ki wajah se 1 for promise and second for dispatch and asyncronas things