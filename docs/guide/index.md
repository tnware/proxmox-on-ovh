# Proxmox on OVH


Welcome to the comprehensive guide for deploying Proxmox environments on OVH infrastructure. This documentation will walk you through the process of setting up a standalone virtualization environment using Proxmox VE on OVH's dedicated server platform.


<div class="image-grid">
  <img src="/images/proxmox-logo.png" alt="Proxmox VE Logo" title="Proxmox Virtual Environment" />
  <img src="/images/ovh.png" alt="OVH Logo" title="OVH Infrastructure" />
</div>

## What You'll Learn

This guide covers everything you need to know about deploying a Proxmox environment on OVH infrastructure:

::: info Core Topics
- Complete Proxmox VE installation and initial setup
- Host networking configuration
- OPNsense firewall deployment and configuration
:::

## Guide Structure

1. [Prerequisites](./prerequisites) - Verify your setup requirements
2. [Installation](./installation) - Step-by-step Proxmox deployment
3. [Host Configuration](./host) - Setting up your virtual network
4. [Firewall Setup](./firewall) - Installing and configuring Virtualized Firewall

::: warning Before You Begin
Make sure to review the [prerequisites](./prerequisites) carefully before starting your deployment. This will ensure a smooth installation process.
:::


<style>
.image-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
}

.image-grid img {
  max-height: 100px;
  object-fit: contain;
}
</style>