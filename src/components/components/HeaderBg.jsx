"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SelectBox from "./ui/SelectBox";

const HeaderBg = ({ image }) => {
  const router = useRouter();
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen md:h-[95vh]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="mx-auto w-[25%] md:w-[20%] flex items-end justify-center py-3 md:py-5">
        <Image
          src="/assets/images/logo.png"
          width={100}
          height={30}
          className="w-full h-full"
          alt="Foreign Match Logo"
        />
      </div>
      <div className="w-full flex items-center justify-center mt-6 md:mt-10 px-4">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] mx-auto gap-6 md:gap-10">
          {/* LEFT SIDE — Text Section */}
          <div className="flex-1 text-white text-center md:text-left">
            <h1
              className="uppercase text-2xl md:text-4xl lg:text-5xl font-light leading-tight"
              style={{ fontFamily: "Juana-Light" }}
            >
              Find <span className="text-[#446A91]">Love</span> Across Borders
            </h1>
            <p className="text-white mt-3 md:mt-4 font-extralight max-w-lg leading-relaxed text-sm md:text-base mx-auto md:mx-0">
              Love knows no boundaries and neither should you. With Foreign
              Match, you can connect with people across the US, Canada, Africa,
              UK, Australia, and the Caribbean. Our profile verification process
              is designed to keep you comfortable and confident while meeting
              genuine people from around the world. Whether you're looking for
              shared passions or exciting new experiences, Foreign Match makes
              it easy to discover love that truly crosses borders.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 mt-4 md:mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  width={160}
                  height={53}
                  alt="Get it on Google Play"
                  className="lg:w-full w-auto  h-[45px] md:h-[50px]"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/500px-Download_on_the_App_Store_RGB_blk.svg.png"
                  width={160}
                  height={53}
                  alt="Download on the App Store"
                  className="lg:w-full w-auto h-[45px] md:h-[50px]"
                />
              </a>
            </div>
          </div>

          <div className="flex-1 w-full md:max-w-lg bg-white/20 backdrop-blur-lg p-4 md:p-6 rounded-2xl shadow-xl text-white">
            <h2 className="text-2xl md:text-4xl font-light mb-3 md:mb-4 text-center">
              FIND YOUR PARTNER
            </h2>
            <form className="flex flex-col gap-2 text-white">
              <SelectBox
                placeholder="I am a Man"
                firstValue="I am a Man"
                secondValue="I am a Woman"
                width="100%"
                bgColor="#ffffff33"
              />
              <SelectBox
                placeholder="Seeking for"
                firstValue="Man"
                secondValue="Woman"
                width="100%"
                bgColor="#ffffff33"
              />
              <SelectBox
                placeholder="Age"
                firstValue="18 - 25"
                secondValue="26 - 35"
                thirdValue="36 - 45"
                fourthValue="46+"
                width="100%"
                bgColor="#ffffff33"
              />
              <SelectBox
                placeholder="Country"
                firstValue="United States"
                secondValue="Canada"
                thirdValue="United Kingdom"
                fourthValue="Australia"
                fifthValue="Africa"
                width="100%"
                bgColor="#ffffff33"
              />

              <button
                type="button"
                className="mt-3 bg-primary hover:bg-[#94a883] transition-all text-white py-2 md:py-3 rounded-md font-light text-lg md:text-2xl"
                style={{ fontFamily: "Juana-Light" }}
              >
                Match Suggestions
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBg;
