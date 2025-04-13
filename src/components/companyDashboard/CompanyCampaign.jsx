import { Link } from "react-router-dom";

const Campaigns = () => {
  const campaigns = [
    {
      name: "Summer Collection Launch",
      description: "Fashion influencers promoting our summer line",
      budget: "$5,000",
      productcategory:"Fashion",
      target:"Women between 15-37, interested in summer linen fashion",
      location:"China"
    },
    {
      name: "Product Review Campaign",
      description: "Tech reviewers testing our new gadget",
      budget: "$3,000",
      productcategory:"Tech",
      target:"Youth attracted to social media platforms like youtube ",
      location:"England"
    },
    {
      name: "Brand Awareness",
      description: "Lifestyle influencers sharing our brand story",
      budget: "$2,500",
      productcategory: "Fitness",
      target:"Youth aged between 15-38, actively into fitness",
      location:"USA"
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Active Campaigns</h2>

      </div>

      <p className="text-sm text-gray-600 mb-4">
        Manage your ongoing marketing campaigns.
      </p>

      <div className="space-y-4">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-sm flex justify-between items-center"
          >
                <div>
                <h3 className="font-medium text-lg">{campaign.name}</h3>
                <p className="text-sm text-gray-600">{campaign.description}</p>

                {/* Budget Line */}
                <div className="mt-2 text-sm">
                    <span className="font-semibold">Budget: {campaign.budget}</span>
                </div>

                {/* Divider Line and Info */}
                <div className="mt-2 border-t border-gray-300 pt-2 text-sm space-y-1">
                    <div >
                    Product Category: {campaign.productcategory}
                    </div>
                    <div >
                    Target Audience: {campaign.target}
                    </div>
                    <div >
                    Location: {campaign.location}
                    </div>
                </div>
                </div>
            <button className="border border-gray-300 text-sm px-4 py-1 rounded-md hover:bg-gray-100">
              Find Influencer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
