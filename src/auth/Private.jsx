import React from 'react';
import { Navigate } from 'react-router-dom';

const Private=({ children }) =>{
    const token = JSON.parse(localStoage.getItem('token'));
    return (
        token ? children : <Navigate to="/login" />
    );
}

export default Private;


