import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist or an error occurred.
        </p>
        <Link to="/" aria-label="Back to the home page">
          <button className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md text-lg font-medium transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Error;
