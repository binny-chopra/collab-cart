const StatsCard = ({ title, value, change }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <p className="text-green-500 text-sm mt-1">{change}</p>
    </div>
  );
};

export default StatsCard;
