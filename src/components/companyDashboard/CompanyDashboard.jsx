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
        {/* Overview content (shown when no nested route is active) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard
            title="Active Campaigns"
            value="3"
            change="+1 from last month"
          />
          <StatsCard
            title="Influencer Connections"
            value="12"
            change="+8 from last month"
          />
          <StatsCard
            title="Total Reach"
            value="1.2M"
            change="+358% from last month"
          />
          <StatsCard
            title="Budget Spent"
            value="$4,250"
            change="+$13,200 from last month"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActiveCampaigns />
          <RecentConnections />
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
