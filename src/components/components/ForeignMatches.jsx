import React from "react";

export const ForeignMatches = () => {
  return (
    <div className="bg-primary">
      <div className="flex py-10 mx-auto items-center w-full max-w-[1200px] lg:px-0 px-4 lg:flex-row flex-col">
        <div className="lg:w-[50%] w-full">
          <div className="text-white">
            <h1 style={{ fontFamily: "Juana-Light" }} className="text-5xl">
              How Our Foreign Match Works
            </h1>
            <p className="text-base font-light mt-2 ">
              Foreign Match has led to millions of relationships, marriages, and
              friendships around the world. Want to see what we’re building
              next? Sign up to get our latest updates and feature drops—straight
              to your inbox.
              <br />
              <br />
              Whether it's tips from our dating experts, how we're using AI to
              power better matchmaking, or feature updates like ID Verification
              that improve members' safety, you’ll be the first to discover how
              we’re putting love at the heart of Match.
            </p>
          </div>
        </div>
        <div className="lg:w-[50%] w-full">
          <img
            src="/assets/images/How-Our-Foreign.png"
            width={100}
            height={100}
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
