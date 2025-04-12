const ActiveCampaigns = () => {
  const campaigns = [
    {
      name: "Summer Collection Launch",
      description: "Fashion influencers promoting our summer line",
      budget: "$5,000",
      influencers: "5 influencers",
    },
    {
      name: "Product Review Campaign",
      description: "Tech reviewers building on new gadget",
      budget: "$3,500",
      influencers: "3 influencers",
    },
    {
      name: "Brand Awareness",
      description: "Lifestyle influencers sharing our brand story",
      budget: "$2,900",
      influencers: "7 influencers",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-medium mb-4">Active Campaigns</h3>
      <p className="text-sm text-gray-600 mb-3">
        Your current marketing campaigns.
      </p>
      <div className="space-y-4">
        {campaigns.map((campaign, index) => (
          <div key={index} className="border-b pb-3 last:border-b-0">
            <h4 className="font-medium">{campaign.name}</h4>
            <p className="text-sm text-gray-600">{campaign.description}</p>
            <div className="flex justify-between text-sm mt-1">
              <span>Budget: {campaign.budget}</span>
              <span>{campaign.influencers}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveCampaigns;
