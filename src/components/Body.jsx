import Landing from "./sections/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import InfluencerDashboard from "./influencerDashboard/InfluencerDashboard";
import CompanyDashboard from "./companyDashboard/CompanyDashboard";
import ProfilePage from "./influencerDashboard/ProfilePage"; // Import the ProfilePage component
import Overview from "./influencerDashboard/Overview";

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
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
      ],
    },
    {
      path: "/company-dashboard",
      element: <CompanyDashboard />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
