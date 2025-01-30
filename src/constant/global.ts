import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};
export type TAcademicSemester = {
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TqueryParams = {
  name: string;
  value: boolean | React.Key;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
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
export const bloogGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const genders = ["male", "female", "other"];

//===================this is only for development==========
export const studentDefaultData = {
  name: {
    firstName: "Shariful",
    middleName: "Islam",
    lastName: "Easha",
  },
  gender: "male",
  bloogGroup: "AB+",
  // dateOfBirth: "2000-01-01",

  email: "shariful32213@gmail.com",
  // avater: "https://example.com/avatar.jpg",
  contactNo: "+8801762370111",
  emergencyContactNo: "+8801762370111",
  presentAddress: "123 Main Street, Cityville",
  permanentAddress: "456 Elm Street, Townsville",

  guardian: {
    fatherName: "James Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "1111111111",
    motherName: "Jane Doe",
    motherOccupation: "Teacher",
    motherContactNo: "2222222222",
  },
  localGuardian: {
    name: "Robert Smith",
    occupation: "Doctor",
    contactNo: "11111111111",
    address: "789 Pine Street, Villageville",
  },

  // admissionSemester: "6766e4aa402610e6725a91db",
  // profileImg: "https://example.com/profile.jpg",
  // isDeleted: false,
  // academicDepartment: "6766e4f1402610e6725a91e0",
};
// ======================this should be remoove===================

export const bloogGroupsOptions = bloogGroups.map((item) => ({
  value: item,
  label: item,
}));
export const gendersOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
export const monthOptions = MonthNames.map((item) => ({
  value: item,
  label: item,
}));
