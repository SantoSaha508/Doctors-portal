import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Home/Shared/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    // if we don't use loading, then next condition will work and next condition do not get any user.(cause-> requireauth cholar somoi se 1st a auther kachy giey dekhbe user achy kina... so jodi oading use na kori then next condition cholbe and kono user pabe na.). ***so we use this, if we reload this page, then it will not open login page again.
    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default RequireAuth;