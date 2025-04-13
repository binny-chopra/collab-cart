import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <section className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-6">
            Join our platform today and start connecting with the perfect
            partners for your marketing campaigns.
          </p>
          <button
            onClick={handleSignUpClick}
            className="px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            Sign Up Now →
          </button>
        </div>
        <div className="relative">
          {/* Replaced white box with direct image URL */}
          <img
            src="https://www.socialpilot.co/wp-content/uploads/2024/02/Influencer-Marketing-Statistics-1024x651.jpg"
            alt="Influencer marketing statistics"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
