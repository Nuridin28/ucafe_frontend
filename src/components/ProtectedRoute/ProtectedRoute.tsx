import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../app/authStore";
import { userStore } from "../../app/userStore";

interface ProtectedRouteProps {
  children: JSX.Element;
  requiredRole: string;
  route?: string;
}

export const ProtectedRoute = ({
  children,
  requiredRole,
  route,
}: ProtectedRouteProps) => {
  const { isAuth } = useAuthStore((state) => state);
  const { role } = userStore((state) => state);

  if (!isAuth) {
    return <Navigate to="/auth/login" replace />;
  }

  if (role === undefined) {
    return <div>Loading...</div>;
  }

  if (role !== requiredRole) {
    return (
      <Navigate
        to={route || (role === "admin" ? "/admin/home" : "/")}
        replace
      />
    );
  }

  return children;
};
