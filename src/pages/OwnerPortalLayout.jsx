import React from "react";
import { Outlet } from "react-router-dom";
import OwnerPortalSidebar from "../components/OwnerPortalSidebar";
import OwnersPortalDashboard from "../components/OwnersPortalDashboard";

const OwnerPortalLayout = () => {
  return (
    <div>
      <div className="flex">
        <OwnerPortalSidebar />
        <div className="flex-1">
          <OwnersPortalDashboard />
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default OwnerPortalLayout;
