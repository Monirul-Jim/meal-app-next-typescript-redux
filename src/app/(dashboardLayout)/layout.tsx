import DashboardSidebar from "@/Shared/DashboardSidebar/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />

      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
