import React from 'react';
import { ThemeContextProvider } from '../context/ThemeContext';
import { AuthContextProvider } from '../context/AuthContext';
import Mainlayout from '../components/MainLayout';

export default function Home() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Mainlayout />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};
