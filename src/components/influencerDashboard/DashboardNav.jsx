import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <nav className="flex space-x-4 mb-6 border-b pb-2">
      <NavLink
        to="/influencer-dashboard"
        end
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`
        }
      >
        Overview
      </NavLink>
      <NavLink
        to="/influencer-dashboard/profile"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/influencer-dashboard/social-accounts"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`
        }
      >
        Social Accounts
      </NavLink>
      <NavLink
        to="/influencer-dashboard/opportunities"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`
        }
      >
        Opportunities
      </NavLink>
    </nav>
  );
};

export default DashboardNav;
