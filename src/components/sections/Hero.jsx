import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleInfluencerClick = () => {
    navigate("/signup?role=influencer");
  };

  const handleCompanyClick = () => {
    navigate("/signup?role=company");
  };

  return (
    <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Connect Influencers with Companies
          </h2>
          <p className="mb-6">
            Our platform matches digital influencers with companies looking for
            the perfect marketing collaborators.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleInfluencerClick}
              className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            >
              Join as Influencer
            </button>
            <button
              onClick={handleCompanyClick}
              className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            >
              Join as Company
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://cdn.shopify.com/s/files/1/0070/7032/articles/best_2520influencer_2520marketing_2520platforms_fcf68482-b574-4215-abf0-81e6bc586fcb.png?v=1742415776&originalWidth=1848&originalHeight=782&width=1800"
            alt="Influence"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <span className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            New!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
