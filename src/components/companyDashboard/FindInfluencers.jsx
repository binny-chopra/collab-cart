import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const FindInfluencers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setInfluencers([
        {
          id: 1,
          name: "Binny Chopra",
          category: "Fashion & Lifestyle",
          followers: "120K",
          engagement: "4.5%",
          location: "New York, USA",
          unlockPrice: 255,
        },
        {
          id: 2,
          name: "Saanya Dhir",
          category: "Beauty & Skincare",
          followers: "250K",
          engagement: "3.8%",
          location: "Los Angeles, USA",
          unlockPrice: 256,
        },
        {
          id: 3,
          name: "Emily",
          category: "Tech & Gaming",
          followers: "85K",
          engagement: "5.2%",
          location: "San Francisco, USA",
          unlockPrice: 256,
        },
        {
          id: 4,
          name: "Jacob",
          category: "Food & Cooking",
          followers: "180K",
          engagement: "6.1%",
          location: "Chicago, USA",
        },
        {
          id: 5,
          name: "Kyra",
          category: "Fitness & Health",
          followers: "320K",
          engagement: "4.2%",
          location: "Miami, USA",
        },
        {
          id: 6,
          name: "Wanderwithsky",
          category: "Travel",
          followers: "420K",
          engagement: "3.5%",
          location: "Seattle, USA",
        },
      ]);
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  // Shimmer UI component
  const ShimmerCard = () => (
    <div className="border rounded-lg p-4">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
          <div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
          <div className="col-span-2">
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        </div>

        <div className="h-10 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Find Influencers</h2>
        <p className="text-gray-600">
          Discover influencers that match your campaign needs.
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {influencers.map((influencer) => (
            <div
              key={influencer.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg mb-2">{influencer.name}</h3>
              <p className="text-gray-700 mb-3">{influencer.category}</p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div>
                  <p className="text-xs text-gray-500">Followers</p>
                  <p className="font-medium">{influencer.followers}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Engagement</p>
                  <p className="font-medium">{influencer.engagement}</p>
                </div>
                {influencer.location && (
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-medium">{influencer.location}</p>
                  </div>
                )}
              </div>

              {influencer.unlockPrice ? (
                <button className="w-full py-2 px-4 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors">
                  Unlock Profile (${influencer.unlockPrice})
                </button>
              ) : (
                <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                  View Profile
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindInfluencers;
