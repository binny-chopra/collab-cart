import StatsCard from "./StatsCard";
import ActiveCampaigns from "./ActiveCampaigns";
import RecentConnections from "./RecentConnections";

const CompanyOverview = () => {
  return (
    <>
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
    </>
  );
};

export default CompanyOverview;
