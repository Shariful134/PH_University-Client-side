import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUserPaths = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPaths[];
};

export type TSidebarItem =
  | {
      key: string;
      label?: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

export type TFaculty = {
  _id?: string;
  name: string;
};
export type TDepertment = {
  value: string;
  label: string;
  name: string;
};
export type TDepertmentData = {
  id: string;
  name: string;
  academicFaculty: string;
  createdAt: string;
  updatedAt: string;
};
