import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Home/Shared/Loading';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    // if we don't use loading, then next condition will work and next condition do not get any user.(cause-> RequireAdmin cholar somoi se 1st a auther kachy giey dekhbe user achy kina... so jodi oading use na kori then next condition cholbe and kono user pabe na.). ***so we use this, if we reload this page, then it will not open login page again.
    if(loading || adminLoading){
        return <Loading></Loading>
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default RequireAdmin;