---
layout: article-detail
title:  Migrate from Designer
category: "Get Started"
category-url: get-started
---

{:.alert .alert-primary}
**Note**: The migrate instructions on this page only apply to Insomnia versions 2021.7.2
and older. If you're on a newer version than 2021.7.2, you won't have the migrate option within the app. However, you can still migrate your data. See [Migration Alternatives](#migration-alternatives).

With the release of 2021.1.0, Insomnia Designer and Insomnia Core were merged into a single application, Insomnia. Insomnia Designer has been deprecated, and will no longer receive updates. To allow for a smooth transition for Designer users to Insomnia v2021.1, we've created an automated migration workflow.

## Migrate

If you're an Insomnia Designer user, you'll be presented with a data migration flow asking you what data you would like to migrate. If the migration is successful, you'll be notified and prompted to restart the application.

![The migration modal shows different migration options to copy workspaces, plugins, and designer application settings.](/assets/images/migration-modal.png)
_The migration modal shows different migration options to copy workspaces, plugins, and designer application settings._

{:.alert .alert-primary}
**Note**: If you decide to skip the migration, you can always re-open the data migration flow via **Preferences** > **General** >  **Migrate from Designer**.

## Backup

When migration begins, a backup of your data will be created at <app-data-dir>/insomnia/core-backup.

`app-data-dir` is stored in the following location:

* `%APPDATA%\Insomnia` on Windows
* `$XDG_CONFIG_HOME/Insomnia` or `~/.config/Insomnia` on Linux
* `~/Library/Application\ Support/Insomnia` on macOS

In the current state, each time you migrate, this backup is overwritten just prior to starting migration.

## Restore from backup

If there is an unexpected error during migration, you will be shown the error that occurred. The data directory will be restored from backup, and you will be prompted to restart the application.

## Manual restore

You may also choose to manually restore from the backup directory created at `<app-data-dir>/insomnia/core-backup`. In the current state, each time you migrate, this backup is overwritten just prior to starting migration.

See [Backup](#backup) for a list of `app-data-dir` locations based on your OS.

The `<app-data-dir>/insomnia/core-backup` directory contains the following data:

* `insomnia.{model}.db` database files
* plugins folder
* responses folder
* version-control folder

Each of these items also exists in the parent folder, `<app-data-dir>/insomnia`, which contains the current data used by the application.

In order to manually restore, do the following:

1. Close Insomnia
2. Delete the plugins, responses, and version-control folders in the `<app-data-dir>/insomnia` live data directory
3. Copy-paste everything from `<app-data-dir>/insomnia/core-backup` into `<app-data-dir>/insomnia`, overwriting everything that exists
4. Launch Insomnia

## Edge case

If you moved your workspace from Core to Designer several months ago, and are now merging the same workspace (with the same id) from Designer back into Core, this edge case applies. The merge won't remove any children of the workspace (such as requests, request groups, certificates), but if a duplicate id is found, it will favor the data coming from Designer.

In the unlikely scenario that you can't see your requests or workspace in Insomnia after migration, [restore your data from your backup](#restore-from-backup). Alternatively, because the migration is primarily additive and will not remove anything from the existing database (it will overwrite if the same id is found), some entries may become orphaned. Find orphaned entries by opening the `insomnia.{model}.db` files.

## Migration Alternatives

You can still migrate your data in the following situations:

* You've never installed Insomnia but have Insomnia Designer
* You have Insomnia 2021.7.3 or newer installed already

{:.alert .alert-warning}
**Warning**: Insomnia Designer and Insomnia use different data directories. When attempting to migrate from Insomnia Designer, backup both the Insomnia and Insomnia Designer data directories. Backups are especially important when you have to (temporarily) downgrade Insomnia from a previously installed newer version.

1. Install Insomnia 2021.7.2 via [GitHub releases](https://github.com/Kong/insomnia/releases/tag/core%402021.7.2).
2. You'll be prompted to migrate from Designer in a pop-up modal. Follow the instructions. Alternatively, if you missed the modal or delayed the migration, access the migration option through **Preferences** > **General**. Find the **Migrate from Designer** section and click the **Show migration flow** button.
3. After you've completed the migration, upgrade Insomnia through **Preferences** in the section **Software Updates**.
