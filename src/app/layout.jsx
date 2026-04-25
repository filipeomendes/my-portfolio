
import Header from "@/components/Header";
import "../styles/globals.scss";

import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Filipe Mendes | Automations Portfolio",
  description: "Personal portfolio for full-stack development and automation projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header/>
            {children}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}
