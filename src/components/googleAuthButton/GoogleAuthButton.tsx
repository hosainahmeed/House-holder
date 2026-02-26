
import React from "react";
import { GoogleLogin } from "@react-oauth/google";

import { useRouter } from "next/navigation";
import { message, Spin } from "antd";

const GoogleAuthButton = ({ role, loginForm }: any) => {
  const router = useRouter();

  const handleGoogleSuccess = async (credentialResponse: any) => {
    if (!role && !loginForm) throw new Error("Role is required");
    if (!credentialResponse?.credential)
      throw new Error("Credential is required");
    try {
      const data = {
        provider: "google",
        token: credentialResponse.credential,
        role: role,
      };

    } catch (error) {

    }
  };

  const handleGoogleError = (error: any) => {
    message.error(
      error?.data?.message ||
      error?.message ||
      error?.error ||
      "Something went wrong"
    );
  };

  return (
    <div className="flex items-center justify-center">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError as any}
        useOneTap={false}
        theme="outline"
        text="continue_with"
        size="large"
        width={300}
        shape="circle"
      />
    </div>
  );
};

export default GoogleAuthButton;
