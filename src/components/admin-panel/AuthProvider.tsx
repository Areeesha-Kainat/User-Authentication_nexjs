"use client"
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface PropTypes{
    children: ReactNode
  
}

const AuthProvider = ({children}:PropTypes) => {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;
