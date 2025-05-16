export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
  items?: NavItem[];
};

export const siteConfig = {
  name: "GreenTrace",
  description: "Newtrace is on a mission to enable cost effective and reliable access to green hydrogen.",
  mainNav: [
    {
      title: "Product",
      href: "/product",
    },
    {
      title: "Why Green Hydrogen?",
      href: "/why-green-hydrogen",
    },
    {
      title: "Resources",
      href: "#", // This will be a dropdown trigger
      items: [
        {
          title: "Blog",
          href: "/blog",
          description: "Read our latest articles and insights.",
        },
        {
          title: "Newsroom",
          href: "/newsroom",
          description: "Latest news and press releases.",
        },
        {
          title: "Newsletter",
          href: "/newsletter",
          description: "Subscribe to our newsletter.",
        },
      ],
    },
    {
      title: "Careers",
      href: "/careers",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ] satisfies NavItem[],
  footerNav: {
    electrolyzer: [
      { title: "Product", href: "/product" },
      { title: "Why Green Hydrogen?", href: "/why-green-hydrogen" },
    ],
    resources: [
      { title: "Blog", href: "/blog" },
      { title: "Newsroom", href: "/newsroom" },
      { title: "Newsletter", href: "/newsletter" },
    ],
    company: [
      { title: "About", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" },
    ],
    legal: [
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms of Use", href: "/terms-of-use" },
        { title: "Disclosure", href: "/disclosure" },
    ]
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/newtrace-tech/",
    twitter: "https://twitter.com/newtracetech",
  }
};
