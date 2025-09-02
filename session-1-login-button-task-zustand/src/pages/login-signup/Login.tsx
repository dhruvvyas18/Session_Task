import React, { useContext, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import type { User } from "../../common/interface/User";
import Input from "../../components/UI/input";
import { InputTypeEnum } from "../../types/type/commonEnums";
import useAuthStore from "../../store/storeZustand";

export default function Login() {
  const navigate = useNavigate();
  const contextData = useAuthStore();
  const [formData, setFormData] = useState<Partial<User>>({
    email: "",
    password: "",
  });

  const loginButtonRef = useRef<HTMLButtonElement>(null);
  const divElementRef = useRef<HTMLDivElement>(null);

  const [buttonCurrentPosition, setbuttonCurrentPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onCheckFormDataValidHandler = () => {
    if (
      formData.email!.trim().length === 0 ||
      formData.password!.trim().length === 0
    ) {
      return { isFormValid: false, errorMessage: "All Field  require" };
    }

    if (formData.password!.trim().length < 6) {
      return {
        isFormValid: false,

        errorMessage: "PassWord Must Greater than 6 Characters.",
      };
    }

    return { isFormValid: true };
  };

  const handleSubmit = () => {
    const { isFormValid, errorMessage } = onCheckFormDataValidHandler();

    if (!isFormValid) {
      alert(errorMessage);

      return;
    }

    const usersDataFromLocalStorage: string | null =
      localStorage.getItem("users");

    if (!usersDataFromLocalStorage) {
      alert("Users Not Found!");
    }

    const users: User[] = JSON.parse(usersDataFromLocalStorage as string);

    const existingUser: User | undefined = users.find(
      (user: User) =>
        user.email === formData.email && user.password === formData.password
    );

    if (existingUser) {
      contextData.userLogin(existingUser);

      alert("Welcome  " + existingUser.email);
      navigate("/home");
    } else {
      alert("invalid Id Pass");
    }
  };

  const onMoveHandler = () => {
    if (onCheckFormDataValidHandler().isFormValid) return;

    const loginBtnPositionData =
      loginButtonRef.current?.getBoundingClientRect();

    const loginBtnParentPositionData =
      divElementRef.current?.getBoundingClientRect();

    const maximumX =
      loginBtnParentPositionData!.width - loginBtnPositionData!.width;

    const maximumY =
      loginBtnParentPositionData!.height - loginBtnPositionData!.height;

    const randomX = Math.random() * maximumX;

    const randomY = Math.random() * maximumY;

    setbuttonCurrentPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your credentials to access your account
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <Input
              labelText="Email Address"
              id="email"
              name="email"
              type={InputTypeEnum.EMAIL}
              required={true}
              placeHolder="you@example.com"
              value={formData.email!}
              onChange={handleChange}
            />
            <Input
              labelText="Password"
              id="password"
              name="password"
              type={InputTypeEnum.PASSWORD}
              required={true}
              placeHolder="••••••••"
              value={formData.password!}
              onChange={handleChange}
            />
          </div>

          <div className="w-full h-30" ref={divElementRef}>
            <button
              style={{
                left: `${buttonCurrentPosition.x}px`,
                top: `${buttonCurrentPosition.y}px`,
              }}
              ref={loginButtonRef}
              onClick={handleSubmit}
              onMouseEnter={onMoveHandler}
              onMouseMove={onMoveHandler}
              className="relative w-require flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
            >
              LogIn
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                tabIndex={-1}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
