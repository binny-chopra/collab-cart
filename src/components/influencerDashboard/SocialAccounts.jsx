const SocialAccounts = () => {
  const socialAccounts = [
    {
      platform: "Instagram",
      connected: true,
      username: "@username",
      followers: "85.2K",
      engagement: "5.2%",
    },
    {
      platform: "YouTube",
      connected: true,
      username: "@username",
      followers: "32.4K",
      engagement: "3.8%",
    },
    {
      platform: "Twitter",
      connected: false,
    },
    {
      platform: "LinkedIn",
      connected: false,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Social Accounts</h2>
      <p className="text-gray-600 mb-8">
        Manage your connected social media accounts.
      </p>

      <div className="space-y-6">
        {socialAccounts.map((account) => (
          <div
            key={account.platform}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{account.platform}</h3>
                {account.connected ? (
                  <>
                    <p className="text-sm text-gray-600">
                      Connected as {account.username}
                    </p>
                    <div className="flex gap-4 mt-2">
                      <div>
                        <p className="text-xs text-gray-500">Followers</p>
                        <p className="font-medium">{account.followers}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Engagement</p>
                        <p className="font-medium">{account.engagement}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-gray-600">Not connected</p>
                )}
              </div>
              <div>
                {account.connected ? (
                  <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm hover:bg-gray-200">
                    Refresh Stats
                  </button>
                ) : (
                  <button className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700">
                    Connect Account
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialAccounts;
