---
layout: article-detail
title:  Sync with Git
category: "Get Started"
category-url: get-started
---

{:.alert .alert-primary}
**Note**: Sync with Git applies only to Design Documents at this time. Collections use our own Insomnia Sync for versioning. To learn about version control sync for Collections, refer to [Version Control Sync](/insomnia/version-control-sync).

Sync with Git is a built-in feature for Design Documents that enables you to configure your repository to an external Git version control system like GitHub or BitBucket.

## Enable Git Sync

Enable Git Sync on Design Documents by clicking on the **Setup Git Sync** button beside Preferences. Then select **Repository Settings**. A **Configure Repository** modal will open.

![Enable Git Sync for Documents by clicking the Setup Git Sync button inside a Document.](/assets/images/document-git-sync.png)
_Inside a Design Document, click Setup Git Sync._

## Remote Repository Settings

When configuring a remote repository, you will be prompted for the following information.

* **Git URI**: The URI of the Git repository. Both HTTPS and SSH URLs are supported.
* **Author Name**: The Git author name to store with each commit.
* **Author Email**: The Git author email to store with each commit.
* **Username**: The Git author username to match with the authentication token.
* **Authentication Token**: The token needed to authenticate with remote repository provider, such as GitHub or BitBucket. If you have two-factor authentication (2FA) enabled on your account, it is unlikely you will be able to use your username and password. Instead, generate a Personal Access Token or App Password (see list below for links to documentation for your Git system).

Find instructions on how to create a Personal Access Token or App Password on the following platforms:

* [Github](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* [Gitlab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
* [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/)
* [Bitbucket Server](https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html)

Once complete, click **Done** and the repository settings will be persisted for future operations. The author details and token can be updated as needed.

## Clone an Existing Repository

If a team member has already pushed a Document to a remote repository, it can be cloned via the main menu in the top right of the application on the Dashboard view. Here, you will see the same Repository Settings dialog to configure remote access.

In order to clone, the repository must exist and also contain the root `.insomnia/` folder.

## Manage Branches

When working with Git, it's good practice to make changes in separate branches. This has two benefits:

* Reduces the chances of merge conflicts when team members are making frequent changes
* Supports a pull-request workflow where team members can leave feedback before merging
Local branches can be created from the branch management dialog. This dialog presents both local branches and remote branches.

{:.alert .alert-primary}
**Note**: Remote branches will only appear if they do not already exist locally.

## Commits and History

Create a new commit via the Git menu at the top right of the header. Add a descriptive message to the input. The message will be saved in Git and commits will appear in the repository history.

## Push Changes

Commits and branches only exist locally when created. A push needs to be done to share the commits and history of a branch remotely. If pushing fails, you will be given the option to force push.

The push or force push operation can fail for many reasons, and logs will be presented in the Developer Console prefixed with 'git-event' with further debugging information. A likely cause is that your user does not have permissions to push to a protected branch.

For instance, with GitLab, the main/master branch is protected by default, and those with the developer role are unable to push directly to it. In that case, push to a separate branch and create a pull request, or update the permissions for your user on the repository.

## Pull Changes

If a team member makes a change to the remote repository, pull the changes to access the work locally. Pulling fetches the current branch from the remote repository and merges any changes locally.

## Conflict Resolution

Git sync does not currently support the ability to resolve conflicts within the application. If changes were made locally and remotely, a pull may fail.

Here are some strategies to help with conflicts:

* Each team member should make changes in a separate branch to avoid conflicts. Changes should be merged into master once reviewed and approved by other team members (eg. GitHub pull request).
* If a conflict occurs on pull, delete the branch locally and re-fetch it from the branches dialog.
