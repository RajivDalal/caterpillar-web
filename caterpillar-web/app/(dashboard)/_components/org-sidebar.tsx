"use client"

import SignIn from "@/components/auth/sign-in"
import Calendar from "@/components/ui/calendar"

export const OrgSidebar = () =>{

    return(
        <>
        
        <div className="hidden lg:flex flex-col space-y-6 w-[350px] border bg-white">
            <div className="flex items-center gap-x-4 p-5">
                <div className="hidden lg:flex lg:flex-1 bg-yellow"/>
                <SignIn />
            </div>
            <Calendar/>
        </div>
        </>
    )
}