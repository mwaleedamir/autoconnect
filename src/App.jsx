import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ThemeProvider } from './ThemeContext';
import LandingPageLayout from "./pages/LandingPageLayout";
import Showrooms from "./pages/Showrooms";
import SellForMe from "./pages/SellForMe";
import ShopLayout from "./pages/ShopLayout";
// import PublicLayout from './layouts/PublicLayout';
// import DealerLayout from './layouts/DealerLayout';
// import MarketPlaceLayout from './layouts/MarketPlaceLayout';
// import Signup from './components/auth/Signup';
// import Login from './components/auth/Login';
// import Dashboard from './components/dealer/Dashboard';

function App() {
  const router = createBrowserRouter([
    // {
    //   path: '/user',
    //   element: <PublicLayout />,
    //   children: [
    //     { path: 'signup', element: <Signup /> },
    //     { path: 'login', element: <Login /> },
    //     { path: 'marketplace/:marketplace', element: <MarketPlaceLayout /> },
    //   ],
    // },
    {
      path: "/",
      element: <LandingPageLayout />,
      // children: [
      //   { path: "signup", element: <Signup /> },
      //   { path: "login", element: <Login /> }
      // ]
    },
    { path: "/shop", element: <ShopLayout /> },
    { path: "/sell-for-me", element: <SellForMe /> },
    {
      path: "/marketplace",
      element: <Showrooms />,
      children: [
        // { path: "marketplace/:marketplace", element: <MarketPlaceLayout /> }
      ]
    }

    //   path: '/dealer',
    //   element: <DealerLayout />,
    //   children: [{ path: 'dashboard', element: <Dashboard /> }],
    // },
  ]);

  return (
    // <ThemeProvider>
    // </ThemeProvider>
    <div className="font-mono ">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
