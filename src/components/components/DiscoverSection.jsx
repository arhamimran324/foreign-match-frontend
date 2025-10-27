import React from "react";

export const DiscoverSection = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center my-10 px-4 lg:px-0 gap-10">
      {/* Image Section */}
      <div className="lg:flex-1 w-full flex justify-center">
        <img
          src="/assets/images/discover-img.png"
          alt="Discover"
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="lg:flex-1 text-center lg:text-left">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl text-[#566737] lg:max-w-md mx-auto lg:mx-0"
          style={{ fontFamily: "Juana-Light" }}
        >
          Discover Your Soulmate Abroad
        </h1>

        <p className="text-[#424034] font-extralight text-sm sm:text-base mt-3 leading-relaxed">
          There’s more to Foreign Match than just Match. Register with us,
          create your perfect online dating profile and so you don’t miss out on
          a chance to find that special someone, your profile can be made
          visible to members of our dating services for the over 50s or single
          parents if you’re part of categories of singles they address and you
          consented to it. That means you will increase your chances of being
          contacted!
        </p>

        <h1
          className="text-3xl sm:text-4xl lg:text-5xl text-[#566737] lg:max-w-md mt-10 mx-auto lg:mx-0"
          style={{ fontFamily: "Juana-Light" }}
        >
          Trust and Safety
        </h1>

        <p className="text-[#424034] font-extralight text-sm sm:text-base mt-3 leading-relaxed">
          We want Match to be a fun, safe online dating site where you can meet
          serious, committed singles ready for a real relationship. The safety
          of our clients is our top priority, and we work hard to keep our site
          safe. We moderate every single profile picture and description on our
          site, and the protection of your personal data is our priority.
        </p>

        <p className="text-[#424034] font-extralight text-sm sm:text-base mt-4 leading-relaxed">
          Plus if you ever feel uncomfortable about a profile or a message you
          receive you can always block or report a member to our moderators.
          They’ll be happy to help. We also have lots of tips about making sure
          you stay safe while you’re using our site and when you decide it’s
          time to meet in real life. Just take a look in our help centre.
        </p>

        <a
          href="#"
          className="text-[#388087] cursor-pointer hover:underline font-extralight text-sm sm:text-base mt-5 inline-block"
        >
          For more information about your profile visibility click here.
        </a>
      </div>
    </div>
  );
};
