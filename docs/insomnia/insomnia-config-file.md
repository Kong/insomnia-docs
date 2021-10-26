---
layout: article-detail
title:  Insomnia Configuration File
category: "Get Started"
category-url: get-started
---

In addition to the Insomnia Preferences available through the UI, computer admins can configure the Insomnia application for other users through an Insomnia Configuration File.

The Insomnia Configuration File enables computer admins to alter some settings and UI components when they set up regulated local environments. Admins may find this useful to overwrite configurations that users cannot change.

{:.alert .alert-primary}
**Note**: This feature is not related to [team functionality](/insomnia/team-collaboration), so team admins won't be able to control settings for the team's members (unless they also happen to be computer admins).

## Configuration File Location

The Insomnia application does not automatically come with an Insomnia Configuration File. Users or admins will create a file specifically called `insomnia.config.json` in one of two locations:
- The [app data directory](/insomnia/application-data)
- The same directory as `insomnia.exe` when running the portable Windows version. This location takes precedence if there is also an Insomnia Configuration File in the app data directory.

{:.alert .alert-primary}
**Note**: In order for the Insomnia Configuration File to apply as expected, ensure that users are unable to modify the file or run the portable `insomnia.exe` file from another location on their computer.

## Configuration File Contents

The Insomnia Configuration File must include the property `insomniaConfig` with the value `1.0.0`. The `settings` object can be empty.

The following example shows all of the [`settings`](/insomnia/insomnia-config-file/#settings) options available.

```json
{
  "insomniaConfig": "1.0.0",
  "settings": {
    "allowNotificationRequests": false,
    "disableUpdateNotification": true,
    "enableAnalytics": false,
    "disablePaidFeatureAds": true,
    "incognitoMode": true
  }
}
```

## Settings

The following are the settings you're allowed to configure.

{:.alert .alert-primary}
**Note**: If you try to configure a setting that's not allowed to be configured, your application will not run and you will be shown an alert. Verify that all the settings you add are allowed and are configured correctly.

{:.table .table-striped}
Parameter | Data Type | Default | Description
--------- | --------- | -------| -----------
`allowNotificationRequests` | Boolean | `true` | If `false`, Insomnia won’t send requests to the api.insomnia.rest/notifications endpoint. This can have effects like the users won’t be notified in-app about billing issues and they won’t receive tips about app usage.
`disableUpdateNotification` | Boolean | `false` | If `true`, Insomnia won’t show a notification when new updates are available. Users can still check for updates in Preferences.
`enableAnalytics` | Boolean | `false` | If `true`, Insomnia will send anonymous data about features and plugins used.
`disablePaidFeatureAds` | Boolean | `false` | If `true`, Insomnia won’t show any visual elements that recommend plan upgrades.
`incognitoMode` | Boolean | `false` | If `true`, Insomnia won’t make any network requests other than the requests you ask it to send. This configuration controls and overwrites any existing settings for  **Send Usage Stats** and **Allow Notification Requests** by disabling both.
