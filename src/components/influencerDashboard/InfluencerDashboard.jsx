import DashboardNav from "./DashboardNav";
import StatsCard from "./StatsCard";
import ProfileCompletion from "./ProfileCompletion";
import ConnectedAccounts from "./ConnectedAccounts";

const InfluencerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Influencer Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Manage your profile and social media accounts.
        </p>

        <DashboardNav />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard
            title="Total Followers"
            value="142.5K"
            change="+20.1% from last month"
          />
          <StatsCard
            title="Average Engagement"
            value="4.3%"
            change="+1.2% from last month"
          />
          <StatsCard
            title="Profile Views"
            value="342"
            change="+18% from last month"
          />
          <StatsCard
            title="Collaboration Requests"
            value="12"
            change="+4 from last month"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProfileCompletion />
          </div>
          <div>
            <ConnectedAccounts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;
