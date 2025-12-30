import { useState } from "react";
import { MoreHorizontal, Menu, X } from "lucide-react";
import { GoHomeFill } from "react-icons/go";

import {
  notificationLogo,
  techonLogo,
  techonTextLogo,
  assetsLogo,
  businessIcon,
  userLogo,
  moneyFlowLogo,
  lineChartLogo,
} from "@/assets/ui";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem = ({ icon, label, isActive = false }: NavItemProps) => (
  <button
    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
      isActive
        ? "bg-[#D2F561] shadow-lg"
        : "bg-white hover:bg-muted shadow-card"
    }`}
  >
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
      {icon}
    </div>
    <span className="text-sm font-medium text-foreground">{label}</span>
  </button>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER BAR */}
      <header className="relative z-50 flex items-center justify-between px-4 lg:px-6 py-4">
        {/* LEFT */}
        <div className="flex items-center gap-4 lg:gap-6">
          <img src={techonTextLogo} alt="Brand logo" className="w-28 lg:w-32" />
          <h1 className="hidden lg:block text-3xl font-bold text-[#02024B]">
            Dashboard
          </h1>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 lg:gap-4">
          <button>
            <img
              src={notificationLogo}
              alt="Notifications"
              className="w-7 h-7 lg:w-8 lg:h-8"
            />
          </button>

          {/* Desktop Profile */}
          <div className="hidden lg:flex items-center gap-3 border-l border-white pl-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary">
              <img src={techonLogo} alt="Techon" className="rounded-full" />
            </div>

            <div className="flex flex-col">
              <span className="text-md text-[#4B66E3] font-semibold">
                techon
              </span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>

            <MoreHorizontal className="w-6 h-6 text-muted-foreground" />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
          >
            {open ? (
              <X className="w-7 h-7 text-[#C8E764]" />
            ) : (
              <Menu className="w-7 h-7 text-[#C8E764]" />
            )}
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur- z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="fixed z-50 left-4 right-4 top-[72px] rounded-3xl bg-card/95 glass-shadow p-4 animate-fade-in lg:hidden">
          <nav className="flex flex-col gap-3">
            <NavItem
              icon={<GoHomeFill className="w-5 h-5" />}
              label="Dashboard"
              isActive
            />

            <NavItem
              icon={<img src={businessIcon} className="w-5 h-5 invert" />}
              label="Dashboard"
            />

            <NavItem
              icon={<img src={userLogo} className="w-5 h-5" />}
              label="Dashboard"
            />

            <NavItem
              icon={<img src={assetsLogo} className="w-5 h-5 invert" />}
              label="Dashboard"
            />

            <NavItem
              icon={<img src={moneyFlowLogo} className="w-5 h-5 invert" />}
              label="Dashboard"
            />

            <NavItem
              icon={<img src={lineChartLogo} className="w-5 h-5 invert" />}
              label="Dashboard"
            />
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
