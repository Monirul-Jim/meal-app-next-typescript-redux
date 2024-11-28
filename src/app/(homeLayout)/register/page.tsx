"use client";
import { useRegisterUserMutation } from "@/redux/api/authApi";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface RegisterFormInputs {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  const [registerUser, { data, isLoading, error }] = useRegisterUserMutation();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (formData) => {
    try {
      await registerUser(formData).unwrap();
      alert("Registration successful!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-orange-500">
          Register
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Create an account to get started!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
              className={`mt-1 block w-full rounded-md border text-black px-4 py-2 ${
                errors.username
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              } shadow-sm`}
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

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
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
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
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className={`mt-1 block w-full rounded-md border  text-black px-4 py-2 ${
                errors.password
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              } shadow-sm`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 text-white bg-orange-500 rounded-md font-medium shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 disabled:bg-orange-300"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* API Error Handling */}
        {error && (
          <p className="mt-4 text-sm text-red-500 text-center">
            {error?.data?.message || "Something went wrong. Please try again."}
          </p>
        )}

        {/* Success Message */}
        {data && (
          <p className="mt-4 text-sm text-green-500 text-center">
            Registration successful! You can now log in.
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
