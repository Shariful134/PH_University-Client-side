import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";
import AcademicSemester from "../pages/admin/academicManagement/academicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicDepertment from "../pages/admin/academicManagement/AcademicDepertment";
import CreateAcademicDeperetment from "../pages/admin/academicManagement/CreateAcademicDeperetment";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester></CreateAcademicSemester>,
      },
      {
        name: "Academic Semester",
        path: "academic-semesters",
        element: <AcademicSemester></AcademicSemester>,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty></CreateAcademicFaculty>,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty></AcademicFaculty>,
      },
      {
        name: "Create A. Depertment",
        path: "create-academic-depertment",
        element: <CreateAcademicDeperetment></CreateAcademicDeperetment>,
      },
      {
        name: "Academic Depertment",
        path: "academic-depertment",
        element: <AcademicDepertment></AcademicDepertment>,
      },
    ],
  },
  {
    name: "User Manegement",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
];
