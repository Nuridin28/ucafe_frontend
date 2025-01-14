import { Route, Routes } from "react-router";
import { Button } from "@mui/material";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="text-3xl text-red-800">
            <Button variant="text">WILL BE GOOD PROJECT NEXT TIME</Button>
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
