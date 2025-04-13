import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./sections/Landing";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import InfluencerDashboard from "./influencerDashboard/InfluencerDashboard";
import CompanyDashboard from "./companyDashboard/CompanyDashboard";
import CompanyProfile from "./companyDashboard/CompanyProfile";
import CompanyOverview from "./companyDashboard/CompanyOverview";
import CompanyCampaign from "./companyDashboard/CompanyCampaign";
import CreateCampaign from "./companyDashboard/CreateCampaign";
import Overview from "./influencerDashboard/Overview";
import ProfilePage from "./influencerDashboard/ProfilePage";
import SocialAccounts from "./influencerDashboard/SocialAccounts";
import Opportunities from "./influencerDashboard/Opportunities";

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
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "social-accounts",
        element: <SocialAccounts />,
      },
      {
        path: "opportunities",
        element: <Opportunities />,
      },
    ],
  },
  {
    path: "/company-dashboard",
    element: <CompanyDashboard />,
    children: [
      {
        index: true,
        element: <CompanyOverview />,
      },
      {
        path: "profile",
        element: <CompanyProfile />,
      },
      {
        path: "campaign",
        element: <CompanyCampaign />,
      },
      {
        path: "campaigns/create", // ✅ New route
        element: <CreateCampaign />,
      },
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
