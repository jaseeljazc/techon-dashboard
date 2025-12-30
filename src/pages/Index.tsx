// import Header from "@/components/Header";
// import Sidebar from "@/components/Sidebar";
// import DocumentsExpiringChart from "@/components/DocumentsExpiringChart";
// import ThisMonthExpiresTable from "@/components/ThisMonthExpiresTable";
// import DocumentsExpiryTable from "@/components/DocumentsExpiryTable";
// import StatCard from "@/components/StatCard";

// import { officerLogo, assetManagementLogo, foldersLogo } from "@/assets/ui";

// /* ================================
//    Custom Icons
// ================================ */

// const OfficersIconGroup = () => (
//   <div className="relative w-8 h-8">
//     <img
//       src={officerLogo}
//       alt="Officer"
//       className="absolute left-0 top-0  pt-2 sm:pt-0 sm:w-9 sm:h-9 rounded-full object-cover"
//     />
//     <img
//       src={officerLogo}
//       alt="Officer"
//       className="absolute left-1 sm:left-2 top-0 pt-2  sm:pt-0 sm:w-9 sm:h-9 rounded-full object-cover"
//     />
//   </div>
// );

// const AssetIcon = () => (
//   <img
//     src={assetManagementLogo}
//     alt="Assets"
//     className="w-6 h-6 object-contain"
//   />
// );

// const FolderIcon = () => (
//   <img src={foldersLogo} alt="Folders" className="w-6 h-6 object-contain" />
// );

// /* ================================
//    Page
// ================================ */

// const Index = () => {
//   return (
//     <div className="min-h-screen flex flex-col dashboard-gradient dashboard-radial-glow">
//       <Header />

//       <div className="flex flex-1">
//         {/* Sidebar (hidden on mobile) */}
//         <div className="hidden lg:block ml-5">
//           <Sidebar />
//         </div>

//         <main className="flex-1 p-4 lg:mx-10">
//           {/* MAIN GRID */}
//           <div className="flex flex-col gap-4 gri lg:grid-rows-[55%_40%] lg:h-full">
//             {/* 🔹 TOP ROW */}
//             <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[1fr_2fr] lg:h-full">
//               {/* Chart */}
//               <div className="h-[260px] lg:h-full">
//                 <DocumentsExpiringChart />
//               </div>

//               {/* This Month Table */}
//               <div className="h-auto lg:h-full">
//                 <ThisMonthExpiresTable />
//               </div>
//             </div>

//             {/* 🔹 BOTTOM ROW */}
//             <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[1fr_2fr] lg:h-full">
//               {/* Documents Expiry Table */}
//               <div className="h-auto lg:h-full">
//                 <DocumentsExpiryTable />
//               </div>

//               {/* Stats */}
//               <div
//                 className="
//                   grid grid-cols-4
//                   sm:grid-cols-2
//                   lg:grid-cols-4
//                   gap-4
//                   glass-shadow
//                   bg-card/30
//                   p-4
//                   rounded-3xl
//                  sm:h-[235px]

//                 "
//               >
//                 <StatCard
//                   icon={<OfficersIconGroup />}
//                   label="Total Employees"
//                   value={3}
//                 />
//                 <StatCard icon={<AssetIcon />} label="Total Assets" value={5} />
//                 <StatCard
//                   icon={<FolderIcon />}
//                   label="Total Folders"
//                   value={0}
//                 />
//                 <StatCard
//                   icon={<FolderIcon />}
//                   label="Archived Folders"
//                   value={0}
//                 />
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Index;

import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import DocumentsExpiringChart from "@/components/DocumentsExpiringChart";
import ThisMonthExpiresTable from "@/components/ThisMonthExpiresTable";
import DocumentsExpiryTable from "@/components/DocumentsExpiryTable";
import StatCard from "@/components/StatCard";

import { officerLogo, assetManagementLogo, foldersLogo } from "@/assets/ui";

const OfficersIconGroup = () => (
  <div className="relative w-8 h-8">
    <img
      src={officerLogo}
      alt="Officer"
      className="absolute left-0 top-0 pt-2 sm:pt-0 sm:w-9 sm:h-9 rounded-full object-cover"
    />
    <img
      src={officerLogo}
      alt="Officer"
      className="absolute left-1 sm:left-2 top-0 pt-2 sm:pt-0 sm:w-9 sm:h-9 rounded-full object-cover"
    />
  </div>
);

const AssetIcon = () => (
  <img src={assetManagementLogo} alt="Assets" className="w-6 h-6" />
);

const FolderIcon = () => (
  <img src={foldersLogo} alt="Folders" className="w-6 h-6" />
);


const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col dashboard-gradient dashboard-radial-glow">
      {/* Header */}
      <Header />

      <div className="flex flex-1 relative">
        {/* MOBILE OVERLAY */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed lg:static z-50
            h-full
            transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
            lg:ml-5
          `}
        >
          <Sidebar/>
        </div>

        {/* Main */}
        <main className="flex-1 p-4 lg:mx-10">
          {/* MAIN GRID */}
          <div className="flex flex-col gap-4 gri lg:grid-rows-[55%_40%] lg:h-full">
            {/* 🔹 TOP ROW */}
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[1fr_2fr] lg:h-full">
              {/* Chart */}
              <div className="h-[260px] lg:h-full">
                <DocumentsExpiringChart />
              </div>

              {/* This Month Table */}
              <div className="h-auto lg:h-full">
                <ThisMonthExpiresTable />
              </div>
            </div>

            {/* 🔹 BOTTOM ROW */}
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[1fr_2fr] lg:h-full">
              {/* Documents Expiry Table */}
              <div className="h-auto lg:h-full">
                <DocumentsExpiryTable />
              </div>

              {/* Stats */}
              <div
                className="
                  grid grid-cols-4
                  sm:grid-cols-2
                  lg:grid-cols-4
                  gap-4
                  glass-shadow
                  bg-card/30
                  p-4
                  rounded-3xl
                 sm:h-[235px]
                 
                "
              >
                <StatCard
                  icon={<OfficersIconGroup />}
                  label="Total Employees"
                  value={3}
                />
                <StatCard icon={<AssetIcon />} label="Total Assets" value={5} />
                <StatCard
                  icon={<FolderIcon />}
                  label="Total Folders"
                  value={0}
                />
                <StatCard
                  icon={<FolderIcon />}
                  label="Archived Folders"
                  value={0}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
