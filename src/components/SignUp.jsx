import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [accountType, setAccountType] = useState("company");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-start px-4 sm:px-0">
          <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="sr-only">Back</span>
          </Link>
        </div>

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your information to create an account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setAccountType("influencer")}
              className={`px-4 py-2 border rounded-md font-medium ${accountType === "influencer" ? "bg-purple-600 text-white" : ""}`}
            >
              Influencer
            </button>
            <button
              onClick={() => setAccountType("company")}
              className={`px-4 py-2 border rounded-md font-medium ${accountType === "company" ? "bg-purple-600 text-white" : ""}`}
            >
              Company
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mb-6">
            {accountType === "company"
              ? "Create an account to find and collaborate with influencers"
              : "Create your influencer profile to discover new brand opportunities"}
          </p>

          <form className="space-y-6">
            {accountType === "company" ? (
              <>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Business Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                  />
                </div>
              </>
            )}

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700"
              >
                {accountType === "company" ? "Create Company Account" : "Create Influencer Account"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/signin" className="text-purple-600 hover:text-purple-500">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
