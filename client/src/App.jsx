
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default page redirects to Login */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* User Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* User Registration */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Task Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Unknown routes redirect to Login */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
