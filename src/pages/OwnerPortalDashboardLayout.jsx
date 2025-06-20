import { Outlet , Link} from "react-router-dom";
import OwnerPortalSidebar from "../components/OwnerPortalSidebar";

const OwnerPortalDashboardLayout = () => {
  return (
    <div>
      <div className="flex">
        <OwnerPortalSidebar />
      <main className="flex-2">
        <Outlet  />
      </main>
      </div>

    </div>
  );
};

export default OwnerPortalDashboardLayout;
