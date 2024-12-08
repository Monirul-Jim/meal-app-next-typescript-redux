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
    loginUser: builder.mutation({
      query: (userInfo) => ({
        url: "auth/jwt/create/",
        method: "POST",
        body: userInfo,
      }),
    }),

    activateUser: builder.mutation({
      query: ({ uid, token }) => ({
        url: `auth/users/activation/`,
        method: "POST",
        body: { uid, token },
      }),
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useActivateUserMutation,
} = authApi;
