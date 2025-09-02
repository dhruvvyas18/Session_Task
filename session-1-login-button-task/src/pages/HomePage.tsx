import React, { useContext } from "react";
import { User } from "../common/interface/User";
import AuthContext from "../store/AuthContext";

export default function HomePage() {
  const loggedInUserInfo: string | null = localStorage.getItem("user");
  let JsonloggedInUserInfo: User | null;
  if (loggedInUserInfo) {
    JsonloggedInUserInfo = JSON.parse(loggedInUserInfo);
  } else {
    JsonloggedInUserInfo = null;
  }

  const isLoggin = useContext(AuthContext);
  console.log(isLoggin);

  return (
    <main className="flex-grow flex items-center justify-center p-10">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-2xl w-full text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Hello {JsonloggedInUserInfo ? JsonloggedInUserInfo.email! : "GUEST"}
        </h2>
        <p className="text-gray-600 text-lg">
          You have successfully logged in. This is your home page. 🎉
        </p>
        <p className="text-gray-500 mt-4">
          Feel free to customize this page to display your dashboard, user data,
          or any other content you want.
        </p>
      </div>
    </main>
  );
}
