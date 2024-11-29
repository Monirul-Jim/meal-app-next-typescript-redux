"use client"; // This makes it a Client Component

import { useRouter } from "next/navigation"; // Import from 'next/navigation'
import { useState, useEffect } from "react";
import { useActivateUserMutation } from "@/redux/api/authApi"; // Import the hook

const Activate = () => {
  const router = useRouter();
  const [activateUser, { isLoading, error, data }] = useActivateUserMutation();
  const [activationStatus, setActivationStatus] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null); // Store token in local state

  useEffect(() => {
    if (router.query?.token) {
      setToken(router.query?.token as string); // Assign the token when it's available
    }
  }, [router.query]);

  useEffect(() => {
    if (token) {
      activateUser(token) // Trigger activation with the token
        .unwrap()
        .then(() => {
          setActivationStatus("Your account has been activated successfully!");
          setTimeout(() => router.push("/login"), 3000); // Redirect to login page after 3 seconds
        })
        .catch((err) => {
          setActivationStatus("Activation failed. Please try again.");
          console.error("Activation error:", err);
        });
    }
  }, [token, activateUser, router]);

  return (
    <div className="activation-container">
      <h1>Activate Your Account</h1>

      {isLoading && <p>Activating your account...</p>}

      {activationStatus && (
        <div
          className={`status-message ${
            activationStatus.includes("failed") ? "error" : "success"
          }`}
        >
          {activationStatus}
        </div>
      )}

      {error && !activationStatus && (
        <div className="error-message">
          {error.message ||
            "An error occurred while activating your account. Please try again."}
        </div>
      )}
    </div>
  );
};

export default Activate;
