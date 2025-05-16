import React from "react";
import sidebarItems  from "../consts/ownerSidebarItems";
import { Link } from "react-router-dom";

const OwnerPortalSidebar = () => {
  return (
    <aside className="min-w-64 min-h-screen">
      <div className=" ">
        {sidebarItems.map(item =>
          <Link
            to={item.link}
            className="flex gap-2 items-center justify-between px-3 py-2 my-2 rounded-md bg-amber-50"
          >
            <item.logo/>
            <p className="font-bold  ">
              {item.name}
            </p>
          </Link>
        )}
      </div>
    </aside>
  );
};

export default OwnerPortalSidebar;
