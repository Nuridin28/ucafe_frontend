import { Route, Routes } from "react-router";
import CafeList from "./components/CafeList/CafeList";
import CafeDetails from "./components/Card/CafeDetails";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
import Login from "./pages/Login";
import { Registration } from "./components/Auth/Registration/Registration";
import NotFound from "./pages/NotFound.tsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute.tsx";
import CafeMenuItemDetails from "./components/CafeMenu/CafeMenuItemDetails.tsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/*// <ProtectedRoute><Login /></ProtectedRoute>*/}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/cafe"
          element={
            <PrivateRoute>
              <CafeList />
            </PrivateRoute>
          }
        />
        <Route
          path="/cafe/:id"
          element={
            <PrivateRoute>
              <CafeDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/cafe/:id/details/:id"
          element={
            <PrivateRoute>
              <CafeMenuItemDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/auth/registration"
          element={
            <ProtectedRoute>
              {" "}
              <Registration />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
