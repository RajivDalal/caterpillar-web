// components/DashboardLayout.tsx
"use client";

import React from "react";
import RightSideDiv from "@/components/RightSideDiv";
import SignIn from "@/components/auth/sign-in";
import Sidebar from "@/components/Sidebar";


interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <div className="flex h-full min-h-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <div className="pl-[60px] flex-grow">
          {children}
        </div>
        <SignIn />
      </div>
      <RightSideDiv />
    </div>
  );
}

export default DashboardLayout;
