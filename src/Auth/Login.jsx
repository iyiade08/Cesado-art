import loginimage from "../assets/authpage-images/cesado-login-page.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/icons/google-icon.png";
import facebook from "../assets/icons/facebook-icon.png";
import mobileloginimage from "../assets/authpage-images/galaxy-mobile-login-image.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#000] text-[#fff] justify-center items-center min-h-screen md:p-10">
      <div className=" w-[90%] hidden md:flex mx-auto justify-between">
        <div className="w-[775px] relative">
          <img
            src={loginimage}
            alt="authImage"
            className="w-full object-cover h-[736px]"
          />
          <div className="absolute bg-gradient-to-b from-[#000]/70 via-[#000]/40 to-[#000]/70 inset-0"></div>
          <p className="absolute left-4 capitalize mt-2 ml-4 text-[18px] leading-relaxed font-google-sans font-medium top-0 left-0">
            Cesado Art
          </p>
          <div className="absolute items-center flex bottom-8 px-8 w-full justify-between">
            <p className="text-[18px] ml-4 font-google-sans font-normal leading-relaxed capitalize">
              James Anderson
            </p>
            <p className="font-google-sans w-[25vw] mr-6">
              Michelangelo’s The Creation of Adam captures the spark that gives
              life meaning. The near-touch of God and Adam reflects potential
              awakening and reminds us that life matters when we
              strive—connecting with purpose, others, and something greater. In
              reaching, we find the power to live fully and create meaning
            </p>
          </div>
        </div>
        {/* auth form */}
        <div className=" w-[472px] flex pt-20 px-6 items-start ">
          <div className="flex items-center gap-4 w-full flex-col">
            <p className="text-[20px] capitalize font-semibold mb-6 font-google-sans">
              login to your account
            </p>
            <form className="flex items-center gap-4 w-full flex-col">
              <div className="flex flex-col gap-2 items-start w-full">
                <p className="capitalize text-[#6C7278] text-[16px]">email</p>
                <input
                  id="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="border border-[#F4F4F4]/20 w-full p-2 pl-3 text-white placeholder:text-white/50 bg-white/10 text-[16px] rounded-lg outline-none"
                />
              </div>

              <div className="flex relative flex-col gap-2 items-start w-full">
                <p className="capitalize text-[#6C7278] text-[16px]">
                  password
                </p>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="border border-[#F4F4F4]/20 w-full p-2 pl-3 text-white placeholder:text-white/50 bg-white/10 text-[16px] rounded-lg outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 bottom-1/2 pt-5 -translate-y-1/2 text-white/60"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </form>
            <button className="bg-[#034FC2] capitalize p-4 w-full text-2xl font-google-sans font-semibold rounded-lg">
              login
            </button>
            <p className="capitalize font-google-sans text-[12px] font-normal mb-4 leading-relaxed">
              don't have an account? Click{" "}
              <span className="text-[#F7B12FED]">
                <Link to="/">here</Link>
              </span>{" "}
              to create your account
            </p>
            <div className="flex items-center mb-4 gap-6">
              <span className="w-[6vw]  border border-[#78667E66]/40"></span>
              <p className="capitalize font-google-sans text-md text-[#F3EFEF]">
                or login with
              </p>
              <span className="w-[6vw]   border border-[#78667E66]/40"></span>
            </div>
            {/* social media tabs */}
            <div className="flex gap-6 items-center justify-center w-full">
              <button type="button">
                <div className="p-6 flex gap-2 rounded-full items-center justify-center  border border-white w-[190px]">
                  <span className="w-[24px]">
                    <img
                      src={google}
                      alt="google-img"
                      className="object-cover w-full"
                    />
                  </span>

                  <span className="text-lg font-google-sans font-semibold text-[#fff] capitalize">
                    Google
                  </span>
                </div>
              </button>
              <button type="button">
                <div className="p-6 flex gap-2 rounded-full items-center justify-center  border border-white w-[190px]">
                  <span className="w-[24px]">
                    <img
                      src={facebook}
                      alt="google-img"
                      className="object-cover w-full"
                    />
                  </span>

                  <span className="text-lg font-google-sans font-semibold text-[#fff] capitalize">
                    facebook
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile loginPage */}
      <div className="flex md:hidden w-full min-h-screen flex-col relative overflow-hidden">
        <img
          src={mobileloginimage}
          alt="mobile-auth-image"
          className="w-full h-full object-cover object-[center_25%] scale-110 absolute inset-0"
        />
        <div className="absolute bg-gradient-to-b from-[#000]/80 via-[#000]/60 to-[#000]/80 inset-0"></div>
        <div className="relative pb-10 mt-28 z-10 flex flex-col self-center w-full p-4 pt-16 pb-10">
          <p className="font-google-sans font-bold text-[38px] capitalize mb-5 text-center">
            Cesado Art
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="my-4 text-[26px] font-google-sans font-semibold">
              login to your account
            </p>
            <form className="flex flex-col gap-4 w-full">
              <div className="flex flex-col items-start w-full gap-2">
                <p className="text-3xl capitalize text-[#6C7278]">email</p>
                <input
                  id="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="border border-[#F4F4F4]/20 w-full p-2 pl-3 text-white placeholder:text-white/50 bg-white/10 text-[16px] rounded-lg outline-none"
                />
              </div>

              <div className="flex flex-col items-start w-full gap-2">
                <p className="text-3xl capitalize text-[#6C7278]">password</p>

                <div className="relative w-full">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="border border-[#F4F4F4]/20 w-full p-2 pl-3 text-white placeholder:text-white/50 bg-white/10 text-[16px] rounded-lg outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
                  >
                    {showPassword ? (
                      <FiEyeOff className="w-4 h-4" />
                    ) : (
                      <FiEye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </form>
            <button className="bg-[#034FC2] capitalize p-4 w-full mt-8 text-2xl font-google-sans font-semibold rounded-lg">
              Login
            </button>
            <p className="capitalize font-google-sans text-[12px] font-normal mb-4 leading-relaxed">
              don't have an account? Click{" "}
              <span className="text-[#F7B12FED]">
                <Link to="/">here</Link>
              </span>{" "}
              to create your account
            </p>
            <div className="flex items-center mb-4 gap-6">
              <span className="w-[6vw]  border border-[#78667E66]/40"></span>
              <p className="capitalize font-google-sans text-md text-[#F3EFEF]">
                or login with
              </p>
              <span className="w-[6vw]   border border-[#78667E66]/40"></span>
            </div>
            <div className="flex gap-6 items-center justify-center w-full">
              <button type="button">
                <div className="p-6 flex gap-2 rounded-full items-center justify-center  border border-white w-[190px]">
                  <span className="w-[24px]">
                    <img
                      src={google}
                      alt="google-img"
                      className="object-cover w-full"
                    />
                  </span>
                  <span className="text-lg font-google-sans font-semibold text-[#fff] capitalize">
                    Google
                  </span>
                </div>
              </button>
              <button type="button">
                <div className="p-6 flex gap-2 rounded-full items-center justify-center  border border-white w-[190px]">
                  <span className="w-[24px]">
                    <img
                      src={facebook}
                      alt="google-img"
                      className="object-cover w-full"
                    />
                  </span>
                  <span className="text-lg font-google-sans font-semibold text-[#fff] capitalize">
                    facebook
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
