import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicDepertment from "../pages/admin/academicManagement/AcademicDepertment";
import CreateAcademicDeperetment from "../pages/admin/academicManagement/CreateAcademicDeperetment";
import AcademicSemester from "../pages/admin/academicManagement/academicSemester";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import SemesterRegistered from "../pages/admin/CourseManagement/SemesterRegistered";
import SemesterRegisteredData from "../pages/admin/CourseManagement/SemesterRegisteredData";
import CreateCourses from "../pages/admin/CourseManagement/CreateCourses";

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
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentData></StudentData>,
      },
      {
        path: "students-data/:studentId",
        element: <StudentDetails></StudentDetails>,
      },

      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
    ],
  },
  {
    name: "Course Manegement",
    children: [
      {
        name: "Semester Registered",
        path: "semester-registered",
        element: <SemesterRegistered></SemesterRegistered>,
      },
      {
        name: "Data Semester Registered",
        path: "data-semester-registered",
        element: <SemesterRegisteredData></SemesterRegisteredData>,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourses></CreateCourses>,
      },
    ],
  },
];
