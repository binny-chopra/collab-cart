import Landing from "./sections/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import InfluencerDashboard from "./influencerDashboard/InfluencerDashboard";
import CompanyDashboard from "./companyDashboard/CompanyDashboard";
import CompanyCampaigns from "./companyDashboard/CompanyCampaigns";

const Body = () => {
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
    },
    {
      path: "/company-campaigns",
      element: <CompanyCampaigns />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
