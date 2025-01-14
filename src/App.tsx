import { Route, Routes } from "react-router";
import CafeList from "./components/CafeList/CafeList";
import CafeDetails from "./components/Card/CafeDetails";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="p-10">
            <CafeList />
          </div>
        }
      />
      <Route path="/cafe/:id" element={<CafeDetails />} />
      <Route
        path="/a"
        element={<div className="text-3xl text-red-800">a</div>}
      />
    </Routes>
  );
}

export default App;
