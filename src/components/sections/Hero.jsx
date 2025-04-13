const Hero = () => {
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
            <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 cursor-pointer">
              Join as Influencer
            </button>
            <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 cursor-pointer">
              Join as Company
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white rounded-lg h-40" />
          <span className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            New!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
