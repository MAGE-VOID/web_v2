// src/app/documentation/layout.tsx
import React from "react";
import DocumentationLayout from "./components/DocumentationLayout";

export default function DocumentationSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocumentationLayout>
      {children}
    </DocumentationLayout>
  );
}
