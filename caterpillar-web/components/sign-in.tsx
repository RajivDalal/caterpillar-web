// components/ui/SignIn.tsx
"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { BellIcon, HelpCircleIcon } from 'lucide-react'; // Import a bell icon for notifications
export default function SignIn() {
    return (
        <div className=" fixed top-4 right-6  sign-in-container">
            <button type="button" className="w-8 h-8 bg-transparent flex justify-center items-center relative">
                    <HelpCircleIcon size={20} />
                </button>
            <div>
                <button type="button" className="w-8 h-8 bg-transparent flex justify-center items-center relative">
                    <BellIcon size={20}/>
                </button>
            </div>

            <Unauthenticated>
                <SignInButton />
            </Unauthenticated>
            <Authenticated>
                <UserButton />
            </Authenticated>

        </div>
    );
}
