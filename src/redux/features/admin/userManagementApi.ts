import { TqueryParams, TResponseRedux } from "../../../constant/global";
import { TypeStudent } from "../../../type/studentsTypes";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
    // getAllStudent: builder.query({
    //   query: (data) => ({
    //     url: "/users/create-student",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    getAllStudent: builder.query({
      query: (args) => {
        console.log("args:", args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TqueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        console.log("params: ", params);
        // params.append(args[0].name, args[0].value);
        return {
          url: "/students",
          method: "GET",
          // params: { name: "Autumn" },
          // params: params,
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TypeStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useAddStudentMutation, useGetAllStudentQuery } =
  userManagementApi;
