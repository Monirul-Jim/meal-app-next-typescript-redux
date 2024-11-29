"use client";
import { useLoginUserMutation } from "@/redux/api/authApi";

import { useForm, SubmitHandler } from "react-hook-form";

import Link from "next/link";
import { useState } from "react";
interface LoginFormInputs {
  username: string;
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [loginUser, { data: isData, isLoading, error }] =
    useLoginUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  console.log(error);
  // Toggle the showPassword state
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const onSubmit: SubmitHandler<LoginFormInputs> = async (formData) => {
    try {
      await loginUser(formData).unwrap();
      alert("Login successful!");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-orange-500">
          Login
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Login and see enjoy your activities
        </p>
        {error?.data?.detail && (
          <h1 className="text-red-400 font-semibold">{error?.data?.detail}</h1>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
              })}
              className={`mt-1 block w-full rounded-md border  text-black px-4 py-2 ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              } shadow-sm`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password type
                id="password"
                {...register("password", {
                  required: "Password is required",
                  // Removed minLength here, because you only want backend validation
                })}
                className={`mt-1 block w-full rounded-md border text-black px-4 py-2 ${
                  errors.password || error?.data?.password
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                } shadow-sm`}
              />
              {/* Toggle Button */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
              >
                {showPassword ? (
                  // Open Eye Icon (Visible password)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3C6.48 3 3 7 3 12s3.48 9 9 9 9-4 9-9-3.48-9-9-9zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                    />
                  </svg>
                ) : (
                  // Crossed Eye Icon (Hidden password)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6.225 6.225a8.962 8.962 0 00-1.96 2.74c-.218.437-.405.887-.572 1.348.381-.08.76-.125 1.137-.125 4.418 0 8 3.582 8 8 0 .377-.043.756-.125 1.137-.461-.167-.911-.354-1.348-.572a8.962 8.962 0 00-2.74-1.96l-4.07 4.07c-1.183-.798-2.37-1.548-3.392-2.57a8.962 8.962 0 00-1.96 2.74l-1.376-1.376C4.267 14.767 4 13.905 4 13c0-4.418 3.582-8 8-8 .905 0 1.767.267 2.574.615l1.376-1.376C14.767 4.267 13.905 4 13 4a9 9 0 00-6.775 2.225l-1.376-1.376C5.625 3.25 7.592 2 9 2c4.418 0 8 3.582 8 8s-3.582 8-8 8z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Error Messages */}
            {/* <ul className="mt-1 text-sm text-red-500">
              {Array.isArray(error?.data?.password)
                ? error?.data?.password.map((errorMsg, index) => (
                    <li key={index}>{errorMsg}</li>
                  ))
                : error?.data?.password && <li>{error?.data?.password}</li>}
            </ul> */}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 text-white bg-orange-500 rounded-md font-medium shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 disabled:bg-orange-300"
          >
            {isLoading ? "Login..." : "Login"}
          </button>
        </form>

        {/* API Error Handling */}
        {error && (
          <p className="mt-4 text-sm text-red-500 text-center">
            {error?.data?.message || "Something went wrong. Please try again."}
          </p>
        )}

        <div className="mt-4 text-center">
          <Link
            href="/login"
            className="text-sm text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            Do not have an account?{" "}
            <span className="font-semibold">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
