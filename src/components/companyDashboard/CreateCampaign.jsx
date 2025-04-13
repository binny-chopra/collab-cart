const CreateCampaign = () => {
    return (
      <div className="bg-white border-2 border-purple-500 p-6 rounded-lg shadow mt-6">
        <h2 className="text-2xl font-semibold mb-1">Create New Campaign</h2>
        <p className="text-sm text-gray-600 mb-6">
          Set up a new marketing campaign to find influencers.
        </p>
  
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Campaign Name</label>
            <input
              type="text"
              placeholder="e.g., Summer Collection Launch"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium">Campaign Description</label>
            <textarea
              placeholder="Describe your campaign goals and requirements"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
              rows="3"
            />
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Product Category</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Select a category</option>
                <option>Fashion</option>
                <option>Tech</option>
                <option>Beauty</option>
                <option>Fitness</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Campaign Budget</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Select budget range</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000+</option>
              </select>
            </div>
          </div>
  
          <div>
            <label className="block text-sm font-medium">Target Audience</label>
            <input
              type="text"
              placeholder="e.g., Women 18-34 interested in sustainable fashion"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium">Target Location</label>
            <input
              type="text"
              placeholder="e.g., United States, Canada"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Start Date</label>
              <input
                type="date"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">End Date</label>
              <input
                type="date"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
  
          <div className="text-right">
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              Create Campaign
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default CreateCampaign;
  