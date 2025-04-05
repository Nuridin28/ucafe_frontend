import { Route, Routes } from "react-router";
import CafeList from "./components/CafeList/CafeList";
import CafeDetails from "./components/Card/CafeDetails";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
import Login from "./pages/Login";
import { Registration } from "./components/Auth/Registration/Registration";
import NotFound from "./pages/NotFound.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute.tsx";
import CafeMenuItemDetails from "./components/CafeMenu/CafeMenuItemDetails.tsx";
import AdminPage from "./components/Admin/Home.tsx";
import { Menu } from "./components/Admin/Menu/Menu.tsx";
import RequestOrder from "./components/Admin/Orders/Req/index.tsx";
import RunningOrdersPage from "./components/Admin/Orders/Running/RunningOrdersPage.tsx";
import CompletedOrdersPage from "./components/Admin/Orders/Ready/CompletedOrdersPage.tsx";
import ProfilePage from "./components/Admin/Profile/ProfilePage.tsx";
import NotificationsPage from "./components/Admin/Notification/NotificationPage.tsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/admin/home"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/running-orders"
          element={
            <ProtectedRoute requiredRole="admin">
              <RunningOrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/completed-orders"
          element={
            <ProtectedRoute requiredRole="admin">
              <CompletedOrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/menu"
          element={
            <ProtectedRoute requiredRole="admin">
              <Menu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/order-request"
          element={
            <ProtectedRoute requiredRole="admin">
              <RequestOrder />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/person"
          element={
            <ProtectedRoute requiredRole="admin">
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/bell"
          element={
            <ProtectedRoute requiredRole="admin">
              <NotificationsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute requiredRole="user">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cafe"
          element={
            <ProtectedRoute requiredRole="user">
              <CafeList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cafe/:id"
          element={
            <ProtectedRoute requiredRole="user">
              <CafeDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cafe/:id/details/:id"
          element={
            <ProtectedRoute requiredRole="user">
              <CafeMenuItemDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute requiredRole="user">
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
