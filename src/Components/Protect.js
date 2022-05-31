import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext'

export default function Protect({ children }) {
    const {user} = UserAuth();

    if (!user) {
        return <Navigate to='/' />
    };

    return children;
};