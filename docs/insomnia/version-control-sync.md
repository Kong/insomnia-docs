---
layout: article-detail
title:  Version Control Sync
category: "Get Started"
category-url: get-started
---

{:.alert .alert-primary}
**Note**: This feature comes with paid subscriptions. See [Pricing](https://insomnia.rest/pricing) for more information.

In this section, you will find documentation on [Sync](#sync) and [Snapshots](#snapshots). 

## Sync

Sync provides the following abilities on top of the base Insomnia functionality:

* Snapshot the contents of a request collection
* Revert a request collection to a previous Snapshot
* Share Snapshots across devices or with members of your team
* Create and work on separate branches

The main features of sync can be accessed from the dropdown at the top right of the application when you are in a Collection.

![With a paid subscription, click on the large branch name button within a Collection.](/assets/images/version-control.png)
_For versioning options on a Collection, click on the large branch name button._

### Enable Sync

Sync is only available to Collections that exist inside a [remote Project](/projects). When sync is enabled on a Collection inside a particular Project, all users that have access to the project also gain access to that Collection. 

You can manage the members in your Project from the [web dashboard](https://app.insomnia.rest/app/signup/).

#### Auto enable sync

On creating a Collection within a remote Project, Insomnia will attempt to automatically enable sync and push an initial Snapshot.

#### Manually enable sync
If Insomnia is unable to or has not automatically enabled sync, then you can manually set this up. First click **Setup Sync** then **Create Local Project**. Then you can create and push your first Snapshot.

{:.alert .alert-primary}
**Note**: Can't see the Sync menu? Make sure you're logged in by clicking on the person icon in the top right corner of your application. If you see a logout option, you're logged in. 

## Snapshots

This section provides information on using the paid snapshot feature. 

### Create Snapshots
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
Request Collections can be shared with a team via the main sync menu. To get started sharing workspaces with your team, see Team Collaboration.

### Revert to a Previous Snapshot

At any time, it is possible to revert the current workspace to a previous Snapshot.

{:.alert .alert-primary}
**Note**: Restoring a Snapshot will not modify the branch's history. Any changes made by the restore will need to be Snapshotted if desired.

