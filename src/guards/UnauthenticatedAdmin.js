import React from 'react';
import { Navigate } from 'react-router-dom';

function UnauthenticatedAdmin() {
    return (
        <Navigate to="/auth/login"/>
    )
}

export default UnauthenticatedAdmin;
