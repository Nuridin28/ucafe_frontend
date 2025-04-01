import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../app/authStore";

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const { isAuth } = useAuthStore((state) => state);

  if (!isAuth) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

export default PrivateRoute;
