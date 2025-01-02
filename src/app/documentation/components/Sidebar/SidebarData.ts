// src/app/documentation/components/Sidebar/SidebarData.ts

export const menuData = [
  // PÁGINA individual => /documentation/introduction
  {
    label: "Introduction",
    href: "/documentation/introduction",
  },

  // TÍTULO => no clickeable, negrita/blanco
  {
    label: "How To Start",
    isTitle: true,
  },

  // SUBMENÚ => /documentation/table-of-contents
  {
    label: "Table of Contents",
    subItems: [
      { label: "What is Forex", href: "/documentation/table-of-contents/what-is-forex" },
      { label: "Algorithmic Trading", href: "/documentation/table-of-contents/algorithmic-trading" },
      { label: "Getting Started", href: "/documentation/table-of-contents/getting-started" },
      { label: "Platforms", href: "/documentation/table-of-contents/platforms" },
      { label: "Resources", href: "/documentation/table-of-contents/resources" },
    ],
  },

  // SUBMENÚ => /documentation/infrastructure
  {
    label: "Infrastructure",
    subItems: [
      { label: "Virtual Private Server", href: "/documentation/infrastructure/virtual-private-server" },
      { label: "Cybersecurity and Scams", href: "/documentation/infrastructure/cybersecurity-and-scams" },
    ],
  },

  // PÁGINA individual => /documentation/best-brokers
  {
    label: "Best Brokers",
    href: "/documentation/best-brokers",
  },

  // TÍTULO => no clickeable
  {
    label: "More",
    isTitle: true,
  },

  // PÁGINA individual => /documentation/about-us
  {
    label: "About Us",
    href: "/documentation/about-us",
  },

  // SUBMENÚ => /documentation/assistance-and-policies
  {
    label: "Assistance and Policies",
    subItems: [
      { label: "Help Center", href: "/documentation/assistance-and-policies/help-center" },
      { label: "Terms and Conditions", href: "/documentation/assistance-and-policies/terms-and-conditions" },
    ],
  },

  // PÁGINA individual => /documentation/contact
  {
    label: "Contact ↗",
    href: "/documentation/contact",
  },
];
