"use client"

import SignIn from "@/components/auth/sign-in";
import { Button } from "@/components/ui/button";
import type { AppProps } from "next/app";

export default function Home() {
  return (
    <>
      <SignIn></SignIn>
    </>
  );
}
