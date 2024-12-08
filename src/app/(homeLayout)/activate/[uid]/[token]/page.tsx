// "use client";

// import { useForm, SubmitHandler } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { useActivateUserMutation } from "@/redux/api/authApi";
// import { useState } from "react";

// interface ActivateFormInputs {
//   token: string;
// }

// const Activate = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ActivateFormInputs>();
//   const router = useRouter();
//   const [activateUser, { isLoading, error }] = useActivateUserMutation();
//   const [activationStatus, setActivationStatus] = useState<string | null>(null);

//   const onSubmit: SubmitHandler<ActivateFormInputs> = (data) => {
//     activateUser(data.token)
//       .unwrap()
//       .then(() => {
//         setActivationStatus("Your account has been activated successfully!");
//         setTimeout(() => router.push("/login"), 3000); // Redirect to login page after 3 seconds
//       })
//       .catch((err) => {
//         setActivationStatus("Activation failed. Please try again.");
//         console.error("Activation error:", err);
//       });
//   };

//   return (
//     <div className=" mx-auto mt-10 p-4 max-w-3xl  border rounded-md shadow-sm bg-white">
//       <h1 className="text-xl font-bold text-gray-700 mb-4">
//         Activate Your Account
//       </h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label
//             htmlFor="token"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Activation Token
//           </label>
//           <input
//             type="text"
//             id="token"
//             {...register("token", { required: "Token is required" })}
//             className={`mt-1 block w-full rounded-md border text-black px-4 py-2 ${
//               errors.token
//                 ? "border-red-500 focus:border-red-500 focus:ring-red-500"
//                 : "border-gray-300 focus:border-orange-500 focus:ring-orange-500"
//             }`}
//             placeholder="Enter activation token (e.g., chbjj9-ccc0992458e45238ae30fedf4e2848d1)"
//           />
//           {errors.token && (
//             <p className="mt-1 text-sm text-red-500">{errors.token.message}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className={`w-full px-4 py-2 text-white rounded-md ${
//             isLoading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-orange-500 hover:bg-orange-600"
//           }`}
//         >
//           {isLoading ? "Activating..." : "Activate"}
//         </button>
//       </form>

//       {activationStatus && (
//         <div
//           className={`mt-4 text-sm ${
//             activationStatus.includes("failed")
//               ? "text-red-500"
//               : "text-green-500"
//           }`}
//         >
//           {activationStatus}
//         </div>
//       )}

//       {error && !activationStatus && (
//         <div className="mt-4 text-sm text-red-500">
//           {error.data?.detail || "An error occurred. Please try again."}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Activate;

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useActivateUserMutation } from "@/redux/api/authApi";
import { useParams } from "next/navigation"; // Import useParams hook

const Activate = () => {
  const { uid, token } = useParams(); // Access params using useParams
  const router = useRouter();
  const [activateUser, { isLoading }] = useActivateUserMutation();
  const [activationStatus, setActivationStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (uid && token) {
      console.log({ uid, token });
      activateUser({ uid, token })
        .unwrap()
        .then(() => {
          setActivationStatus("Your account has been activated successfully!");
          setTimeout(() => router.push("/login"), 3000);
        })
        .catch((err) => {
          setActivationStatus("Activation failed. Please try again.");
          setError(err?.data?.detail || "An error occurred during activation.");
        });
    }
  }, [uid, token, activateUser, router]);

  return (
    <div className="mx-auto mt-10 p-4 max-w-3xl border rounded-md shadow-sm bg-white">
      <h1 className="text-xl font-bold text-gray-700 mb-4">
        Activate Your Account
      </h1>
      {isLoading && (
        <p className="text-sm text-gray-500">Activating your account...</p>
      )}
      {activationStatus && (
        <div
          className={`mt-4 text-sm ${
            activationStatus.includes("failed")
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {activationStatus}
        </div>
      )}
      {error && !activationStatus && (
        <div className="mt-4 text-sm text-red-500">{error}</div>
      )}
    </div>
  );
};

export default Activate;
