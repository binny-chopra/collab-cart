import DashboardNav from "./DashboardNav";
import { Outlet } from "react-router-dom";

const InfluencerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Influencer Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Manage your profile and social media accounts.
        </p>

        <DashboardNav />
        <Outlet />
      </div>
    </div>
  );
};

export default InfluencerDashboard;
