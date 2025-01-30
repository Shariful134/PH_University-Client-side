// // const adminPaths = [
// //   {
// //     name: "Dashboard",
// //     path: "dashboard",
// //     element: <AdminDashboard></AdminDashboard>,
// //   },
// //   {
// //     name: "User Manegement",
// //     children: [
// //       {
// //         name: "Create Student",
// //         path: "create-student",
// //         element: <CreateStudent></CreateStudent>,
// //       },
// //       {
// //         name: "Create Faculty",
// //         path: "create-faculty",
// //         element: <CreateFaculty></CreateFaculty>,
// //       },
// //       {
// //         name: "Create Admin",
// //         path: "create-admin",
// //         element: <CreateAdmin></CreateAdmin>,
// //       },
// //     ],
// //   },
// // ];

// export const MonthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// export const monthOptions = MonthNames.map((item) => ({
//   value: item,
//   label: item,
// }));
const arraya = [
  {
    _id: "6799ce2cee2d14ff3633ef2a",
    name: "Faculty of Social Sciences",
    createdAt: "2025-01-29T06:43:56.467Z",
    updatedAt: "2025-01-29T06:43:56.467Z",
  },
  {
    _id: "6799cdc9ee2d14ff3633ef22",
    name: "Faculty of Medicine",
    createdAt: "2025-01-29T06:42:17.072Z",
    updatedAt: "2025-01-29T06:42:17.072Z",
  },
];
const result = arraya.find(
  (faculty) => faculty._id === "6799cdc9ee2d14ff3633ef22"
);

const bloogGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const genders = ["male", "female", "other"];

const bloogGroupsOptions = bloogGroups.map((item) => ({
  value: item,
  label: item,
}));
const gendersOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
console.log(bloogGroupsOptions);
// console.log(result);
// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//   },
// ];
