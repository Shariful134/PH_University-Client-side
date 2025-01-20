// const adminPaths = [
//   {
//     name: "Dashboard",
//     path: "dashboard",
//     element: <AdminDashboard></AdminDashboard>,
//   },
//   {
//     name: "User Manegement",
//     children: [
//       {
//         name: "Create Student",
//         path: "create-student",
//         element: <CreateStudent></CreateStudent>,
//       },
//       {
//         name: "Create Faculty",
//         path: "create-faculty",
//         element: <CreateFaculty></CreateFaculty>,
//       },
//       {
//         name: "Create Admin",
//         path: "create-admin",
//         element: <CreateAdmin></CreateAdmin>,
//       },
//     ],
//   },
// ];

export const MonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = MonthNames.map((item) => ({
  value: item,
  label: item,
}));
