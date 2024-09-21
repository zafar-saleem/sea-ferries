import type { Metadata } from "next";
import { GlobalStyles } from "@/theme/globals";
import Providers from "./styled-providers";

export const metadata: Metadata = {
  title: "Ferry Engine",
  description: "Ferry engine app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
      <body>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  )
}
