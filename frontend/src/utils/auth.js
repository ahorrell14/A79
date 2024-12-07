// src/utils/auth.js
export const isAuthenticated = () => {
    return !!localStorage.getItem('token'); // Returns true if a token exists
};