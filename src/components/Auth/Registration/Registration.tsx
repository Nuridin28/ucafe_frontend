import { useEffect, useState } from "react";
import Eye from "../../../assets/icons/Eye";
import {userApi} from "../../../api/userApi.ts";
import * as React from "react";

export const Registration = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [phoneNumber  , setPhoneNumber] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  useEffect(() => {
    const user = {
      firstName,
      secondName,
      phoneNumber,
      login,
      password,
      confirmPassword,
    };

    console.log(user);
  }, [firstName, secondName, phoneNumber, login, password, confirmPassword]);

  const dataForBackend = {
    fullName:firstName + " " + secondName,
    email: login,
    avatarUrl: 'https://example.com/avatar.jpg',
    password,
  };

  const api = userApi;

  const handleRegistration = async () => {
    const response = await api.register(dataForBackend.email, dataForBackend.password, dataForBackend.fullName, dataForBackend.avatarUrl);
    console.log(response);
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleSecondNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondName(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex md:justify-center w-full md:p-12 p-4">
      <div className="flex flex-col w-full mt-8 gap-4">
        <h1 className="text-center">Registration</h1>
        <label>First Name</label>
        <input
          className="bg-[#808080] bg-opacity-15 px-4 py-2 rounded-md outline-none text-[#808080]"
          type="text"
          onChange={handleFirstNameChange}
        />
        <label>Second Name</label>
        <input
          className="bg-[#808080] bg-opacity-15 px-4 py-2 rounded-md outline-none text-[#808080]"
          type="text"
          onChange={handleSecondNameChange}
        />
        <label>Phone number</label>
        <input
          className="bg-[#808080] bg-opacity-15 px-4 py-2 rounded-md outline-none text-[#808080]"
          type="text"
          onChange={handlePhoneNumberChange}
        />
        <label>Login</label>
        <input
          className="bg-[#808080] bg-opacity-15 px-4 py-2 rounded-md outline-none text-[#808080]"
          type="text"
          onChange={handleLoginChange}
        />

        <div className="relative flex flex-col ">
          <label>Password:</label>
          <input
            className="bg-[#808080] bg-opacity-15 px-4 py-2 rounded-md outline-none text-[#808080]"
            type={isPasswordVisible ? "text" : "password"}
            onChange={handlePasswordChange}
          />
          <div
            onClick={handleShowPassword}
            className={`absolute top-[60%] right-[1%] cursor-pointer ${
              isPasswordVisible
                ? "rotate-180 text-blue-700"
                : "rotate-0 text-[#4d4d4d]"
            } transform transition-transform duration-200 ease-in-out`}
          >
            <Eye />
          </div>
        </div>
        <div className="relative flex flex-col ">
          <label>Confirm Password:</label>
          <input
            className="bg-[#808080] bg-opacity-15 px-4 py-2 rounded-md outline-none text-[#808080]"
            type={isPasswordVisible ? "text" : "password"}
            onChange={handleConfirmPasswordChange}
          />
          <div
            onClick={handleShowPassword}
            className={`absolute top-[60%] right-[1%] cursor-pointer ${
              isPasswordVisible
                ? "rotate-180 text-blue-700"
                : "rotate-0 text-[#4d4d4d]"
            } transform transition-transform duration-200 ease-in-out`}
          >
            <Eye />
          </div>
        </div>

        <div className="w-full mt-9">
          <button onClick={handleRegistration} className="w-full text-center text-white bg-[#007AFF] px-6 py-[10px] rounded-md font-bold">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
