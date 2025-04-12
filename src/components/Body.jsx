import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./sections/Landing";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import InfluencerDashboard from "./influencerDashboard/InfluencerDashboard";
import CompanyDashboard from "./companyDashboard/CompanyDashboard";
import CompanyProfile from "./companyDashboard/CompanyProfile";
import CompanyOverview from "./companyDashboard/CompanyOverview";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/influencer-dashboard",
    element: <InfluencerDashboard />,
  },
  {
    path: "/company-dashboard",
    element: <CompanyDashboard />,
    children: [
      {
        index: true, // ✅ when path === /company-dashboard
        element: <CompanyOverview />, // ✅ shows all three sections
      },
      {
        path: "profile", // becomes /company-dashboard/profile
        element: <CompanyProfile />,
      },
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
