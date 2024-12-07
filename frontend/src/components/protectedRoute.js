// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

function ProtectedRoute({ children }) {
    if (!isAuthenticated()) {
        // Redirect to the login page if the user is not authenticated
        return <Navigate to="/login" />;
    }

    // Render the requested page if the user is authenticated
    return children;
}

export default ProtectedRoute;