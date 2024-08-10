// components/ui/SignIn.tsx
"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { Bell } from 'lucide-react'; // Import a bell icon for notifications
export default function SignIn() {
    return (
        <div className="sign-in-container">
            <Unauthenticated>
                <SignInButton />
            </Unauthenticated>
            <Authenticated>
                <UserButton />
            </Authenticated>
            {/* Notification Button */}
            <button className="notificationButton">
                <Bell className="bellIcon" />
                {/* Example badge for notification count */}
                <div className="badge">3</div>
            </button>
        </div>
    );
}
