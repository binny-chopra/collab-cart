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
      <div className="text-lg font-bold">CollabConnect</div>
      <div className="space-x-4">
        <a href="#" className="text-sm hover:underline">
          About
        </a>
        <a href="#" className="text-sm hover:underline">
          Pricing
        </a>
        <a href="#" className="text-sm hover:underline">
          Contact
        </a>
        <button
          onClick={handleLoginClick}
          className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
        >
          Log In
        </button>
        <button
          onClick={handleSignupClick}
          className="text-sm px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Sign Up
        </button>
        <button
          onClick={handleIdashboardClick}
          className="text-sm px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          IDashboard
        </button>
        <button
          onClick={handleCdashboardClick}
          className="text-sm px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          CDashboard
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
