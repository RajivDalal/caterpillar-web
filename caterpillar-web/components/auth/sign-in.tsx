"use client:"

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";

export default function SignIn()
{
    return ( 
        <>
        <Unauthenticated>
            <SignInButton />
        </Unauthenticated>
        
        <Authenticated>
            <UserButton />
        </Authenticated>
        </>
     );
};