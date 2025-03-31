# Virtualized Firewall

::: tip Overview
This guide will walk you through setting up a virtualized OPNsense firewall in your Proxmox environment. The firewall VM will serve as a secure gateway between your internet connection and internal virtual machines.
:::

## Network Architecture

The firewall VM creates a secure boundary between:
- WAN interface (`vmbr0`) - Connected to the internet
- LAN interface (`vmbr2`) - Your internal network

```
                Internet
                   ↓
            [ OVH Network ]
                   ↓
   ┌─────────────────────────────────┐
   │ vmbr0 (WAN Bridge)              │
   │   ├── Proxmox Management IP     │
   │   └── Firewall WAN IP           │
   │           ↓                     │
   │    [ OPNsense Firewall ]        │
   │           ↓                     │
   │ vmbr2 (LAN Bridge)              │
   │   ├── VM 1                      │
   │   ├── VM 2                      │
   │   └── VM 3                      │
   └─────────────────────────────────┘
```

::: info Network Flow
All virtual machine traffic passes through the firewall VM, while the Proxmox host maintains direct access via its management IP on `vmbr0`.
:::

## Implementation Steps

The setup process is divided into three main phases:

1. **VM Setup**
   - Creating the virtual machine
   - Configuring virtual machine hardware
   - Setting up network interfaces

2. **OS Installation**
   - Installing OPNsense
   - Basic system configuration

3. **OS Configuration**
   - Network interface assignment
   - Interface IP Configuration

## Security Benefits

Many possible avenues for enhanced security, configuration and management capability come with this design.

::: details Network Security
- Complete control over inbound/outbound traffic
- Granular firewall rules and access policies
- Network-wide intrusion detection (IDS/IPS)
- Ad blocking and content filtering
- Deep packet inspection
- Traffic monitoring and analysis
- Secure network segmentation
:::

::: details Network Management
- Host management interface protection
- Centralized traffic monitoring
- Custom routing configurations
- Network Address Translation (NAT)
:::

::: details VPN Capabilities
- Site-to-site VPN support
- Remote access VPN
- Secure remote management
- Multiple VPN protocol options
:::
