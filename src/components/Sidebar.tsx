import React from "react";

import {
  assetsLogo,
  foldersLogo,
  officerLogo,
  boxIcon,
  businessIcon,
  lineChartLogo,
  notificationLogo,
  techonLogo,
  userLogo,
  moneyFlowLogo,
} from "@/assets/ui";

import { GoHomeFill } from "react-icons/go";
import { LogOut } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  isActive?: boolean;
}

const NavItem = ({ icon, isActive = false }: NavItemProps) => (
  <button
    className={`w-12 h-12 rounded-2xl    flex items-center justify-center transition-all duration-200 ${
      isActive
        ? "bg-[#D2F561] shadow-lg"
        : "bg-white hover:bg-muted shadow-card"
    }`}
  >
    {icon}
  </button>
);

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center py-6 px-3 gap-3 ">
      {/* Top Navigation */}
      <nav className="flex flex-col gap-3  rounded-2xl p- bg-card/30">
        <NavItem icon={<GoHomeFill className="w-5 h-5" />} isActive />

        <NavItem
          icon={
            <img
              src={businessIcon}
              alt="Assets"
              className="w-5 h-5 object-contain invert"
            />
          }
        />

        <NavItem
          icon={
            <img
              src={userLogo}
              alt="Folders"
              className="w-5 h-5 object-contain"
            />
          }
        />

        <NavItem
          icon={
            <img
              src={assetsLogo}
              alt="Users"
              className="w-5 h-5 object-contain invert"
            />
          }
        />

        <NavItem
          icon={
            <img
              src={moneyFlowLogo}
              alt="Inventory"
              className="w-5 h-5 object-contain invert"
            />
          }
        />

        <NavItem
          icon={
            <img
              src={lineChartLogo}
              alt="Business"
              className="w-5 h-5 object-contain invert"
            />
          }
        />
      </nav>

      <div className="flex-1" />

      {/* Bottom Navigation */}
      <div className="flex flex-col gap-3 bg-white/60 rounded-2xl  shadow-card mt-20">
        <NavItem
          icon={<LogOut className="w-5 h-5 object-contain bg-white" />}
        />
        {/* Profile Avatar */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          <img
            src={techonLogo}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
