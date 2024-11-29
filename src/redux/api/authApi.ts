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
      query: (activationToken) => ({
        url: `auth/activate/${activationToken}/`,
        method: "POST",
      }),
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useActivateUserMutation,
} = authApi;
