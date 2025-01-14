import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="text-3xl text-red-800">
            WILL BE GOOD PROJECT NEXT TIME
          </div>
        }
      />
      <Route
        path="/a"
        element={<div className="text-3xl text-red-800">a</div>}
      />
    </Routes>
  );
}

export default App;
