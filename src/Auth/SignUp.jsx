import authimage from "../assets/authpage-images/cesado-auth-auth-page.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/icons/google-icon.png";
import facebook from "../assets/icons/facebook-icon.png";
import loginimage from "../assets/authpage-images/cesado-login-page.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthContext";

// Renders true only on md+ viewports. Used so we mount ONE form tree at a
// time instead of a desktop form + a mobile form both live in the DOM
// (which was causing the two forms to fight over the same RHF field names).
const useIsDesktop = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= breakpoint : true,
  );

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const handleChange = (e) => setIsDesktop(e.matches);
    handleChange(mql);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isDesktop;
};

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);
  const isDesktop = useIsDesktop();

  const onSubmit = (data) => {
    setError(null);
    let res;
    res = signUp(data.email, data.password);
    if (res.success) {
      navigate("/");
    } else {
      setError(res.error);
    }
  };

  return (
    <div className="bg-[#000] text-[#fff] justify-center items-center min-h-screen md:p-10">
      {isDesktop ? (
        // ---------- Desktop Auth page ----------
        <div className="w-[90%] flex mx-auto justify-between">
          <div className="w-[775px] relative">
            <img
              src={authimage}
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
                Michelangelo's The Creation of Adam captures the spark that
                gives life meaning. The near-touch of God and Adam reflects
                potential awakening and reminds us that life matters when we
                strive—connecting with purpose, others, and something greater.
                In reaching, we find the power to live fully and create meaning
              </p>
            </div>
          </div>
          {/* auth form */}
          <div className=" w-[472px] flex pt-20 px-6 items-start ">
            <div className="flex items-center gap-4 w-full flex-col">
              <p className="text-[20px] capitalize font-semibold mb-6 font-google-sans">
                Create an account
              </p>
              {error && <div className="text-red-500">{error}</div>}
              <form
                className="flex items-center gap-4 w-full flex-col"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col gap-2 items-start w-full">
                  <p className="capitalize text-[#6C7278] text-[16px]">email</p>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="johndoe@gmail.com"
                    className="border border-[#F4F4F4]/20 w-full p-2 pl-3 text-white placeholder:text-white/50 bg-white/10 text-[16px] rounded-lg outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2 items-start w-full">
                  <p className="capitalize text-[#6C7278] text-[16px]">
                    first name
                  </p>
                  <input
                    {...register("name", {
                      required: "First Name is required",
                    })}
                    id="name"
                    type="text"
                    placeholder="sarah"
                    className="border border-[#F4F4F4]/20 w-full p-2 pl-3 text-white placeholder:text-white/50 bg-white/10 text-[16px] rounded-lg outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 font-sans">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex relative flex-col gap-2 items-start w-full">
                  <p className="capitalize text-[#6C7278] text-[16px]">
                    create password
                  </p>
                  <input
                    id="password"
                    {...register("password", {
                      required: "password is required",
                      minLength: {
                        value: 4,
                        message: "password must be at least 4",
                      },
                      maxLength: {
                        value: 12,
                        message: "password must not exceed 12 chars",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="border border-[#F4F4F4]/20 w-full p-2 pl-3 text-white placeholder:text-white/50 bg-white/10 text-[16px] rounded-lg outline-none"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 bottom-1/2 pt-5 -translate-y-1/2 text-white/60"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                <div className="flex relative flex-col gap-2 items-start w-full">
                  <p className="capitalize text-[#6C7278] text-[16px]">
                    confirm password
                  </p>
                  <input
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="********"
                    className="border border-[#F4F4F4]/20 w-full p-2 pl-3 text-white placeholder:text-white/50 bg-white/10 text-[16px] rounded-lg outline-none"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 bottom-1/2 pt-5 -translate-y-1/2 text-white/60"
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                <button
                  type="submit"
                  className="bg-[#034FC2] capitalize p-4 w-full text-2xl font-google-sans font-semibold rounded-lg"
                >
                  signup
                </button>
              </form>
              <p className="capitalize font-google-sans text-[12px] font-normal mb-4 leading-relaxed">
                Registered already? Click{" "}
                <span className="text-[#F7B12FED]">
                  <Link to="/login">here</Link>
                </span>{" "}
                to Login to your account
              </p>
              <div className="flex items-center mb-4 gap-6">
                <span className="w-[6vw]  border border-[#78667E66]/40"></span>
                <p className="capitalize font-google-sans text-md text-[#F3EFEF]">
                  or sign up with
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
      ) : (
        // ---------- Mobile Auth page ----------
        <div className="flex w-full min-h-screen flex-col relative overflow-hidden">
          <img
            src={loginimage}
            alt="mobile-auth-image"
            className="w-full h-full object-cover object-[center_25%] scale-110 absolute inset-0"
          />
          <div className="absolute bg-gradient-to-b from-[#000]/80 via-[#000]/60 to-[#000]/80 inset-0"></div>
          <div className="relative z-10 flex flex-col self-center w-full p-4 pt-16 pb-10">
            <p className="font-google-sans font-bold text-[38px] capitalize mb-5 text-center">
              Cesado Art
            </p>
            <div className="flex flex-col items-center gap-2">
              <p className="my-4 text-[26px] font-google-sans font-semibold">
                create an account
              </p>
              <form
                className="flex flex-col gap-4 w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col items-start w-full gap-2">
                  <p className="text-3xl capitalize text-[#6C7278]">email</p>
                  <input
                    id="mobile-email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="johndoe@gmail.com"
                    className="border border-[#F4F4F4]/20 w-full p-2 pl-3 text-white placeholder:text-white/50 bg-white/10 text-[16px] rounded-lg outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="flex flex-col items-start w-full gap-2">
                  <p className="text-3xl capitalize text-[#6C7278]">
                    first name
                  </p>
                  <input
                    id="mobile-name"
                    type="text"
                    {...register("name", {
                      required: "First Name is required",
                    })}
                    placeholder="sarah luke"
                    className="border border-[#F4F4F4]/20 w-full p-2 pl-3 placeholder:capitalize text-white placeholder:text-white/50 bg-white/10 text-[16px] rounded-lg outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="flex flex-col items-start w-full gap-2">
                  <p className="text-3xl capitalize text-[#6C7278]">
                    create password
                  </p>
                  <div className="relative w-full">
                    <input
                      id="mobile-password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: "password is required",
                        minLength: {
                          value: 4,
                          message: "password must be at least 4",
                        },
                        maxLength: {
                          value: 12,
                          message: "password must not exceed 12 chars",
                        },
                      })}
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
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div className="flex flex-col items-start w-full gap-2">
                  <p className="text-3xl capitalize text-[#6C7278]">
                    confirm password
                  </p>
                  <div className="relative w-full">
                    <input
                      id="mobile-confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === watch("password") ||
                          "Passwords do not match",
                      })}
                      placeholder="********"
                      className="border border-[#F4F4F4]/20 w-full p-2 pl-3 text-white placeholder:text-white/50 bg-white/10 text-[16px] rounded-lg outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
                    >
                      {showConfirmPassword ? (
                        <FiEyeOff className="w-4 h-4" />
                      ) : (
                        <FiEye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#034FC2] capitalize p-4 w-full mt-8 text-2xl font-google-sans font-semibold rounded-lg"
                >
                  signup
                </button>
              </form>

              <p className="capitalize font-google-sans text-[12px] font-normal mb-4 leading-relaxed">
                Registered already? Click{" "}
                <span className="text-[#F7B12FED]">
                  <Link to="/login">here</Link>
                </span>{" "}
                to Login to your account
              </p>
              <div className="flex items-center mb-4 gap-6">
                <span className="w-[6vw]  border border-[#78667E66]/40"></span>
                <p className="capitalize font-google-sans text-md text-[#F3EFEF]">
                  or sign up with
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
      )}
    </div>
  );
};

export default SignUp;
