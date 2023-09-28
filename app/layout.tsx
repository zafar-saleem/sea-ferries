import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body>
          <Header>
            <Navigation />
          </Header>
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
