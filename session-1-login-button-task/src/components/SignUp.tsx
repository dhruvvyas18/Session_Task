import React, { useRef, useState } from "react";
import type { User } from "../common/interface/User";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState<User>({
    confirmPassword: "",
    email: "",
    password: "",
  });
  const [buttonCurrentPosition, setbuttonCurrentPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const signUpButtonRef = useRef<HTMLButtonElement>(null);
  const BtnParentRef = useRef<HTMLDivElement>(null);

  const onValidateFormDataHandler = () => {
    if (
      formData.email.trim().length === 0 ||
      formData.confirmPassword.trim().length === 0 ||
      formData.password.trim().length === 0
    ) {
      return { IsFormValid: false, message: "Fields can not be empty!" };
    }

    if (formData.password.trim().length < 6) {
      console.log(formData.password);

      return {
        IsFormValid: false,
        message: "Password must be greter then 6 character",
      };
    }

    if (formData.password !== formData.confirmPassword) {
      return {
        IsFormValid: false,
        message: "PASS and Cofirm Pass Must be same",
      };
    }

    return { IsFormValid: true };
  };

  const onhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = () => {
    const { IsFormValid, message } = onValidateFormDataHandler();
    if (!IsFormValid) {
      alert(message);
      return;
    }

    const userDataFromLocalStorage: string | null =
      localStorage.getItem("users");

    if (!userDataFromLocalStorage) {
      localStorage.setItem("users", JSON.stringify([formData]));
    } else {
      const users: Partial<User>[] = JSON.parse(userDataFromLocalStorage);
      const existingUser = users.find(
        (user: Partial<User>) => user.email! === formData.email
      );

      if (existingUser) {
        alert("email  is already exist");
        return;
      }
      users.push({ email: formData.email, password: formData.password });
      localStorage.setItem("users", JSON.stringify(users));
    }
  };

  const onMoveHandler = () => {
    if (onValidateFormDataHandler().IsFormValid) return;
    const loginBtnPositionData =
      signUpButtonRef.current?.getBoundingClientRect();
    const loginBtnParentPositionData =
      BtnParentRef.current?.getBoundingClientRect();
    const MaximumX =
      loginBtnParentPositionData!.width - loginBtnPositionData!.width;
    const MaximumY =
      loginBtnParentPositionData!.height - loginBtnPositionData!.height;
    const randX = Math.random() * MaximumX;
    const randY = Math.random() * MaximumY;
    setbuttonCurrentPosition({ x: randX, y: randY });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-10 rounded-xl shadow-lg space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">Sign up to get started</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
                value={formData.email}
                onChange={onhandleChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
                value={formData.password}
                onChange={onhandleChange}
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={onhandleChange}
              />
            </div>
          </div>

          <div className="w-full h-30" ref={BtnParentRef}>
            <button
              onClick={onSubmitHandler}
              onMouseMove={onMoveHandler}
              ref={signUpButtonRef}
              style={{
                left: `${buttonCurrentPosition.x}px`,
                top: `${buttonCurrentPosition.y}px`,
              }}
              className="relative flex justify-center py-3 px-6 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              Sign up
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/"
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
