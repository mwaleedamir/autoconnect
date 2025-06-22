import { Outlet, Navigate } from "react-router-dom";
import OwnerPortalSidebar from "../components/OwnerPortalSidebar";
import { useSelector } from "react-redux";


const OwnerPortalDashboardLayout = () => {
  const {owner, token} = useSelector((state) => state.ownerAuth)
  console.log("owner",owner)
  if (!owner || !token) {
    return <Navigate to="/login" />
  } else {
    return (
      <div>
        <div className="flex">
          <OwnerPortalSidebar />
          <main className="flex-2">
            <Outlet />
          </main>
        </div>

      </div>
    );
  }
};

export default OwnerPortalDashboardLayout;
