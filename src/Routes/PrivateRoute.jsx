import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const PrivateRoute = ({children}) => {

    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
        return <Navigate to='/signin' />
    }

    return children;
}

export default PrivateRoute