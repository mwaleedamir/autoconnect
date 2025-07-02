import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPageLayout from "./pages/LandingPageLayout";
import Showrooms from "./pages/Showrooms";
import SellForMe from "./pages/SellForMe";
import ShopLayout from "./pages/ShopLayout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import OwnerPortalDashboardLayout from "./pages/OwnerPortalDashboardLayout";
import OwnerPortalProfile from "./pages/OwnerPortalProfile";
import OwnerPortalCreateListings from "./pages/OwnerPortalCreateListings";
import OwnerPortalSettings from "./pages/OwnerPortalSettings";
import OwnerPortalShowListings from "./pages/OwnerPortalShowListings";
import OwnerPortalDashboard from "./pages/OwnerPortalDashboard";



function App() {
  const router = createBrowserRouter([
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
    { path: "/shop", element: <ShopLayout /> },
    { path: "/sell-for-me", element: <SellForMe /> },
    { path: "/", element: <LandingPageLayout /> },
    {
      path: "/owner",
      element : (
        <OwnerPortalDashboardLayout/>
      ),
      children:[
     { path:"dashboard/:id", element:<OwnerPortalDashboard/>},
     { path:"profile/:id", element:<OwnerPortalProfile/>},
     { path:"portal-create-listings/:id", element:<OwnerPortalCreateListings/>},
     { path:"portal-Show-listings/:id", element:<OwnerPortalShowListings/>},
     { path:"portal-settings/:id", element:<OwnerPortalSettings/>},
     { path:"portal-Show-listings/:id", element:<OwnerPortalProfile/>},
      ]
    },
    {
      path: "/marketplace",
      element: <Showrooms />,
      children: [
      ]
    }
  ]);

  return (
    <div className="font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
