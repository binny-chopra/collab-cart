import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SignUp() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role");

  const [accountType, setAccountType] = useState(
    role === "influencer" ? "influencer" : "company"
  );

  const [formData, setFormData] = useState({
    companyName: "",
    userName: "",
    email: "",
    password: "",
    description: "",
  });

  useEffect(() => {
    setFormData({
      companyName: "",
      userName: "",
      email: "",
      password: "",
      description: "",
    });
  }, [accountType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userName: formData.userName || formData.companyName,
      emailId: formData.email,
      password: formData.password,
      type: accountType,
      description: formData.description,
    };

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result) {
        alert("✅ Account created successfully!");
        // Optional: redirect or reset form
      } else {
        alert("❌ Registration failed. Try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("🚫 Error occurred while connecting to the server.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-start px-4 sm:px-0">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
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
              type="button"
              onClick={() => setAccountType("influencer")}
              className={`px-4 py-2 border rounded-md font-medium ${
                accountType === "influencer"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Influencer
            </button>
            <button
              type="button"
              onClick={() => setAccountType("company")}
              className={`px-4 py-2 border rounded-md font-medium ${
                accountType === "company"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Company
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mb-6">
            {accountType === "company"
              ? "Create an account to find and collaborate with influencers"
              : "Create your influencer profile to discover new brand opportunities"}
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {accountType === "company" ? (
              <>
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Business Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="userName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    id="userName"
                    name="userName"
                    type="text"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </>
            )}

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
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                id="description"
                name="description"
                type="description"
                value={formData.description}
                onChange={handleChange}
                required
                minLength={6}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                {accountType === "company"
                  ? "Create Company Account"
                  : "Create Influencer Account"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>
              By clicking continue, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link
              to="/signin"
              className="text-purple-600 hover:text-purple-500"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
