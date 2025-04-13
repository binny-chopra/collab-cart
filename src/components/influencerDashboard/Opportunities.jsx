const Opportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: "Beauty Brand Campaign",
      description: "Looking for beauty influencers for a new product launch",
      budget: "$8,100-$8,500",
      location: "Brazil",
      status: "pending",
      type: "Beauty",
    },
    {
      id: 2,
      title: "Tech Gadget Review",
      description: "Seeking tech influencers to review our new smartphone",
      budget: "$3,000-$3,500",
      location: "Germany",
      status: "pending",
      type: "Technology",
    },
    {
      id: 3,
      title: "Fashion Collaboration",
      description: "Partner with fashion influencers for summer collection",
      budget: "$5,000-$6,500",
      location: "USA",
      status: "accepted",
      type: "Fashion",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Collaboration Opportunities</h2>
        <p className="text-gray-600">
          Companies interested in working with you.
        </p>
      </div>

      <div className="space-y-6">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="border rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${
                      opportunity.type === "Beauty"
                        ? "bg-pink-500"
                        : opportunity.type === "Technology"
                        ? "bg-blue-500"
                        : "bg-purple-500"
                    }`}
                  ></span>
                  <h3 className="font-bold text-lg">{opportunity.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{opportunity.description}</p>

                <div className="flex flex-wrap gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Budget Range</p>
                    <p className="font-medium">{opportunity.budget}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-medium">{opportunity.location}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Category</p>
                    <p className="font-medium">{opportunity.type}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-2 ml-4">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 whitespace-nowrap">
                  View Details
                </button>
                {opportunity.status === "pending" && (
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 whitespace-nowrap">
                    Complete Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
