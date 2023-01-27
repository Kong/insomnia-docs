---
layout: article-detail
title:  Sync Collections with Insomnia Cloud
category: "Get Started"
category-url: get-started
---

{:.alert .alert-primary}
**Note**: Version Control Sync applies only to remote **Collections** at this time. Collections use our own Insomnia Cloud for versioning. This feature comes with paid subscriptions. See [Pricing](https://insomnia.rest/pricing) for more information. To learn about Git sync for Documents, refer to [Git Sync](/insomnia/git-sync).

In this section, you will find documentation on Collections [Sync](#sync) and [Snapshots](#snapshots).

## Sync

Sync for remote Collections provides the following abilities on top of the base Insomnia functionality:

* Snapshot the contents of a request collection
* Revert a request collection to a previous Snapshot
* Share Snapshots across devices or with members of your team
* Create and work on separate branches

The main features of sync (once enabled automatically or manually) can be accessed from the dropdown at the top right of the application when you are in a remote Collection.

![With a paid subscription, click on the large branch name button within a Collection.](/assets/images/version-control.png)
_For versioning options on a Collection, click on the large branch name button._

## Enable Sync

On creating a request Collection within a Remote Project, Insomnia will attempt to automatically enable sync and push an initial snapshot.

![Switch to a remote project](/assets/images/switch-remote-project.png)
_Log into your account and switch to the Remote Project where you wish to sync a Collection._

### Manually Enable Sync

If Insomnia is unable to or has not automatically enabled sync, then you can manually set this up. First click **Setup Sync** then **Create Local Project**. Then you can create and push your first Snapshot.

{:.alert .alert-primary}
**Note**: Can't see the Sync menu? Make sure you're logged in by clicking on the person icon in the top right corner of your application. If you see a logout option, you're logged in. If you still can't see the Sync menu, make sure you're inside a remote Project from the Dashboard.

![Enable Insomnia Cloud within a Collection by clicking the Setup Sync button.](/assets/images/setup-sync.png)
_Enable Insomnia Cloud within a Collection by clicking the Setup Sync button._

When sync is enabled on a Collection inside a Project, all users that have access to the Project also gain access to that Collection. You can manage the members in your Project from the [web dashboard](https://app.insomnia.rest/app/signup/).

## Snapshots

This section provides information on using the paid Snapshot feature for remote Collections. For pricing information, see our [Pricing](https://insomnia.rest/pricing) page.

### Create Snapshot

To create a Snapshot, open a **remote Collection** and click on the branch dropdown menu next to Preferences, and then click **Create Snapshot**. A **Create Snapshot** modal will open.

![To create a new Snapshot, click on the branch dropdown next to Preferences and select Create Snapshot.](/assets/images/create-snapshot.png)
_Within a remote Collection, click on the branch dropdown and click on Create Snapshot._

Snapshots represent all data in a Collection (requests, folders, environments) at a specific point in time. Besides the data within the Collection, a Snapshot also details:

* The Snapshot author
* The time that the Snapshot was created
* A message describing any changes in the Snapshot

Creating a Snapshot requires two actions:

1. Describe the changes contained within the Snapshot
2. Select which changes to include

### Write a Snapshot Message

Snapshot messages should describe the included changes in as much detail as possible, as this description will help identify the snapshot if you ever need to revert back to it.

### Add Changes to a Snapshot

Changes made to a request collection can be added on a granular level. Modifications and deletions to existing requests, folders, etc (AKA objects) will appear under  Modified Objects, while new additions will appear under Unversioned Objects and are unselected by default.

### Share Snapshots

Once a Snapshot is created, it can be shared to your Insomnia account or team. There are two ways to push Snapshots:

* Use the Create and Push option when creating the Snapshot
* Push un-synced Snapshots from within the main sync menu

If there are new Snapshots available that do not yet exist on your device (eg. from a team) these will be available to pull down from within the sync menu.

### Work with Branches

All Snapshots created for Sync are stored in a branch. Branches are identified by name and each one maintains a list of Snapshots that have been created for it (ie. its history). Branches can be created or deleted at any time, shared with team members, and even merged together.

Branches can be useful for many reasons, but the two main use cases are the following:

* Separate personal work from other team members
* Work on experimental changes that may or may not exist long-term

Branches are managed within the branches dialog. Here, you can create local branches, merge branches, and fetch remote branches.

### Share a Request Collection

To get started sharing workspaces with your team, see [Team Collaboration](/insomnia/team-collaboration).

### Revert to a Previous Snapshot

You can revert a Collection to a previous Snapshot. Find the Snapshot you want to revert to by going to the branch dropdown and clicking on **History**. Then click **Restore** on the Snapshot you want to revert to.

When you restore a Snapshot, it will show the changes locally and you'll need to manually Snapshot the changes.

## Things to Know

If a team is using mixed versions of Insomnia, and one version supports a type of request (such as gRPC or Websockets) that another version doesn't, then syncing that request type to a Team Collection with Insomnia Cloud may cause the request to be silently deleted when the collection is pulled and updated by different members using different Insomnia versions.

We highly recommend that teams be on the latest version of Insomnia to avoid losing request data due to version incompatibilities.
