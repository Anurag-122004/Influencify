"use client";

import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapped from "./SchamaticWrapped";
import { ConvexClientProvider } from "./ConvexClientProvider";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schematicPubkey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;

  if (!schematicPubkey) {
    throw new Error("Missing Schematic Publishable Key");
  }

  return (
    <ConvexClientProvider>
      <SchematicProvider publishableKey={schematicPubkey}>
        <SchematicWrapped>
          {children}
        </SchematicWrapped>
      </SchematicProvider>
    </ConvexClientProvider>
  );
}
