const ProfileCompletion = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-medium mb-2">Profile Completion</h3>
      <p className="text-sm text-gray-600 mb-3">
        Complete your profile to increase visibility to companies.
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-purple-600 h-2.5 rounded-full"
          style={{ width: "25%" }}
        ></div>
      </div>
      <div className="mt-3 space-y-2">
        <div className="flex items-center text-sm">
          <span className="text-green-500">✓</span>
          <span className="ml-2">Profile Information</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-green-500">✓</span>
          <span className="ml-2">Social Accounts</span>
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <span>○</span>
          <span className="ml-2">Content Categories</span>
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <span>○</span>
          <span className="ml-2">Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;
