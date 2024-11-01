import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen w-full">
      <div className="h-full mx-auto">{children}</div>
    </div>
  );
};

export default AuthLayout;
