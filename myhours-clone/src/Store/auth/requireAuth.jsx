import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const requireAuth = ({children}) => {
   
 const token = useSelector(store => store.auth.token)

    if(token){
        return children
    }

    
  return     <Navigate to="/login" />
  
}

