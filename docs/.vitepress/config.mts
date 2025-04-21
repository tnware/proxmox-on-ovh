import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Proxmox on OVH",
  description: "Complete Deployment Guide",
  ignoreDeadLinks: true,
  lastUpdated: true,
  // Base URL for GitHub Pages
  base: process.env.NODE_ENV === "production" ? "/proxmox-on-ovh/" : "/",
  head: [
    [
      "meta",
      {
        name: "google-site-verification",
        content: "_UCf77FNCDKJ4Ky3yKlyuKnXf_N4tjEUXmV5aok-tck",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/proxmox.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/guide/" },
      { text: "Installation", link: "/guide/installation/" },
    ],
    outline: {
      level: [2, 3],
    },
    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          items: [
            { text: "Introduction", link: "/guide/" },
            { text: "Prerequisites", link: "/guide/prerequisites" },
            { text: "Installation", link: "/guide/installation/" },
          ],
        },
        {
          text: "Host Configuration",
          items: [
            {
              text: "Initial Configuration",
              link: "/guide/host/initial-configuration",
            },
            { text: "Network Setup", link: "/guide/host/network-setup" },
          ],
        },
        {
          text: "Virtual Firewall",
          items: [
            { text: "Overview", link: "/guide/firewall/" },
            { text: "VM Setup", link: "/guide/firewall/setup" },
            { text: "Installation", link: "/guide/firewall/install" },
            { text: "Configuration", link: "/guide/firewall/config" },
          ],
        },
      ],
    },
    footer: {
      message:
        'Released under the <a href="https://github.com/tnware/proxmox-on-ovh/blob/main/LICENSE">Creative Commons Attribution 4.0 International License</a>.',
      copyright:
        'Copyright © 2025-present <a href="https://tylermade.net">Tyler Woods</a>',
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/tnware/proxmox-on-ovh/" },
    ],
  },
});
