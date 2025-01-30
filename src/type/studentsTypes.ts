import { TAcademicSemester } from "../constant/global";

export interface TypeStudent {
  _id: string;
  id: string;
  user: User;
  name: Name;
  gender: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg: string;
  admissionSemester: TAcademicSemester;
  isDeleted: boolean;
  academicDepartment: AcademicDepartment;
  academicFaculty: AcademicFaculty;
  fullName: string;
}

export interface User {
  _id: string;
  id: string;
  email: string;
  needsPasswordChange: boolean;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Name {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
}

export interface Guardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  _id: string;
}

export interface LocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
  _id: string;
}
export interface AcademicDepartment {
  _id: string;
  name: string;
  academicFaculty: string;
}
interface AcademicFaculty {
  _id: string;
  name: string;
}
// export interface AdmissionSemester {
//   _id: string;
//   name: string;
//   year: string;
//   code: string;
//   startMonth: string;
//   endMonth: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// export interface AcademicDepartment {
//   _id: string;
//   name: string;
//   academicFaculty: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// export interface AcademicFaculty {
//   _id: string;
//   name: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }
