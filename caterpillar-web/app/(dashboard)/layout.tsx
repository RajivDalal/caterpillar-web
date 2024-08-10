"use client";

import SignIn from "@/components/auth/sign-in";
import Sidebar from "../../components/Sidebar";
import exp from "constants";
import { Children } from "react";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({
    children,
}: DashboardLayoutProps) => {
    return(
        <>
        <nav className="h-full float-right">
            <div className="pl=[60px] h-full">
                {children}
            </div>
            <SignIn/>
        </nav>
        <Sidebar/>
        </>
    )
}

export default DashboardLayout;