---
outline: [2, 4]
---

# Firewall VM Setup

## Overview

This guide walks you through setting up a virtual firewall in Proxmox VE. While we'll use OPNSense in this tutorial, you can adapt these instructions for other firewall solutions such as:
- pfSense
- Sophos
- Fortinet
- Other software firewall distributions

::: tip Compatibility
This guide is tested with OPNSense, but the VM configuration steps are generally applicable to other firewall solutions with minimal adjustments.
:::

## Prerequisites
- Proxmox VE installed and accessible
- OVH dedicated server with additional IP address
- Basic understanding of networking concepts

## Step 1: Download OPNSense ISO

### Option A: Direct Download to Proxmox

1. Navigate to your node's ISO Images section in Proxmox VE:

![PVE: ISO Images](images/firewall-setup/image-4.png)

2. Visit the [OPNSense download page](https://opnsense.org/download/):

![OPNSense Website: Download Page](images/firewall-setup/image-5.png)

3. Copy the URL for the AMD64 DVD image and use "Download from URL" in Proxmox:

![PVE ISO "Download from URL" Wizard](images/firewall-setup/image-6.png)

::: info Compression
Proxmox automatically handles the bzip compression of the ISO image - no additional steps required.
:::

4. Wait for the download to complete:

![PVE ISO "Download from URL" Console Output](images/firewall-setup/image-8.png)

5. Verify the download was successful:

![PVE ISO "Download from URL" Task OK](images/firewall-setup/image-9.png)

6. The ISO will now appear in your ISO Images list:

![PVE ISO Images List Populated](images/firewall-setup/image-10.png)

### Option B: Manual Upload
Alternatively, you can download the ISO to your local machine and upload it through the Proxmox web interface.

## Step 2: Create Virtual Machine

Click "Create VM" in the Proxmox web interface to begin the configuration wizard:

![PVE Button Group](images/firewall-setup/image-11.png)

### Configuration Steps

#### 1. General Settings
- Name: Choose a descriptive name for your firewall VM
- ✓ Start at boot: Enable for automatic startup

![Create Virtual Machine: General](images/firewall-setup/image.png)

#### 2. OS Configuration

- Attach ISO image
- OS Type: Linux
- Version: Linux kernel 6.x

![Create Virtual Machine: OS](images/firewall-setup/image-1.png)

#### 3. System Configuration
::: warning Important
These settings are crucial for proper UEFI boot functionality.
:::

Required settings:
- Machine: `q35`
- BIOS: `OMVF (UEFI)`
- ✓ Add EFI Disk
- EFI Storage: Select your primary storage volume

![Create Virtual Machine: System](images/firewall-setup/image-2.png)

#### 4. Storage Configuration
::: tip Disk Size
Choose between 8GB-32GB depending on your needs. Most simple deployments work fine with 8GB.
:::

![Create Virtual Machine: Disks](images/firewall-setup/image-3.png)

#### 5. CPU Settings
::: tip important
Always select `host` as CPU type to ensure optimal performance and feature availability.
:::

![Create Virtual Machine: CPU](images/firewall-setup/image-7.png)

#### 6. Memory Configuration
- Default: 4GB RAM
- Adjust based on your specific requirements and workload

![Create Virtual Machine: Memory](images/firewall-setup/image-12.png)

#### 7. Network Configuration

###### Obtaining Virtual MAC from OVH

1. Access OVH Manager and select your additional IP:

![OVH Manager: Manage IPs Screen](images/firewall-setup/image-13.png)

2. Add a virtual MAC:
   - Type: vmware
   - Name: Choose descriptive identifier

![OVH Manager: Add a virtual MAC](images/firewall-setup/image-14.png)

3. Wait for confirmation:

![OVH Manager: New Virtual MAC Success Message](images/firewall-setup/image-15.png)

4. View the virtual MAC details:

![OVH Manager: Click to view Virtual MAC Details](images/firewall-setup/image-16.png)

5. Copy the MAC address for use in Proxmox:

![OVH Manager: Details of the virtual MAC](images/firewall-setup/image-17.png)

##### WAN Interface Setup

Apply the Virtual MAC to WAN interface in Proxmox:

![PVE Manager: Create VM - Network Config](images/firewall-setup/image-18.png)
> Set multiqueue to 4 or 8 for better performance (depends on your core count)

::: warning
Disable "Start after creation" and add LAN interface first
:::

![alt text](images/firewall-setup/image-19.png)

##### LAN Interface Setup
1. Select VM in Proxmox
2. Navigate to Hardware
3. Click "Add" → "Network Device":

![PVE Add Hardware - Network Device Highlighted](images/firewall-setup/image-20.png)

4. Configure as LAN bridge and set appropriate multiqueue value:

![PVE Add Hardware - Network Device - Wizard](images/firewall-setup/image-21.png)

## Step 3: Initial Boot Configuration

### UEFI Configuration
::: warning Required Step
Secure Boot must be disabled for the OPNSense ISO to boot properly.
:::

1. Start VM and press F2 repeatedly to enter BIOS:

![Proxmox UEFI Boot](images/firewall-setup/image-23.png)

2. Navigate through BIOS:
   - Select "Device Manager":

   ![PVE UEFI BIOS Screen](images/firewall-setup/image-26.png)

   - Choose "Secure Boot Configuration":

   ![PVE UEFI Device Manager](images/firewall-setup/image-25.png)

   - Disable "Attempt Secure Boot":

   ![PVE UEFI Secure Boot Configuration](images/firewall-setup/image-24.png)

3. Save and Exit (F10)

### Boot Process
After configuring UEFI, the system will boot to the OPNSense installer:

![OPNsense ISO boot menu](images/firewall-setup/image-27.png)

Wait for the boot process to complete:

![OPNsense ISO boot progress](images/firewall-setup/image-28.png)

::: tip Next Steps
Continue to the next section for OPNSense installation and initial configuration.
:::