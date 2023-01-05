---
layout: article-detail
title:  Workspaces
category: "Get Started"
category-url: get-started
---

With Insomnia 2021.5, Workspaces introduces a way to group Request Collections (also called Collections) and Design Documents (also called Documents).

A Workspace can be activated from the Dashboard and the Dashboard will filter to only show the Collections and Documents within the selected Workspace.

## Workspace Types

There are three types of Workspaces: Default, Local, and Remote.

![Access Workspaces from Workspaces SideBar](/assets/images/workspace-sidebar.png)
_Workspaces are available via the lefthand sidebar. The top workspace is always your Home Workspace.  Hover over the other workspace tiles to find the workspace you are working on._

### Default Workspace

The "Insomnia" Workspace exists for all users by default. It cannot be renamed or deleted. It appears next to the home icon in the Workspaces dropdown menu.

### Local Workspace

A local Workspace can be created locally within the application to group Collections and Documents. This only exists on your client, it is not included in any export file, and is not part of your sync data.

### Remote Workspace

If you are signed in and have access to a Team with Insomnia Sync enabled, that Team will be represented as a Remote Workspace on your client. When opening the Workspaces dropdown, Remote Workspaces that you have access to will automatically appear in the list.

When creating a Request Collection inside a Remote Workspace, Insomnia will attempt to automatically enable sync. Collections that have been synced into a Remote Workspace can be pulled from the Dashboard after activating the Remote Workspace. For instance, inside the Insomnia Testing remote Workspace, a user can pull Collections.

## Move Collections and Documents Between Workspaces

At this time, you cannot move a Collection or Document between Workspaces. However, you can _duplicate_ a Collection or Document into another Workspace. The duplicate copy will not update if it's modified in one Workspace.

Duplicate a Collection or Document from the Dashboard by clicking on the three dot menu on a Collection or Document, then select **Duplicate**. A **Duplicate Collection** modal will open. Enter a new name and select the destination Workspace.

You can also duplicate a Collection or Document from **Editor Mode**. Click on the dropdown arrow next to the Collection or Document name. Click **Collection Settings**. Under **Actions**, click **Duplicate**. Enter a new name and select the destination Workspace from the modal.
