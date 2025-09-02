import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

const Header: React.FC = (props) => {
  const navigate = useNavigate();
  const contextData = useContext(AuthContext);

  const handleLogout = () => {
    contextData.userLogout();
    alert("You have been logged out.");
    navigate("/");
  };
  return (
    <>
      <header className="bg-white shadow-md p-5 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Welcome to Dashboard
        </h1>
        {contextData.isLoggin ? (
          <button
            onClick={handleLogout}
            className="bg-indigo-600 btn text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </header>
    </>
  );
};

export default Header;
