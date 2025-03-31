# Initial Configuration

::: tip Overview
After installing Proxmox VE, several important configuration steps are needed to ensure your environment is properly set up. This guide will cover some essential post-installation tasks.
:::

## Repository Configuration

One of the most important initial tasks is configuring your Proxmox VE repositories correctly. This ensures:
- Proper package management
- Access to security updates
- Removal of subscription warnings
- System stability

### Post-Installation Script

We'll use the ProxmoxVE post-installation script to handle repository configuration automatically:

```bash
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/misc/post-pve-install.sh)"
```

::: info What This Script Does
The script will help you:
- Configure appropriate package repositories
- Disable the Enterprise repository if not needed
- Enable the No-Subscription repository
- Remove subscription notifications
- Update the system packages
:::

::: warning Important
After running the script:
1. Review the changes it suggests carefully
2. Only apply the changes that make sense for your environment
3. When prompted about updates, it's recommended to apply them
:::

## System Updates

After configuring repositories:
1. Ensure all system packages are up to date
2. Apply any pending security updates
3. Reboot if required by kernel updates

```bash
apt update && apt upgrade -y
```

## Next Steps

With the basic system configuration complete, proceed to:

1. [Network Configuration](./network-setup) - Set up network bridges for VM connectivity
2. Firewall VM Setup - Create and configure your OPNsense firewall

::: tip Additional Resources
The [ProxmoxVE Community Scripts](https://community-scripts.github.io/ProxmoxVE/) project offers many other useful tools that you might want to explore after completing this guide.
:::
