import Image from "next/image";
import React from "react";

export const HowItWorks = () => {
  return (
    <div className="bg-[#388087]">
      <div className="flex flex-col md:flex-row py-6 md:py-10 mx-auto items-center w-full max-w-[1350px] px-4 md:px-0 gap-6 md:gap-0">
        <div className="w-full md:w-[50%]">
          <img
            src="/assets/images/howitworkImg.png"
            width={100}
            height={100}
            className="w-full h-full"
            alt="How it works illustration"
          />
        </div>
        <div className="w-full md:w-[40%]">
          <div className="text-white">
            <h1
              style={{ fontFamily: "Juana-Light" }}
              className="text-3xl md:text-5xl"
            >
              How It Works
            </h1>
            <p className="text-sm md:text-base font-light mt-2 max-w-sm">
              Get registered and find someone and build a long term relationship
              that could lead to marriage Only marriage minded users.
            </p>
          </div>
          <div className="">
            <div className="flex justify-center md:justify-end w-full md:-mt-20 mt-6 md:mt-0">
              <div
                className="flex flex-col gap-3 items-center justify-between max-w-[300px] py-12 md:py-16 px-4"
                style={{
                  backgroundImage: `url(/assets/images/howitworks-bg.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              >
                <img src="/assets/svgs/profile.svg" alt="Profile icon" />
                <h1
                  className="font-extralight text-base md:text-lg text-[#424034]"
                  style={{ fontFamily: "Juana" }}
                >
                  Create your Profile
                </h1>
                <p className="text-center font-light text-xs md:text-sm text-[#424034]">
                  Create your profile here and find your perfect match!
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start w-full md:-mt-28 mt-6 md:mt-0">
              <div
                className="flex flex-col gap-3 items-center justify-between max-w-[300px] py-12 md:py-16 px-4"
                style={{
                  backgroundImage: `url(/assets/images/howitworks-bg.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              >
                <img src="/assets/svgs/profile.svg" alt="Profile icon" />
                <h1
                  className="font-extralight text-base md:text-lg text-[#424034]"
                  style={{ fontFamily: "Juana" }}
                >
                  Create your Profile
                </h1>
                <p className="text-center font-light text-xs md:text-sm text-[#424034]">
                  Create your profile here and find your perfect match!
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end w-full md:-mt-28 mt-6 md:mt-0">
              <div
                className="flex flex-col gap-3 items-center justify-between max-w-[300px] py-12 md:py-16 px-4"
                style={{
                  backgroundImage: `url(/assets/images/howitworks-bg.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              >
                <img src="/assets/svgs/profile.svg" alt="Profile icon" />
                <h1
                  className="font-extralight text-base md:text-lg text-[#424034]"
                  style={{ fontFamily: "Juana" }}
                >
                  Create your Profile
                </h1>
                <p className="text-center font-light text-xs md:text-sm text-[#424034]">
                  Create your profile here and find your perfect match!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
