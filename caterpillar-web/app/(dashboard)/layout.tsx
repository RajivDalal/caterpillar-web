// components/DashboardLayout.tsx
"use client";

import React from "react";
import RightSideDiv from "./_components/RightSideDiv";
import Sidebar from "@/app/(dashboard)/_components/sidebar/Sidebar";


interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <div className="h-full min-h-screen">
      <Sidebar />
      <div className="">
        <div className="pl-[60px] flex-grow">
          {children}
        </div>
      </div>
      <RightSideDiv />
    </div>
  );

}

export default DashboardLayout;
