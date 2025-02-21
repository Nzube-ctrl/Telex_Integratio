# Telex Integration

## Overview
This repository contains the JSON specification and implementation details for integrating with **Telex**. The integration enables periodic health checks, event monitoring, and automated message handling using Telex's webhook system.

## Features
- **Periodic Ticks**: Sends automated health checks at specified intervals.
- **Webhook Support**: Allows seamless communication between Telex and external services.
- **Customizable Settings**: Configure interval timing, messages, and webhook URLs.
- **Real-time Event Tracking**: Ensures up-to-date server monitoring and event reporting.

## Integration JSON Specification
The integration JSON file is structured as follows:

```json
{
  "data": {
    "date": {
      "created_at": "YYYY-MM-DD",
      "updated_at": "YYYY-MM-DD"
    },
    "descriptions": {
      "app_name": "Telex Server Tick",
      "app_description": "Monitors server uptime and sends periodic tick events to a Telex channel.",
      "app_logo": "https://raw.githubusercontent.com/Telex-Org/Telex_Integratio/main/assets/logo.png",
      "app_url": "https://telex.org/integration",
      "background_color": "#3498db"
    },
    "integration_category": "Monitoring & Logging",
    "integration_type": "interval",
    "is_active": true,
    "tick_url": "https://nzube-ctrl.github.io/Telex_Integratio/api/tick",
    "target_url": "https://nzube-ctrl.github.io/Telex_Integratio/api/receive",
    "settings": [
      {
        "label": "interval",
        "type": "text",
        "required": true,
        "default": "60000"
      },
      {
        "label": "Alert Admin",
        "type": "multi-checkbox",
        "required": true,
        "default": "Super-Admin",
        "options": ["Super-Admin", "Admin", "Manager", "Developer"]
      }
    ]
  }
}
```

## Setup
To integrate this with **Telex**, follow these steps:
1. **Fork this repository** (if necessary).
2. **Update the JSON file** with any custom settings required.
3. **Host the JSON file** on GitHub Pages or any public URL.
4. **Submit the JSON URL** to Telex's integration platform.

## Endpoints
- **Tick URL**: `https://nzube-ctrl.github.io/Telex_Integratio/api/tick` (Used for interval-based triggers)
- **Target URL**: `https://www.postb.in/1740125682852-0043008318170` (Receives webhook data from Telex)

## License
This project is licensed under the [MIT License](LICENSE).
