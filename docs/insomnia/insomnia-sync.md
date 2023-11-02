---
layout: article-detail
title:  Cloud Sync
category: "Get Started"
category-url: get-started
---

In this section, you will find documentation on [Cloud Sync](#cloud-sync) and [Snapshots](#snapshots).

## Cloud Sync

Cloud sync provides the following abilities on top of the base Insomnia functionality:

* Snapshot the contents of projects
* Revert to a previous Snapshot
* Share Snapshots across devices or with members of your organization
* Create and work on separate branches

## Enabling sync for projects

When creating a new project you will be prompted to pick the **Project Type**.

![Enabling remote project](/assets/images/secure-cloud-project.jpg)

Any collections and design documents under a **Secure Cloud** project type will be automatically synced into Insomnia cloud.

## Snapshots

This section provides information on using the paid Snapshot feature for Secure Cloud Projects. For pricing information, see our [Pricing](https://insomnia.rest/pricing) page.

### Create Snapshot

To create a Snapshot, open a **remote Collection/Design Document** and click on the branch dropdown menu next to Preferences, and then click **Create Snapshot**. A **Create Snapshot** modal will open.

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

Changes made to a request collection/design document can be added on a granular level. Modifications and deletions to existing requests, folders, etc (AKA objects) will appear under  Modified Objects, while new additions will appear under Unversioned Objects and are unselected by default.

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

### Revert to a Previous Snapshot

You can revert a Collection/Design Document to a previous Snapshot. Find the Snapshot you want to revert to by going to the branch dropdown and clicking on **History**. Then click **Restore** on the Snapshot you want to revert to.

When you restore a Snapshot, it will show the changes locally and you'll need to manually Snapshot the changes.

## Things to Know

If a team is using mixed versions of Insomnia, and one version supports a type of request (such as gRPC or WebSockets) that another version doesn't, then syncing that request type to a synced Collection/Design Document with Insomnia Cloud may cause the request to be silently deleted when the collection/Design document is pulled and updated by different members using different Insomnia versions.

We highly recommend that teams be on the latest version of Insomnia to avoid losing request data due to version incompatibilities.
