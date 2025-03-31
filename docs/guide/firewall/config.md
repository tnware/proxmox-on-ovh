# Initial Configuration

After successfully installing OPNSense, you'll need to perform some initial configuration to get your firewall operational. This guide walks you through:
1. Configuring network interfaces
2. Setting up IP addresses
3. Accessing the Web UI
4. Completing initial setup

## Network Interface Configuration

### Step 1: Assign Interfaces

1. Log in to the console with your credentials:

![OPNsense Console: At login screen](images/firewall-setup/image-41.png)

2. You'll see the main configuration menu:

![OPNsense Console: List of options](images/firewall-setup/image-42.png)

3. Select option `1` to assign interfaces

4. When prompted about LAGGs or VLANs, choose `no`:

![OPNsense LAGG/VLANs prompt](images/firewall-setup/image-44.png)

5. You'll see a list of available interfaces. Note that `vtnet0` will be your WAN interface - you can verify this by matching the MAC address with your OVH IP Virtual MAC:

![OPNsense Console: Valid Interfaces List](images/firewall-setup/image-45.png)

6. Assign the WAN interface by entering `vtnet0`:

![OPNsense Console: WAN interface name entry](images/firewall-setup/image-46.png)

7. Assign the LAN interface by entering `vtnet1`:

![OPNsense Console: LAN interface name entry](images/firewall-setup/image-47.png)

8. Press Enter without typing anything to skip the optional interface:

![OPNsense Console: Interface assignment confirmation](images/firewall-setup/image-48.png)

9. Confirm the configuration by entering `y`:

![OPNsense Console: configuration in process...](images/firewall-setup/image-49.png)

### Step 2: Configure IP Addresses

From the main menu, select option `2` to set interface IP addresses:

![OPNsense Console: Main Screen](images/firewall-setup/image-50.png)

#### Configure LAN Interface

1. You'll see a list of available interfaces:

![OPNsense Console: Available Interfaces](images/firewall-setup/image-51.png)

2. Select the LAN interface and configure its IP address:

![OPNsense Console: LAN interface Selection](images/firewall-setup/image-52.png)

3. Enter your desired LAN IP configuration:

![OPNsense Console: Choose LAN IP address](images/firewall-setup/image-53.png)

4. Complete the LAN configuration:

![OPNsense Console: Finishing LAN config](images/firewall-setup/image-54.png)

5. Verify the LAN configuration is complete:

![OPNsense Console: LAN config complete](images/firewall-setup/image-55.png)

#### Configure WAN Interface

1. Select the WAN interface:

![OPNsense Console: WAN Interface Selection](images/firewall-setup/image-56.png)

2. For the WAN gateway, use your OVH server's gateway address:

![OPNsense Console: WAN GW Config](images/firewall-setup/image-57.png)

3. Test your network connection to verify everything is working:

![OPNsense Console: Ping successful](images/firewall-setup/image-58.png)

## Web UI Access

::: warning
Initial Web UI access isn't possible directly from WAN as there are no firewall rules configured yet, and nothing exists on the LAN segment.
:::

### Option 1: SSH Port Forwarding (Recommended)

Use SSH port forwarding to access the Web UI:

```shell
ssh -L 8080:10.69.42.1:80 -L 8443:10.69.42.1:443 -N -f user@remote-server
```

::: tip Configuration
Replace:
- `10.69.42.1` with your firewall's IP address
- `user@remote-server` with your Proxmox host credentials (typically `root@your-proxmox-host-ip`)
:::

This creates local port forwards:
- Port 8080 → Firewall HTTP (80)
- Port 8443 → Firewall HTTPS (443)

![SSH Port Forwarding](images/firewall-setup/image-60.png)

### Option 2: LAN VM Access
Alternatively, you can:
1. Create a new VM with GUI
2. Attach it to your LAN interface
3. Access the WebUI through this VM

### Initial Web UI Setup

1. Access the Web UI at https://localhost:8443:

![Login Screen via Localhost](images/firewall-setup/image-59.png)

2. Log in with:
   - Username: `root`
   - Password: The one you set during installation

3. Complete the Getting Started wizard:

![System Wizard: General Setup](images/firewall-setup/image-61.png)

4. Configure basic system settings:
   - Hostname
   - Domain
   - DNS servers
   - Other general preferences

![System Wizard: General Information](images/firewall-setup/image-62.png)

5. Review the configuration summary:

![Initial Config Complete](images/firewall-setup/image-63.png)

### Final Configuration Check

#### Hardware Offloading

::: tip
These settings should be disabled by default when using virtio. If not, disable them manually:
:::

![Interfaces settings](images/firewall-setup/image-64.png)

## Completion

Your firewall should now have a working baseline configuration. You can access the dashboard to monitor your system:

![OPNsense Dashboard](images/firewall-setup/image-65.png)

::: tip Next Steps
From here, you can:
- Configure firewall rules
- Set up VLANs
- Add additional security features
- Configure VPN access
- And more...
:::
