import { baseApi } from "../../api/baseApi";

const academicDepertmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAcademicDepertment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
    getAllcademicDepertment: builder.query({
      query: () => ({
        url: "/academic-departments",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddAcademicDepertmentMutation,
  useGetAllcademicDepertmentQuery,
} = academicDepertmentApi;
