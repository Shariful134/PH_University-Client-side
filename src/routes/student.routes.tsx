import OfferedCourses from "../pages/student/OfferedCourses";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard></StudentDashboard>,
  },
  {
    name: "Offred Course",
    path: "offered-course",
    element: <OfferedCourses></OfferedCourses>,
  },
];
