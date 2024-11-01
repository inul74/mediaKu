import React from "react";

import { Button } from "@/components/ui/button";
import GoogleLogo from "@/public/assets/google-logo.svg";

const SocialLogin = () => {
  return (
    <form>
      <Button
        variant="outline"
        type="submit"
        className="shadow-sm dark:bg-white gap-2 w-full h-10 text-base !text-[#3c4043] font-medium p-1 rounded-full"
        name="action"
        value="google"
      >
        <GoogleLogo />
        Sign in with Google
      </Button>
    </form>
  );
};

export default SocialLogin;
