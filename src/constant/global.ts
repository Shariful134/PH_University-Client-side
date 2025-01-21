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

// export type TResponse = {
//   data?: any;
//   message: string;
//   meta?: {
//     page: number;
//     limit: number;
//     total: number;
//     totalPage: number;
//   };
//   error?: any;

//   success: boolean;
// };

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

export type TqueryParams = {
  name: string;
  value: boolean | React.Key;
};

export const monthOptions = MonthNames.map((item) => ({
  value: item,
  label: item,
}));
