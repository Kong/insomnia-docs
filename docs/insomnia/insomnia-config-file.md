---
layout: article-detail
title:  Insomnia Configuration File
category: "Get Started"
category-url: get-started
---

In addition to the Insomnia Preferences available through the UI, computer admins can configure the Insomnia app for other users through an Insomnia Configuration File.

This configuration will enable computer admins to alter some settings and UI components when they set up regulated local environments. Admins may find this useful to overwrite configurations that users cannot change.

This feature is not related to [team functionality](/insomnia/team-collaboration), so team admins won't be able to control settings for the team's members (unless they also happen to be computer admins).

## Config File Location

The Insomnia application does not automatically come with an Insomnia configuration file. Users or admins will create a file specifically called `insomnia.config.json` in one of two locations:
- the [app data directory](/insomnia/application-data)
- the same directory as `insomnia.exe` when running the portable Windows version

## Config File Contents

The only required field is `insomniaConfig` with the value `1.0.0`. The `settings` object is not required and can be empty.

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

### Settings

The following are the settings that you are allowed to configure.

{:.alert .alert-primary}
**Note**: If you try to configure a setting that is not allowed to be configured, your application will not run, and you will be shown an alert. Verify that all the settings you add are allowed and are configured correctly.

{:.table .table-striped}
Parameter | Data Type | Description
--------- | --------- | -----------
`allowNotificationRequests` | Boolean | If `false`, Insomnia won’t send requests to the api.insomnia.rest/notifications endpoint. This can have effects like the users won’t be notified in-app about billing issues and they won’t receive tips about app usage.
`disableUpdateNotification` | Boolean | If `true`, Insomnia won’t show a notification when new updates are available. Users can still check for updates in Preferences.
`enableAnalytics` | Boolean | If `true`, Insomnia will send anonymous data about features and plugins used.
`disablePaidFeatureAds` | Boolean | If `true`, Insomnia won’t show any visual elements that recommend plan upgrades.
`incognitoMode` | Boolean | If `true`, Insomnia won’t make any network requests other than the requests you ask it to send. This configuration controls and overwrites any existing settings for **enableAnalytics** and **allowNotificationRequests** by disabling both.
