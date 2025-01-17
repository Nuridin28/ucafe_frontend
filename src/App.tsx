import { Route, Routes } from "react-router";
import CafeList from "./components/CafeList/CafeList";
import CafeDetails from "./components/Card/CafeDetails";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cafe" element={<CafeList />} />
      <Route path="/cafe/:id" element={<CafeDetails />} />
      <Route
        path="/a"
        element={<div className="text-3xl text-red-800">a</div>}
      />
    </Routes>
  );
}

export default App;
