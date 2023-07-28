'use client';
import { SessionProvider } from 'next-auth/react';

export function AuthProvider(props) {
  return <SessionProvider>{props.children}</SessionProvider>;
}

export default AuthProvider;
