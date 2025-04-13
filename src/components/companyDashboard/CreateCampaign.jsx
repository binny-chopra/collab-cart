import { useState } from "react";

const CreateCampaign = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    budget: "",
    audience: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/campaign/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const success = await response.json();
      if (success) {
        alert("✅ Campaign created successfully!");
        setForm({
          name: "",
          description: "",
          category: "",
          budget: "",
          audience: "",
          location: "",
          startDate: "",
          endDate: "",
        });
      } else {
        alert("❌ Failed to create campaign.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error occurred while connecting to the server.");
    }
  };

  return (
    <div className="bg-white border-2 border-purple-500 p-6 rounded-lg shadow mt-6">
      <h2 className="text-2xl font-semibold mb-1">Create New Campaign</h2>
      <p className="text-sm text-gray-600 mb-6">
        Set up a new marketing campaign to find influencers.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Campaign Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g., Summer Collection Launch"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Campaign Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your campaign goals and requirements"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
            rows="3"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Product Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Select a category</option>
              <option value="Fashion">Fashion</option>
              <option value="Tech">Tech</option>
              <option value="Beauty">Beauty</option>
              <option value="Fitness">Fitness</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Campaign Budget</label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Select budget range</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Target Audience</label>
          <input
            name="audience"
            type="text"
            value={form.audience}
            onChange={handleChange}
            placeholder="e.g., Women 18-34 interested in sustainable fashion"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Target Location</label>
          <input
            name="location"
            type="text"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g., United States, Canada"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Start Date</label>
            <input
              name="startDate"
              type="date"
              value={form.startDate}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">End Date</label>
            <input
              name="endDate"
              type="date"
              value={form.endDate}
              onChange={handleChange}
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
