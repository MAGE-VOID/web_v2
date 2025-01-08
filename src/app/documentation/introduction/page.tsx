"use client";

import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";
// Si quisieras componentes <List> y <ListItem>, los podrías crear también.

export default function IntroductionPage() {
  return (
    <ContentLayout>
      <PageBreadcrumb />

      {/* Bloque 1 */}
      <div>
        <Title>Introduction</Title>
        <Paragraph>
          Investors Logics is dedicated to empowering traders with advanced
          algorithmic trading strategies and cutting-edge technologies. We
          combine industry knowledge with innovative practices to deliver
          high-performance trading solutions to both retail and institutional
          clients.
        </Paragraph>
        <Paragraph>
          Led by a specialist in algorithmic trading, our team applies
          extensive programming and financial modeling skills to develop and
          implement effective trading systems that bridge the gap between
          theory and market reality.
        </Paragraph>
      </div>

      {/* Bloque 2 */}
      <div>
        <Subtitle>Our Commitment</Subtitle>
        <Paragraph>
          We are committed to continuous improvement and innovation. Our
          strategies are designed to adapt to evolving markets, ensuring
          sustainable and robust performance for our clients.
        </Paragraph>
      </div>

      {/* Bloque 3 */}
      <div>
        <Subtitle>Explore</Subtitle>
        <Paragraph>
          This documentation provides a comprehensive guide to our trading
          systems and their capabilities. Whether you are starting out or
          looking to enhance your trading strategies, you will find valuable
          information and insights here.
        </Paragraph>
      </div>

      {/* Bloque 4 */}
      <div>
        <Subtitle>General Questions</Subtitle>
        <Paragraph>
          If you have more questions, you can consult the FAQ.
        </Paragraph>
      </div>

      {/* Bloque 5 */}
      <div>
        <ul>
          <li>What platforms does Investors Logics use?</li>
          <li>How can I start trading with Investors Logics?</li>
          <li>Does Investors Logics offer customized trading solutions?</li>
        </ul>
      </div>
    </ContentLayout>
  );
}
