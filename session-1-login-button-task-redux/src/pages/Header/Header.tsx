import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContextType } from "../../types/type/commonTypes";
import { AuthActions } from "../../store/AuthSlice";

const Header: React.FC = (props) => {
  const navigate = useNavigate();
  const isLoggin = useSelector(
    (state: { AuthData: Partial<AuthContextType> }) => state.AuthData.isLoggin
  );
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(AuthActions.userLogout());
    alert("You have been logged out.");
    navigate("/");
  };
  return (
    <>
      <header className="bg-white shadow-md p-5 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Welcome to Dashboard
        </h1>
        {isLoggin ? (
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
