"use client"

import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";

export default function Home() {
  return (
    <>
      <main>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
    </main>
    </>
  );
}
