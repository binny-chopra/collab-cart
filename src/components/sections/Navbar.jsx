import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signin");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleIdashboardClick = () => {
    navigate("/influencer-dashboard");
  };

  const handleCdashboardClick = () => {
    navigate("/company-dashboard");
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-sm">
      <div className="text-lg font-bold">CollabCart</div>
      <div className="space-x-4">
        <button
          onClick={handleLoginClick}
          className="text-sm px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer"
        >
          Log In
        </button>
        <button
          onClick={handleSignupClick}
          className="text-sm px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 cursor-pointer"
        >
          Sign Up
        </button>
        <button
          onClick={handleIdashboardClick}
          className="text-sm px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 cursor-pointer"
        >
          IDashboard
        </button>
        <button
          onClick={handleCdashboardClick}
          className="text-sm px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 cursor-pointer"
        >
          CDashboard
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
