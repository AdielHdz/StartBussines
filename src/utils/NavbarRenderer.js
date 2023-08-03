"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Components/Navbar/Navbar";

export function NavbarRenderer() {
  const pathname = usePathname();

  const renderNavBar =
    pathname !== "/" &&
    pathname !== "/logIn" &&
    pathname !== "/register" &&
    pathname !== "/checkemail";

  return renderNavBar ? <Navbar /> : null;
}
