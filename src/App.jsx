import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPageLayout from "./pages/LandingPageLayout";
import Showrooms from "./pages/Showrooms";
import SellForMe from "./pages/SellForMe";
import ShopLayout from "./pages/ShopLayout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PublicLayout from "./layout/PublicLayout";


function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <PublicLayout />,
      children: [
      ]
    },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
    { path: "/shop", element: <ShopLayout /> },
    { path: "/sell-for-me", element: <SellForMe /> },
    { path: "/", element: <LandingPageLayout /> },

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
