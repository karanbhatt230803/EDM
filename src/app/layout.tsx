// src/app/layout.tsx

import './globals.css';
import Navbar from '@/app/components/Navbar';  // Use the alias instead of relative path

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Render the Navbar */}
        {children}
      </body>
    </html>
  );
}
