import Image from "next/image";
import React from "react";

const ForeignLeadHere = () => {
  return (
    <div className="flex my-20 mx-auto items-center w-full max-w-[1350px] justify-center">
      <div className="flex flex-col items-center">
        {" "}
        <h1
          className="uppercase text-5xl font-light leading-tight text-[#566737]"
          style={{ fontFamily: "Juana-Light" }}
        >
          Foreign Match leads here
        </h1>
        <p className="text-[#424034] mt-4 font-extralight max-w-2xl leading-relaxed text-base text-center">
          We are both naturally positive, happy-go-getters, but when you put us
          together, it feels like there is nothing we can’t accomplish.
        </p>
        {/* App Store Buttons */}
        <div className="flex items-center gap-4 mt-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              width={160}
              height={53}
              alt="Get it on Google Play"
              className="w-auto h-[50px]"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/500px-Download_on_the_App_Store_RGB_blk.svg.png"
              width={160}
              height={53}
              alt="Download on the App Store"
              className="w-auto h-[50px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForeignLeadHere;
