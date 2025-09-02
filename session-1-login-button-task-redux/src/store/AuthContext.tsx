import React, { createContext, useState } from "react";
import { AuthContextType } from "../types/type/commonTypes";
import { User } from "../common/interface/User";

const AuthContext = createContext<AuthContextType>({
  isLoggin: false,
  userLoggin: (userData: User) => {},
  userLogout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggin, setIsLoggin] = useState<boolean>(false);

  const userLoggin = (userData: User) => {
    setIsLoggin(true);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const userLogout = () => {
    setIsLoggin(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ isLoggin, userLoggin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
