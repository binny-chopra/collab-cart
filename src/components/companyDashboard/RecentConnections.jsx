const RecentConnections = () => {
  const connections = [
    {
      name: "Sarah Johnson",
      niche: "Fashion & Lifestyle",
      followers: "120K followers",
    },
    {
      name: "Mike Chen",
      niche: "Tech Reviews",
      followers: "68K followers",
    },
    {
      name: "Emma Wilson",
      niche: "Beauty",
      followers: "720K followers",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-medium mb-4">Recent Connections</h3>
      <p className="text-sm text-gray-600 mb-3">
        Influencers you've recently connected with.
      </p>
      <div className="space-y-4">
        {connections.map((connection, index) => (
          <div key={index} className="border-b pb-3 last:border-b-0">
            <h4 className="font-medium">{connection.name}</h4>
            <p className="text-sm text-gray-600">
              {connection.niche} • {connection.followers}
            </p>
            <button className="text-sm mt-2 px-3 py-1 border rounded text-purple-600 hover:bg-purple-50">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentConnections;
