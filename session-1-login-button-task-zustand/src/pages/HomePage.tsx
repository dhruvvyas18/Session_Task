import React, { useContext } from "react";
import { User } from "../common/interface/User";
import useAuthStore from "../store/storeZustand";

export default function HomePage() {
  let parsedData: any = null;
  const loggedInUserInfo: string | null =
    localStorage.getItem("user-auth-data");
  let JsonloggedInUserInfo;
  if (loggedInUserInfo) {
    JsonloggedInUserInfo = JSON.parse(loggedInUserInfo);
    parsedData = Object.values(JsonloggedInUserInfo)[0];
  } else {
    JsonloggedInUserInfo = null;
  }

  return (
    <main className="flex-grow flex items-center justify-center p-10">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-2xl w-full text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Hello {parsedData.user.email ? parsedData.user.email! : "GUEST"}
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
