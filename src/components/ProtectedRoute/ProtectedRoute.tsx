// import { Navigate } from 'react-router-dom';
// import { useAuthStore } from "../../app/authStore.ts";
import * as React from "react";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    // const isAuth = useAuthStore((state) => state.isAuth);
    //
    // if (!isAuth) {
    //     return <Navigate to="/auth/login" replace />;
    // }
    return children;
};
