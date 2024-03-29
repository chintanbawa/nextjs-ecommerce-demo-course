import { Inter } from "next/font/google";
import "./globals.css";

//components
import Header from "./components/Header";
//contexts
import ThemeProvider from "./contexts/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          enableSystem
          defaultTheme="system"
          attribute='class'
          themes={['system', 'light', 'dark', 'rose', 'purple']}
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
