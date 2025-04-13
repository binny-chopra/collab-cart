import { NavLink } from "react-router-dom";

const CompanyDashboardNav = () => {
  return (
    <nav className="flex space-x-4 mb-6 border-b pb-2">
      <NavLink
        to="/company-dashboard"
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
        to="/company-dashboard/profile"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`
        }
      >
        Company Profile
      </NavLink>
      <NavLink
        to="/company-dashboard/campaign"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`
        }
      >
        Campaigns
      </NavLink>
      <NavLink
        to="/company-dashboard/find-influencers"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`
        }
      >
        Find Influencers
      </NavLink>
    </nav>
  );
};

export default CompanyDashboardNav;
