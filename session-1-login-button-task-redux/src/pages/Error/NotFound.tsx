export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center p-10">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-2xl w-full text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-gray-600 text-lg">
          Oops! The page you are looking for does not exist. 🚧
        </p>
        <p className="text-gray-500 mt-4">
          Please check the URL or go back to the home page.
        </p>
      </div>
    </main>
  );
}
