import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProjectedRoute";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
  );
};

export default App;
