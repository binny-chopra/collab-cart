import { Outlet, useNavigate } from "react-router-dom";
import DashboardNav from "./DashboardNav";

const InfluencerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (like clearing tokens, etc.)
    console.log("Logging out...");
    navigate("/"); // Navigates to landing page
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold">Influencer Dashboard</h1>
            <p className="text-gray-600">
              Manage your profile and social media accounts.
            </p>
          </div>
          <button
            className="bg-purple-500 hover:bg-purple-600 cursor-pointer text-white font-medium py-2 px-4 rounded-lg transition-colors"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        <DashboardNav />
        <Outlet />
      </div>
    </div>
  );
};

export default InfluencerDashboard;
