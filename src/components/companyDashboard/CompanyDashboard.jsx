import { Outlet } from "react-router-dom";
import CompanyDashboardNav from "./CompanyDashboardNav";
import StatsCard from "./StatsCard";
import ActiveCampaigns from "./ActiveCampaigns";
import RecentConnections from "./RecentConnections";

const CompanyDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Company Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Manage your profile and find influencers for your campaigns.
        </p>
        <CompanyDashboardNav />
        <Outlet /> {/* For nested routes */}
       
      </div>
    </div>
  );
};

export default CompanyDashboard;
