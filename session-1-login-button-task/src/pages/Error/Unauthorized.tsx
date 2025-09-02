import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const [counter, setCounter] = useState<number>(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (counter <= 0) {
      navigate("/");
    }
  }, [counter, navigate]);

  return (
    <main className="flex-grow flex items-center justify-center p-10">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-2xl w-full text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          🚫 Unauthorized Access
        </h2>
        <p className="text-gray-600 text-lg">
          You do not have permission to view this page.
        </p>
        <p className="text-gray-500 mt-4">
          Please log in with the appropriate credentials to continue.
        </p>
        <h1 className="text-3xl font-semibold text-red-800">{counter}</h1>
      </div>
    </main>
  );
}
