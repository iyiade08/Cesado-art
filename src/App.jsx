import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import Homepage from "./Pages/Homepage";
import MainLayout from "./Layout/MainLayout";
import AuthProvider from "./Context/AuthContext";
import ProtectedRoute from "./Auth/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </>,
  ),
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
