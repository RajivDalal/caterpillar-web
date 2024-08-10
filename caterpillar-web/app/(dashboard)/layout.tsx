"use client";

import SignIn from "@/components/auth/sign-in";
import { OrgSidebar } from "./_components/org-sidebar";
import Sidebar from "@/components/Sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({
    children
}: DashboardLayoutProps) => {
    return(
        <>
        <main className="h-full">
            <Sidebar/>
            <div className="pl=[60px] h-full">
                <div className="flex gap-x-3 h-full">
                
                    <div className="h-full flex-1">
                        {children}
                    </div>
                <OrgSidebar/>    
                </div>
            </div>
        </main>
        
        </>
    )
}

export default DashboardLayout;