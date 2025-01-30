import { baseApi } from "../../api/baseApi";

const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
    getAllcademicFaculty: builder.query({
      query: () => ({
        url: "/academic-faculties",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddAcademicFacultyMutation, useGetAllcademicFacultyQuery } =
  academicFacultyApi;
