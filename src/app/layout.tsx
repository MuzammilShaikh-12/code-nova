import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from '@/lib/utils';


export const metadata: Metadata = {
  title: "CodeNova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
     appearance={{
      baseTheme: [],
        variables: {
          colorPrimary: '#6247FF',
          colorTextOnPrimaryBackground: '#ffffff',
          colorBackground: '#1a1a2e',
          colorInputBackground: '#222055',
          colorInputText: '#ffffff',
          colorText: '#ffffff',
        },
        elements: {
          card: 'cn-glass',
          formFieldInput: 'cn-input-field',
          socialButtonsBlockButton: 'cn-social-btn',
          formButtonPrimary: 'cn-primary-btn',
          headerTitle: 'cn-auth-title',
          headerSubtitle: 'cn-auth-subtitle',
        }
     }}>
      <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans",
          "antialiased bg-[#1a1a2e] text-white"
      )}>
        {children}
      </body>
      </html>
    </ClerkProvider>
  );
}
