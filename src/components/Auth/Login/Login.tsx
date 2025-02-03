import { useState } from "react";
import logImg from "../../../assets/png/logImg.png";
import Eye from "../../../assets/icons/Eye";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Link } from "react-router-dom";
export default function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="flex justify-center">
      <div className="w-[68%] h-[100vh] overflow-hidden">
        <img src={logImg} alt="logotype" />
      </div>
      <div className="flex flex-col w-[32%] h-[100vh] p-12 gap-6">
        <p className="font-semibold text-[20px] text-left">
          Nice to see you again
        </p>
        <div className="flex flex-col w-full mt-8 gap-4">
          <label>Login</label>
          <input
            className="bg-[#808080] bg-opacity-15 px-4 py-2 rounded-md outline-none text-[#808080]"
            type="text"
          />

          <div className="relative flex flex-col ">
            <label>Password:</label>
            <input
              className="bg-[#808080] bg-opacity-15 px-4 py-2 rounded-md outline-none text-[#808080]"
              type={isPasswordVisible ? "text" : "password"}
            />
            <div
              onClick={handleShowPassword}
              className={`absolute top-[60%] right-[5%] cursor-pointer ${
                isPasswordVisible
                  ? "rotate-180 text-blue-700"
                  : "rotate-0 text-[#4d4d4d]"
              } transform transition-transform duration-200 ease-in-out`}
            >
              <Eye />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <FormGroup>
              <FormControlLabel control={<Switch />} label="Remember me" />
            </FormGroup>

            <Link to={"/"} className="text-blue-600 hover:text-blue-800">
              Forgot password
            </Link>
          </div>

          <div className="w-full mt-9">
            <button className="w-full text-center text-white bg-[#007AFF] px-6 py-[10px] rounded-md font-bold">
              Sign in
            </button>
          </div>

          <div className="h-[1px] bg-[#E5E5E5] w-full my-8"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
