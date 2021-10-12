---
layout: article-detail
title:  Migrate from Designer
category: "Get Started"
category-url: get-started
---

With the release of 2021.1.0, Insomnia Designer and Insomnia Core were merged into a single application, Insomnia. Insomnia Designer has been deprecated, and will no longer receive updates. To allow for a smooth transition for Designer users to Insomnia v2021.1, we've created an automated migration workflow. 

## Migrate

If you were a user of Insomnia Designer, you will be presented with a data migration flow asking you what data you would like to migrate. If the migration is successful, you will be notified and prompted to restart the application.

![The migration modal shows different migration options to copy workspaces, plugins, and designer application settings.](/assets/images/migration-modal.png)
_The migration modal shows different migration options to copy workspaces, plugins, and designer application settings._

{:.alert .alert-primary}
**Note**: If you decide to skip the migration, you can always re-open the data migration flow via Preferences > General >  Migrate from Designer.

## Backup

When migration begins, a backup of your data will be created at <app-data-dir>/insomnia/core-backup.

`app-data-dir` is stored in the following location:

* `%APPDATA%/Insomnia` on Windows
* `$XDG_CONFIG_HOME/Insomnia` or `~/.config/Insomnia` on Linux
* `~/Library/Application Support/Insomnia` on macOS

In the current state, each time you migrate, this backup is overwritten just prior to starting migration.

## Restore from backup

If there is an unexpected error during migration, you will be shown the error that occurred. The data directory will be restored from backup, and you will be prompted to restart the application.

## Manual restore

You may also choose to manually restore from the backup directory created at <app-data-dir>/insomnia/core-backup. In the current state, each time you migrate, this backup is overwritten just prior to starting migration. Where is app-data-dir?

The <app-data-dir>/insomnia/core-backup directory contains the following data:

* insomnia.{model}.db database files
* plugins folder
* responses folder
* version-control folder

Each of these items also exists in the parent folder, <app-data-dir>/insomnia, which contains the "current" data used by the application. 

In order to manually restore:

1. Close Insomnia
2. Delete the plugins, responses, and version-control folders in the <app-data-dir>/insomnia live data directory
3. Copy-paste everything from <app-data-dir>/insomnia/core-backup into <app-data-dir>/insomnia, overwriting everything that exists
4. Launch Insomnia

## Edge cases

There are potential edge cases where a user moved their workspace from Core to Designer several months ago, and is now merging the same workspace (with the same id) from Designer back into Core. This merge will not remove any children of the workspace (eg. requests, request groups, certificates, etc), but if a duplicate id is found it will favor the data coming from Designer.

In the unlikely scenario where you cannot see your requests or workspace in Insomnia after migration, you can try to restore from the backup as described above. Alternatively, because the migration is primarily additive and will not remove anything from the existing database (it will overwrite if the same id is found as per the previous paragraph), some entries may have become orphaned. It takes some digging, but you can find orphaned entries by opening the insomnia.{model}.db files.

If you experience orphaned entries, or are not seeing data you expect to see when you launch Insomnia, send an email to [Support](mailto:support@insomnia.rest) outlining your steps, including your application logs, and the team will assist where possible.