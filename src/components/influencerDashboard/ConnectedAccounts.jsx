const ConnectedAccounts = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-medium mb-4">Connected Accounts</h3>
      <p className="text-sm text-gray-600 mb-3">
        Your linked social media accounts.
      </p>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-medium">Instagram</span>
          </div>
          <span className="text-sm text-gray-600">@username</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-medium">YouTube</span>
          </div>
          <span className="text-sm text-gray-600">@username</span>
        </div>
        <div className="flex items-center justify-between text-gray-400">
          <div className="flex items-center">
            <span className="font-medium">Twitter</span>
          </div>
          <span className="text-sm">Not connected</span>
        </div>
        <div className="flex items-center justify-between text-gray-400">
          <div className="flex items-center">
            <span className="font-medium">LinkedIn</span>
          </div>
          <span className="text-sm">Not connected</span>
        </div>
      </div>
    </div>
  );
};

export default ConnectedAccounts;
