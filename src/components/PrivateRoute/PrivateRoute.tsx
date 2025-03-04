import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface Props {
    children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
    const { isAuth } = useAuth();

    if (!isAuth) {
        return <Navigate to="/auth/login" />;
    }

    return children;
};

export default PrivateRoute;
