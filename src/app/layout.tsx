import "./globals.css";

import type { Viewport } from "next";
import type { ReactNode } from "react";

import { JsonLd } from "@/components/JsonLd";
import { ROOT_METADATA } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";

export const metadata = ROOT_METADATA;

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
