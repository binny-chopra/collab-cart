const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">How It Works</h2>
        <p className="mb-10">
          Our platform makes it easy to find the perfect match for your
          marketing needs.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-600 p-6 rounded-lg">
            <div className="text-2xl font-bold mb-2">1</div>
            <h3 className="font-semibold mb-1">Create Your Profile</h3>
            <p className="text-sm">
              Sign up as an influencer or company and create your detailed
              profile.
            </p>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg">
            <div className="text-2xl font-bold mb-2">2</div>
            <h3 className="font-semibold mb-1">Get Matched</h3>
            <p className="text-sm">
              Our algorithm matches companies with the most relevant influencers
              based on niche, audience, and budget.
            </p>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg">
            <div className="text-2xl font-bold mb-2">3</div>
            <h3 className="font-semibold mb-1">Connect & Collaborate</h3>
            <p className="text-sm">
              Companies unlock influencer profiles and start collaborating on
              successful campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
