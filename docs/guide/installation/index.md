# Installing Proxmox on OVH

::: tip Overview
This guide covers the installation of Proxmox VE 8.3 on OVH dedicated servers. Since OVH's standard OS templates don't include above Proxmox 7, we'll use IPMI/KVM to perform a custom installation.
:::

::: warning Server Requirements
- A dedicated server from OVH's eco or regular ranges
- IPMI access (available on most OVH servers)
- Kimsufi servers: IPMI support varies by model, verify before proceeding
:::

[[toc]]

## Preparation Steps

### 1. Download Required Files
- [Proxmox VE 8.3 ISO](https://www.proxmox.com/en/downloads)
- Java Runtime Environment (if using Java KVM)

### 2. Access IPMI Console

1. Log into your OVH manager
2. Navigate to your server's management page
3. Locate and click the IPMI/KVM option:

![OVH Manager IPMI/KVM](<images/installation/Screenshot 2025-02-09 130411.png>)

::: tip KVM Access Options
- **Web KVM**: Try this first - easier to use and may support virtual media
- **Java KVM**: More reliable but requires Java installation
:::

### 3. Mount Installation Media

1. Open the Virtual Media tool in your KVM session:
   ![IPMI Virtual Media tool](<images/installation/Screenshot 2025-02-09 135509.png>)

2. Browse and select your Proxmox ISO:
   ![Virtual Media Wizard](<images/installation/Screenshot 2025-02-09 130515.png>)

3. Ensure the media is connected:
   ![Virtual Media Wizard: Drive Redirected](<images/installation/Screenshot 2025-02-09 130525.png>)

### 4. Boot Configuration

1. Reboot the server through IPMI:
   ![IPMI Server Power Control Action Confirmation](<images/installation/Screenshot 2025-02-09 130700.png>)

2. Enter BIOS and select the virtual CD/DVD as boot device:
   ![BIOS Boot Device selection](<images/installation/Screenshot 2025-02-09 130918.png>)

::: tip Boot Device Selection
Some KVM implementations will have an option to select the next boot device ahead of time, but this isn't always available. You may need to enter BIOS manually.
:::

## Installation Process

### 1. Initial Setup

Boot from the Proxmox VE ISO and select "Install Proxmox VE":
![Proxmox VE 8.3 ISO initial boot screen](<images/installation/Screenshot 2025-02-09 130954.png>)

Follow the initial prompts:
- Accept the EULA
- Select target disk
- Set location and timezone
- Create root password

### 2. Network Configuration (OVH-Specific)

::: warning Critical Step
This step requires specific OVH network information. Incorrect configuration can result in loss of access to your server.
:::

#### Identify the Correct Network Interface

You'll see this network configuration screen:
![PVE Installation: Management Network Configuration](<images/installation/Screenshot 2025-02-09 132223.png>)

To configure it correctly:

1. In OVH Manager, locate your server's network information:
   ![OVH Manager: Network Interfaces](<images/installation/Screenshot 2025-02-09 132150.png>)

2. Note the active interface and its configuration:
   ![OVH Manager: Server Network Info](<images/installation/Screenshot 2025-02-09 132340.png>)

#### Configure Management Network

Use the information from OVH Manager to configure your management interface:

```yaml
Required Information:
- Hostname: proxmox.yourdomain.com
- IP Address: Your main IP
- Netmask: 255.255.255.255 (OVH typically uses /32)
- Gateway: Your gateway IP
- DNS Server: 213.186.33.99 (OVH DNS)
```

Enter these details in the network configuration screen:
![PVE Management Network Configuration populated](<images/installation/Screenshot 2025-02-09 132704.png>)

### 3. Complete Installation

Monitor the installation progress:
![PVE Installation in progress](<images/installation/Screenshot 2025-02-09 132742.png>)

Wait for completion:
![PVE Installation Successful](<images/installation/Screenshot 2025-02-09 134008.png>)

## Post-Installation Steps

### 1. Disable Rescue Mode

::: danger Important
Your server will boot to rescue mode unless disabled in OVH Manager!
:::

1. Access OVH Manager:
   ![OVH Manager disable rescue mode](<images/installation/Screenshot 2025-02-09 134356.png>)

2. Enable "Boot from hard disk":
   ![OVH Manager boot from the hard disk](<images/installation/Screenshot 2025-02-09 134407.png>)

### 2. Access Proxmox Web Interface

1. Open your browser and navigate to:
   ```
   https://your-server-ip:8006
   ```

2. Log in with root credentials:
   ![PVE Manager Login Screen](<images/installation/Screenshot 2025-02-09 134912.png>)

## Next Steps

Proceed to [Initial Configuration](../host/initial-configuration)