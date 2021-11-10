---
layout: article-detail
title:  Projects
category: "Get Started"
category-url: get-started
---

With Insomnia 2021.5, Projects introduces a way to group Request Collections (also called Collections) and Design Documents (also called Documents).

A Project can be activated from the Dashboard and the Dashboard will filter to only show the Collections and Documents within the selected Project.

## Project Types

There are three types of Projects: Default, Local, and Remote.

![Access Projects from the Projects dropdown next to the Insomnia logo.](/assets/images/projects-dropdown.png)
_Projects are available via the main Insomnia dropdown. Here, you will find the Default Project listed first next to the home icon._

### Default Project

The "Insomnia" Project exists for all users by default. It cannot be renamed or deleted. It appears next to the home icon in the Projects dropdown menu.

### Local Project

A local project can be created locally within the application to group Collections and Documents. This only exists on your client, it is not included in any export file, and is not part of your sync data.

### Remote Project

If you are signed in and have access to a Team with Insomnia Sync enabled, that Team will be represented as a Remote Project on your client. When opening the Projects dropdown, Remote Projects that you have access to will automatically appear in the list.

When creating a Request Collection inside a Remote Project, Insomnia will attempt to automatically enable sync. Collections that have been synced into a Remote Project can be pulled from the Dashboard after activating the Remote Project. For instance, inside the Insomnia Testing remote project, a user can pull Collections.

## Move Collections and Documents Between Projects

At this time, you cannot move a Collection or Document between Projects. However, you can _duplicate_ a Collection or Document into another Project. The duplicate copy will not update if it's modified in one Project.

Duplicate a Collection or Document from the Dashboard by clicking on the three dot menu on a Collection or Document, then select **Duplicate**. A **Duplicate Collection** modal will open. Enter a new name and select the destination Project.

You can also duplicate a Collection or Document from **Editor Mode**. Click on the dropdown arrow next to the Collection or Document name. Click **Collection Settings**. Under **Actions**, click **Duplicate**. Enter a new name and select the destination Project from the modal.
