import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ThemeProvider } from './ThemeContext';
import LandingPage from "./pages/LandingPage";
import Showrooms from "./pages/Showrooms";
import SellForMe from "./pages/SellForMe";
import Assessories from "./pages/Assessories";
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
      element: <LandingPage />,
      children: [
        { path: "marketplace", element: <Showrooms /> },
        { path: "sell-for-me", element: <SellForMe /> },
        { path: "assessories", element: <Assessories /> },
      ]
    }
    // {
    //   path: '/dealer',
    //   element: <DealerLayout />,
    //   children: [{ path: 'dashboard', element: <Dashboard /> }],
    // },
  ]);

  return (
    // <ThemeProvider>
    // </ThemeProvider>
    <RouterProvider router={router} />
  );
}

export default App;
