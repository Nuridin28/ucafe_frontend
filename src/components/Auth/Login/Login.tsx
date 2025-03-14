import {useState} from "react";
import logImg from "../../../assets/png/logImg.png";
import Eye from "../../../assets/icons/Eye";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import {Link} from "react-router-dom";
import SocialMediaSignInBtn from "../Buttons/SocialMediaSignInBtn";
import googleIcon from "../../../assets/png/googleIcon.png";
import {userApi} from "../../../api/userApi.ts";
import * as React from "react";
import {userStore} from "../../../app/userStore.ts";
import {useAuthStore} from "../../../app/authStore.ts";

export default function LoginForm () {

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [loginInput, setLoginInput] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const {setFullName, setEmail} = userStore((state) => state);

    const login = useAuthStore((state) => state.login);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        if (name === "login") {
            setLoginInput(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const handleShowPassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const api = userApi;

    const loginFn = async () => {
        const userData = { loginInput, password };

        if(!userData.loginInput || !userData.password) {
            alert('enter login and password');
            return;
        }

        try {
            const res = await api.login(userData.loginInput, userData.password);
            alert('login successful');
            setFullName(res.fullName);
            setEmail(res.email);
            window.location.href = '/'
            login()
        } catch (err) {
            alert('login or password is incorrect');
            console.error("Error: ", err);
        }
    };


    return (
        <div className="flex md:justify-center items-center h-screen w-full">
            <div className="w-[68%] h-[100vh] overflow-hidden md:block hidden">
                <img src={logImg} alt="logotype"/>
            </div>
            <div className="flex flex-col h-[100vh] p-4 sm:p-12 gap-6 w-full md:w-[32%]">
                <p className="font-semibold text-[20px] text-left">
                    Nice to see you again
                </p>
                <div className="flex flex-col w-full mt-8 gap-4">
                    <label>Login</label>
                    <input
                        name={'login'}
                        onChange={e => handleInputChange(e)}
                        className="bg-[#808080] bg-opacity-15 px-4 py-2 rounded-md outline-none text-[#808080]"
                        type="text"
                    />

                    <div className="relative flex flex-col ">
                        <label>Password:</label>
                        <input
                            name={'password'}
                            onChange={e => handleInputChange(e)}
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
                            <Eye/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <FormGroup>
                            <FormControlLabel control={<Switch/>} label="Remember me"/>
                        </FormGroup>

                        <Link to={"/"} className="text-blue-600 hover:text-blue-800">
                            Forgot password
                        </Link>
                    </div>

                    <div className="w-full mt-9">
                        <button onClick={() => loginFn()}
                                className="w-full text-center text-white bg-[#007AFF] px-6 py-[10px] rounded-md font-bold">
                            Sign in
                        </button>
                    </div>

                    <div className="h-[1px] bg-[#E5E5E5] w-full my-8"></div>
                </div>
                <div>
                    <SocialMediaSignInBtn
                        icon={googleIcon}
                        text="Google"
                        alt="googleLogo"
                    />
                </div>

                <div className="flex items-center gap-2 text-xs font-normal justify-center">
                    <p>Dont have an account?</p>
                    <Link to={"/auth/registration"} className="text-[#007AFF]">
                        Sign up now
                    </Link>
                </div>
            </div>
        </div>
    );
}
