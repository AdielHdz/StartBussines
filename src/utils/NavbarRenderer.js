"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Components/Navbar/Navbar";

export function NavbarRenderer() {
  const pathname = usePathname();

  const renderNavBar =
    pathname !== "/" && pathname !== "/logIn" && pathname !== "/register";

  return renderNavBar ? <Navbar /> : null;
}
