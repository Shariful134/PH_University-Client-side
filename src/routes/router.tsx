import { createBrowserRouter } from "react-router";
import App from "../App";

import Register from "../pages/Register";
import Login from "../pages/Login";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import ProtectedRoutes from "../components/layout/ProtectedRoutes";
import ChangePassword from "../pages/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoutes role="admin">
        <App></App>
      </ProtectedRoutes>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: (
      <ProtectedRoutes role="faculty">
        <App></App>
      </ProtectedRoutes>
    ),
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: (
      <ProtectedRoutes role="student">
        <App></App>
      </ProtectedRoutes>
    ),
    children: routeGenerator(studentPaths),
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/change-password",
    element: <ChangePassword></ChangePassword>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
