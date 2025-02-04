/* eslint-disable @typescript-eslint/no-explicit-any */
import { TqueryParams, TResponseRedux } from "../../../constant/global";
import { baseApi } from "../../api/baseApi";

const studentCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudentCoursese: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TqueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/offered-courses/my-offered-courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["offeredCourse"],
      transformResponse: (response: TResponseRedux<any>) => ({
        data: response?.data,
        meta: response?.meta,
      }),
    }),

    createEnrolledCourse: builder.mutation({
      query: (data) => ({
        url: "/enrolled-courses/create-enrolled-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["offeredCourse"],
    }),
  }),
});

export const {
  useGetAllStudentCourseseQuery,
  useCreateEnrolledCourseMutation,
} = studentCourseApi;
