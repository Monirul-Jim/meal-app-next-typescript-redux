import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userInfo) => ({
        url: "auth/users/",
        method: "POST",
        body: userInfo,
      }),
    }),
    // registerUser: builder.mutation({
    //   query: (userInfo) => ({
    //     url: "/auth/signup/",
    //     method: "POST",
    //     body: userInfo,
    //   }),
    // }),
  }),
});
export const { useRegisterUserMutation } = authApi;
