# Prerequisites

Before installing Proxmox on your OVH server, ensure you have all the necessary components and information ready. This guide will help you verify that you meet all requirements before proceeding with the installation.

## Overview

Before starting this guide, ensure you have the following:

::: tip Required Items
- An active OVH account with administrative access
- A dedicated server (see [Server Requirements](#server-requirements) below)
- At least one additional IP address for the firewall
- Basic Linux command-line knowledge
:::

## Server Requirements

::: info Compatible Server Types
The following OVH server ranges are compatible with this guide:
- Kimsufi series
- SYS (So You Start) series
- Rise series
- Higher-tier OVH bare metal dedicated servers
:::

### Minimum Hardware Specifications

Since this is intended to run virtual machines, containers, networking, etc. you should probably have a pretty decent spec:

| Component | Minimum Requirement |
|-----------|-------------------|
| CPU       | 6c/12t+ recommended  |
| RAM       | 32GB+ recommended |
| Storage   | 500GB+ usable disk space recommended |

## Network Requirements

### IP Addressing

::: warning Important
You must have at least one additional IP address beyond your server's primary IP. This will be used for:
- OPNsense firewall VM
- All VM inbound/outbound traffic
:::

### Required Network Information

Before starting the installation, gather the following information from your OVH control panel:

#### Server Management Network

| Information | Description | Where to Find |
|------------|-------------|---------------|
| Primary IP | Your server's main IP address | OVH Control Panel → Server Details |
| Active Interface | The network interface MAC Address | OVH Control Panel → Server Details → Network Configuration |
| Gateway | Your server's default gateway | OVH Control Panel → Server Details |
| Netmask | Network mask for your IP range | OVH Control Panel → Server Details |

#### Additional IP (for Firewall)
| Information | Description | Where to Find |
|------------|-------------|---------------|
| Additional IP | The IP address for your firewall | OVH Control Panel → IP section |
| Virtual MAC | MAC address for the additional IP | Must be generated (see below) |

::: info Additional IP Configuration
On OVH infrastructure:
- The gateway for the additional IP is the same as your server's primary gateway
- The subnet mask is `/32` for additional IPs
- The IP is assigned to VMs through the virtual MAC function
:::

::: tip Generating Virtual MAC
1. Go to OVH Control Panel → IP section
2. Find your additional IP
3. Click "..." → "Add virtual MAC"
4. Select type: `vmware`
5. Save this information for later use
:::

::: warning Note
Make sure to document all this information before starting. You'll need it during:
- Proxmox network configuration
- Virtual machine creation
- OPNsense firewall setup
:::

### IPMI Access

IPMI (Intelligent Platform Management Interface) access is crucial for:
- Remote server management
- Virtual media mounting
- Emergency access

::: tip Verification
1. Verify your IPMI access through the OVH control panel
2. Test IPMI connection before proceeding
3. Note down IPMI credentials and access URL
:::

## Skills Prerequisites

- Basic understanding of:
  - Linux command line operations
  - Network concepts (IP addressing, subnetting)
  - Virtualization principles

## Information Required

Use this to ensure you have gathered all required information:

```markdown
### Server Information
- [ ] Primary IP: _________________
- [ ] Active Network Interface: _________________
- [ ] Primary Gateway: _________________
- [ ] Primary Netmask: _________________

### Additional IP Information
- [ ] Additional IP Address: _________________
- [ ] Virtual MAC Address: _________________
Note: Additional IP will use same gateway as server and /32 netmask

```

## Next Steps

Once you have:
1. Verified all prerequisites
2. Gathered all required information
3. Completed the checklist above

You can proceed to the [installation guide](./installation).