'use client';

import { usePathname } from 'next/navigation';
import Navbar from '../Components/Navbar';

export function NavbarRenderer() {
  const pathname = usePathname();

  const renderNavBar =
    pathname !== '/' && pathname !== '/login' && pathname !== '/register';

  return renderNavBar ? <Navbar /> : null;
}
