// src/app/page.tsx
import React, { Suspense } from "react";
import Layout from "@/components/Layout/Layout";
const Hero = React.lazy(() => import("@/components/HeroModule/Hero"));
const Section_1 = React.lazy(
  () => import("@/components/Sections/Section_1/Section_1")
);
const Section_2 = React.lazy(
  () => import("@/components/Sections/Section_2/Section_2")
);
const Section_3 = React.lazy(
  () => import("@/components/Sections/Section_3/Section_3")
);

export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Section_1 />
        <Section_2 />
        <Section_3 />
      </Suspense>
    </Layout>
  );
}
