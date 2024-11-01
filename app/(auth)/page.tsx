import React from "react";

import SocialLogin from "./_components/SocialLogin";
import Logo from "@/components/logo";

const Page = () => {
  return (
    <div className="flex flex-col items-center h-auto lg:h-full">
      <main className="w-full h-full">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse items-center h-full">
          <div className="flex-shrink flex-1 lg:min-w-[437px] lg:max-w-[760px] h-full p-4 flex flex-col">
            <div className="mt-4 mb-6">
              <h1 className="leading-[84px] text-[68px] font-black">
                Going on now
              </h1>
            </div>
            <div className="mb-8">
              <h5 className="leading-9 text-[31px] font-extrabold">
                Sign in to M
              </h5>
            </div>
            <div className="w-[300px]">
              <div className="sign_with_google mb-2">
                {/* { SocialLogin} */}
                <SocialLogin />
              </div>

              {/* { OR divider} */}
              <div className="flex flex-row items-center w-[300px] max-w-[380px] -mx-1 my-1">
                <div className="flex-1 h-[1px] bg-muted dark:bg-[rgb(47,51,54)]" />
                <div className="basis-0 mx-1 text-[15px] leading-5 pb-[5px]">
                  or
                </div>
                <div className="flex-1 h-[1px] bg-muted dark:bg-[rgb(47,51,54)]" />
              </div>

              <div className="sign_with_email py-[12px]">
                {/* <LoginForm /> */}
              </div>

              <div className="mt-10">
                <h5>Dont have an account</h5>
                {/* <RegisterFormModal /> */}
              </div>
            </div>
          </div>

          {/* {Logo } */}
          <div className="flex-[1.2] flex items-center justify-center lg:min-[45vh]">
            <Logo className="!w-1/2 !h-1/2 fill-current mx-auto" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;