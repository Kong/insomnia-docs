---
layout: article-detail
title: Storage options
---

<!--Contains info about Insomnia sync, local storage (scratch pad), git sync. Not sure if this is the best place, but Insomnia is gaining a lot of new customers because they have local storage, so I'd like to highlight that. Note, Postman has this type of information contained in their API version control section(https://learning.postman.com/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/). Is this how users would search for this info? https://docs.insomnia.rest/insomnia/scratchpad https://docs.insomnia.rest/insomnia/insomnia-storage-options-guide https://docs.insomnia.rest/insomnia/insomnia-sync https://docs.insomnia.rest/insomnia/git-sync need to be added, I've copy/pasted the contents of those here and deleted the original files, maybe tabs for each storage option? Tabs (as of writing this) have to be done in HTML. Content on this page will need to be revised.  -->

# Storage options guide

## Introduction

Insomnia offers various storage options to cater to different user needs and preferences. Understanding these options is crucial for efficient and secure management of your API projects. This document outlines the three primary storage options available in Insomnia: Local Vault, Cloud Sync, and Git Sync.

![storage options example image](../assets/images/storage-options-example-img.jpg)

## 1. Local Vault

### Overview

Local Vault is a storage option that allows all project data to be stored locally on your device. This option is ideal for users who prefer or require their data to remain off the cloud for privacy or security reasons.

### Key Features

- **Local Storage**: All project files are stored on your local machine.
- **No Cloud Interaction**: No data is sent to or stored in the cloud.
- **Security**: Enhanced security as data remains within your local environment.
- **Independence from Internet**: Access and work on your projects without needing an internet connection.

### Use Cases

- Organizations with strict data privacy regulations.
- Users working on sensitive projects that require enhanced security.
- Environments with limited or restricted internet access.

## 2. Cloud Sync

### Overview

Cloud Sync enables users to store and synchronize their project data in the cloud securely. This feature is beneficial for collaboration, providing easy access to projects from different devices and locations.

### Key Features

- **End-to-End Encryption (E2EE)**: Ensures data is encrypted during transmission and storage.
- **Real-Time Synchronization**: Keeps your projects up-to-date across all devices.
- **Collaboration**: Share and collaborate on projects with team members.
- **Remote Access**: Access your projects from anywhere with an internet connection.

### Use Cases

- Teams requiring collaboration on API projects.
- Users who work from multiple locations or devices.
- Projects that benefit from centralized, cloud-based management.

## 3. Git Sync

### Overview

Git Sync allows users to use a third-party Git repository for storing project data. This option is independent of cloud access and is suitable for users familiar with Git workflows.

{:.alert .alert-primary}
**Note**: Sync with Git applies to users subscribed to [Team plan](https://insomnia.rest/pricing) and above, refer to [pricing](https://insomnia.rest/pricing).

### Key Features

- **Version Control**: Leverage Git's version control capabilities for your projects.
- **Independence from Insomnia's Cloud**: Uses external Git repositories for storage.
- **Flexibility**: Choose any Git service provider like GitHub, GitLab, or Bitbucket.
- **Collaboration via Git**: Collaborate with others using standard Git practices.

### Use Cases

- Users comfortable with Git and its versioning system.
- Projects that require detailed version tracking and rollback capabilities.
- Teams that already use Git for other aspects of their development workflow.

## Conclusion

Understanding these storage options enables you to choose the most suitable one based on your project requirements, collaboration needs, and security preferences. Insomnia's flexibility in offering Local Vault, Cloud Sync, and Git Sync ensures that it can adapt to a wide range of user scenarios, from individual developers to large organizations.

> Looking for something else? See information on [Scratch Pad](scratchpad).


# scratchpad
## Introduction

The Scratch Pad feature in Insomnia is a powerful tool for quickly experimenting with API requests without requiring a User account and/or affecting your account's existing Local/Cloud projects or workspaces.
It's ideal for testing, debugging, or learning purposes.
This tutorial will guide you through using the Scratch Pad feature effectively.

## Accessing Scratch Pad

1. **Open Insomnia Application**: Launch Insomnia on your device.

    ![scratchpad option on start](../assets/images/scratchpad-option.jpg)

2. **Find Scratch Pad**: In the Insomnia interface, look for the Scratch Pad option. It's typically located in the sidebar or top menu, depending on your version.

    ![empty scratchpad](../assets/images/scratchpad-empty.jpg)

## Using Scratch Pad

### Creating a New Request

1. **Create Request**: In the Scratch Pad area, click on 'New Request'.
2. **Name Your Request** (optional): Give a descriptive name to your request for easy identification.
3. **Choose Request Type**: Select the type of request (GET, POST, PUT, DELETE, etc.) from the dropdown menu.
4. **Enter URL**: Type in the API endpoint you wish to test.

    ![Example new request](../assets/images/example-new-request.jpg)

### Setting Up Request Parameters

1. **Add Headers**: If your API requires headers (like content-type, authorization tokens), add them in the 'Headers' tab.
2. **Configure Body** (for POST/PUT requests): In the 'Body' tab, choose the appropriate format (like JSON, form data) and input the data you want to send.

### Sending the Request

1. **Send Request**: Once your request is set up, click the 'Send' button.
2. **View Response**: The response from the API will be displayed in the pane below the request configuration. You can view the status code, response body, headers, and more.

## Managing Scratch Pad Requests

- **Save Request**: You can save your request for later use by clicking 'Save'.
- **Organize Requests**: If you have multiple requests, organize them for easy access and reference.
- **Delete or Edit**: Requests can be deleted or edited as needed.

# Insomnia sync

In this section, you will find documentation on [Cloud Sync](#cloud-sync) and [Commits](#commits).

## Cloud Sync

Cloud sync provides the following abilities on top of the base Insomnia functionality:

* Commit and push the contents of projects
* Revert to a previous commit
* Share commits across devices or with members of your organization
* Create and work on separate branches

## Enabling sync for projects

When creating a new project you will be prompted to pick the **Project Type**.

![Enabling remote project](/assets/images/secure-cloud-project.jpg)

Any collections and design documents under a **Secure Cloud** project type will be automatically synced into Insomnia cloud.

## Syncing workspaces from Cloud projects

When navigating in a Cloud project you should see Un-synced collections, design documents or mock servers which you can pull from.

![Auto pull](/assets/images/unsynced.jpg)

## Commits

This section provides information for Secure Cloud Projects. For pricing information, see our [Pricing](https://insomnia.rest/pricing) page.

### Create Commit

To create a Commit, open a **remote Collection/Design Document** and click on the branch dropdown menu next to Preferences, and then click **Commit**.

![To create a new Commit, click on the branch dropdown next to Preferences and select Commit.](/assets/images/cloud-sync-commit.jpg)
_Within a remote Collection/Design Document, click on the branch dropdown and click on Commit._

A **Create Commit** modal will open.
![Create commit modal](../assets/images/create-commit-modal.jpg)

Commits represent all data in a Collection/Design Document (requests, folders, environments) at a specific point in time. Besides the data within the Collection, a Commit also details:

* The Commit author
* The time that the Commit was created
* A message describing any changes in the Commit

Creating a Commit requires two actions:

1. Describe the changes contained within the Commit
2. Select which changes to include

### Write a Commit Message

Commit messages should describe the included changes in as much detail as possible, as this description will help identify the Commit if you ever need to revert back to it.

### Add Changes to a Commit

Changes made to a request collection/design document can be added on a granular level. Modifications and deletions to existing requests, folders, etc (AKA objects) will appear under  Modified Objects, while new additions will appear under Unversioned Objects and are unselected by default.

### Share Commits

Once a Commit is created, it can be shared to your Insomnia account or team. There are two ways to push Commits:

* Use the Create and Push option when creating the Commit
* Push un-synced Commits from within the main sync menu

If there are new Commits available that do not yet exist on your device (eg. from a team) these will be available to pull down from within the sync menu.

### Work with Branches

All Commits created for Sync are stored in a branch. Branches are identified by name and each one maintains a list of Commits that have been created for it (ie. its history). Branches can be created or deleted at any time, shared with team members, and even merged together.

Branches can be useful for many reasons, but the two main use cases are the following:

* Separate personal work from other team members
* Work on experimental changes that may or may not exist long-term

Branches are managed within the branches dialog. Here, you can create local branches, merge branches, and fetch remote branches.

### Revert to a Previous Commit

You can revert a Collection/Design Document to a previous Commit. Find the Commit you want to revert to by going to the branch dropdown and clicking on **History**. Then click **Restore** on the Commit you want to revert to.

When you restore a Commit, it will show the changes locally and you'll need to manually Commit the changes.

## Things to Know

If a team is using mixed versions of Insomnia, and one version supports a type of request (such as gRPC or WebSockets) that another version doesn't, then syncing that request type to a synced Collection/Design Document with Insomnia Cloud may cause the request to be silently deleted when the collection/Design document is pulled and updated by different members using different Insomnia versions.

We highly recommend that teams be on the latest version of Insomnia to avoid losing request data due to version incompatibilities.

# Git sync


{:.alert .alert-primary}
**Note**: Sync with Git applies to users subscribed to [Team plan](https://insomnia.rest/pricing) and above, refer to [pricing](https://insomnia.rest/pricing).

Sync with Git is a built-in feature for Design Documents and Collections that enables you to configure your repository to an external Git version control system like GitHub or Gitlab.

Pushing to a remote Git repository creates the `.insomnia` directory that can also be used with [Inso CLI](/inso-cli/introduction#data-search-flow).

## Clone an Existing Remote Repository

Within a Team/Enterprise organization, you can clone a remote from Git via the **Create** dropdown on the Dashboard view.

You will be prompted to fill out remote [**Repository Settings**](#remote-repository-settings) to gain remote access.

![git sync git clone](../assets/images/git-sync-git-clone.jpg)

The remote repository must contain the root `.insomnia` directory, otherwise it will create an empty Design Document by default.

## Enable Git Sync on existing Collection/Design Document

{:.alert .alert-primary}
**Note**: This section assumes that you already have an empty remote Git repository.

Within a Team/Enterprise organization, you can convert an existing Insomnia Synced Collection/Design Document to use Git Sync instead.

This can be done clicking on the **Switch to Git Repository** button on the Sync dropdown.

![git sync enable](../assets/images/git-sync-enable.jpg)

A **Configure Repository** modal will open.

![git sync modal](../assets/images/git-sync-modal-input.jpg)

Configure it according to your Git Sync setup and press "Sync".

## Remote Repository Settings

When configuring a remote repository, you can chose to connect with GitHub or GitLab, or manually set up a remote repository.

### Set up a remote repository with GitHub

1. Open a document in Insomnia, then click **Setup Git Sync** in the upper right corner of the Insomnia app.
2. Click "Configure Repository", then open the GitHub tab.
3. Click **Authenticate with GitHub**.
4. Click on **Continue**. If the browser has already been authenticated with Github, the page will say "Successfully authenticated Insomnia".
5. You might be prompted to continue by your browser through the Insomnia app via  "Choose Application" box.  If you are not, you can follow the instructions on the page to complete Github account authentication with the Insomnia App.
6. You can now clone any repository from GitHub! Copy the HTTPS URI for the GitHub repository you want to connect to and paste it into the "GitHub URI" field.

### Set up a remote repository with GitLab

1. Open a document in Insomnia, then click **Setup Git Sync** in the upper right corner of the Insomnia app.
2. Click "Configure Repository", then open the GitLab tab.
3. Click **Authenticate with GitLab**. Your default browser will open and automatically redirect you to GitLab.
4. Click **Authorize** to allow Insomnia to connect with your GitLab account.

    If successful, you will be redirected to the Insomnia website with the message "Successfully authenticated Insomnia".
5. Return to the Insomnia app and wait for sync to finish.

6. You might be prompted to manually add your GitLab authentication to the Insomnia app. If you still see the option to manually paste in your GitLab authentication code, copy it from `app.insomnia.rest` into the Insomnia app, then click  **Sync**.
7. You can now clone any repository from GitLab! Copy the HTTPS URI for the GitLab repository you want to connect to and paste it into the "GitLab URI" field.

### Manually set up a remote repository

* **Git URI**: The URI of the Git repository. Only HTTPS URLs are officially supported.
* **Author Name**: The Git author name to store with each commit.
* **Author Email**: The Git author email to store with each commit.
* **Username**: The Git author username to match with the authentication token.
* **Authentication Token**: The token needed to authenticate with remote repository provider, such as GitHub or BitBucket. If you have two-factor authentication (2FA) enabled on your account, it is unlikely you will be able to use your username and password. Instead, generate a personal access token or app password with the scope outlined below.

### Token and App Password Scope

{:.alert .alert-primary}
**Note**: You may fail to set up Git Sync properly due to not enough or the wrong types of Git permissions.

Find instructions on how to create a personal access token or app password on the following platforms:

* [Github](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
  * For public repos, scope at least [`public_repo`](https://github.com/settings/tokens/new?description=insomnia-git-sync&scopes=public_repo) when creating your token.
  * For private repos, scope at least [`repo`](https://github.com/settings/tokens/new?description=insomnia-git-sync&scopes=repo) when creating your token.
* [Gitlab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
  * For public and private GitLab repos, scope at least `api` when creating your personal access token.
* [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/)
  * For _private_ BitBucket repos, scope at least `Read` and `Write` in the `Repository` options when creating your app password.
* [Bitbucket Server](https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html)

Once complete, click **Done** and the repository settings will be persisted for future operations. The author details and token can be updated as needed.

## Manage Branches

When working with Git, it's good practice to make changes in separate branches. This has two benefits:

* Reduces the chances of merge conflicts when collaborators are making frequent changes
* Supports a pull-request workflow where collaborators can leave feedback before merging
Local branches can be created from the branch management dialog. This dialog presents both local branches and remote branches.

{:.alert .alert-primary}
**Note**: Remote branches will only appear if they do not already exist locally.

## Commit Changes

Commit your changes via the branch dropdown menu. You'll be prompted to add a descriptive message as your commit message.

![Click the branch dropdown menu and select commit](../assets/images/git-commit-example.jpg)

## Push Changes

Pushing your changes to your remote repository for the first time creates the `.insomnia` directory, which you can use with the [Inso CLI](/inso-cli/introduction#data-search-flow).

{:.alert .alert-primary}
**Note**: If you'd like to push to an alternative branch than the default, click on the branch dropdown menu. Select **Branches**, and add your desired branch name.

Commits and branches only exist locally when created. A push needs to be done to share the commits and history of a branch remotely. If pushing fails, you will be given the option to force push.

The push or force push operation can fail for many reasons, and logs will be presented in the Developer Console prefixed with `git-event` with further debugging information. A likely cause is that your user does not have permissions to push to a protected branch.

For instance, with GitLab, the main/master branch is protected by default, and those with the developer role are unable to push directly to it. In that case, push to a separate branch and create a pull request, or update the permissions for your user on the repository.

## Pull Changes

If a collaborator makes a change to the remote repository, pull the changes to access the work locally. Click the branch dropdown menu in a Document and then **Pull**. Any incoming changes will be merged to your local machine.

## Conflict Resolution

Git sync does not currently support the ability to resolve conflicts within the application. If changes were made locally and remotely, a pull may fail.

Here are some strategies to help with conflicts:

* Each collaborator should make changes in a separate branch to avoid conflicts. Changes should be merged into master once reviewed and approved by other collaborators (eg. GitHub pull request).
* If a conflict occurs on pull, delete the branch locally and re-fetch it from the branches dialog.

## Sign out of Git account

Sign out of a synced Git management account.

1. Click on **Setup Git Sync**, then click on **Repository Settings**.
2. You should see a list of all synced accounts. Next to each account is a **Sign Out** button. Click on **Sign Out** for the accounts that need to be signed out.
3. In the box that appears, click **Sign Out** again.

The **Configure Repository** box will no longer list the account that was signed out in its list of configured accounts.
