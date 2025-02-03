import { Route, Routes } from "react-router";
import CafeList from "./components/CafeList/CafeList";
import CafeDetails from "./components/Card/CafeDetails";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
import Login from "./pages/Login";
import { Registration } from "./components/Auth/Registration/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cafe" element={<CafeList />} />
      <Route path="/cafe/:id" element={<CafeDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/a"
        element={<div className="text-3xl text-red-800">a</div>}
      />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/registration" element={<Registration />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default App;
