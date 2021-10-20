---
layout: article-detail
title:  Sync with Git
category: "Get Started"
category-url: get-started
---

{:.alert .alert-primary}
**Note**: Sync with Git applies only to Design Documents at this time. Collections use our own Insomnia Sync for versioning. To learn about version control sync for Collections, refer to [Version Control Sync](/insomnia/version-control-sync).

Sync with Git is a built-in feature for Design Documents that enables you to configure your repository to an external Git version control system like GitHub or BitBucket.

On this page, you'll see reference to teams and team members. Learn more about [Team Collaboration](/insomnia/team-collaboration). Otherwise, you can use this feature as a solo developer to keep a copy of your work using Git versioning.

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
* **Authentication Token**: The token needed to authenticate with remote repository provider, such as GitHub or BitBucket. If you have two-factor authentication (2FA) enabled on your account, it is unlikely you will be able to use your username and password. Instead, generate a personal access token or app password (see list below for links to documentation for your Git system).

{:.alert .alert-primary}
**Note**: You may still fail to set up Git Sync properly due to not enough or the wrong types of Git permissions.

Find instructions on how to create a personal access token or app password on the following platforms:

* [Github](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
  * To push to and pull from a _public_ GitHub repo, scope at least `public_repo` when creating your personal access token.
* [Gitlab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
  * To push to and pull from a _private_ GitLab repo, scope at least `api` when creating your personal access token.
* [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/)
  * To push and pull from a _private_ BitBucket repo, scope at least `Read` and `Write` in the `Repository` options when creating your app password.
* [Bitbucket Server](https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html)

Once complete, click **Done** and the repository settings will be persisted for future operations. The author details and token can be updated as needed.

{:.alert .alert-primary}
**Note**: When linking to a GitHub repository, the default branch maybe appear on the Insomnia app as `master`. If you use another default, like `main`, click on the branch dropdown. Select **Branches**, and add your default branch name.

## Clone an Existing Remote Repository

Clone a remote Document from Git via the **Create** dropdown on the Dashboard view. You will be prompted to fill out remote [**Repository Settings**](#remote-repository-settings) to gain remote access.

The remote repository must contain the root `.insomnia` folder, otherwise cloning will fail.

![Click the Create dropdown menu and select Git Clone](/assets/images/git-clone.png)

## Manage Branches

When working with Git, it's good practice to make changes in separate branches. This has two benefits:

* Reduces the chances of merge conflicts when team members are making frequent changes
* Supports a pull-request workflow where team members can leave feedback before merging
Local branches can be created from the branch management dialog. This dialog presents both local branches and remote branches.

{:.alert .alert-primary}
**Note**: Remote branches will only appear if they do not already exist locally.

## Commit Changes

Commit your changes via the branch dropdown menu. You'll be prompted to add a descriptive message as your commit message.

![Click the branch dropdown menu and select commit](/assets/images/commit-git-sync.png)

## Push Changes

Commits and branches only exist locally when created. A push needs to be done to share the commits and history of a branch remotely. If pushing fails, you will be given the option to force push.

The push or force push operation can fail for many reasons, and logs will be presented in the Developer Console prefixed with 'git-event' with further debugging information. A likely cause is that your user does not have permissions to push to a protected branch.

For instance, with GitLab, the main/master branch is protected by default, and those with the developer role are unable to push directly to it. In that case, push to a separate branch and create a pull request, or update the permissions for your user on the repository.

## Pull Changes

If a team member makes a change to the remote repository, pull the changes to access the work locally. Click the branch dropdown menu in a Document and then **Pull**. Any incoming changes will be merged to your local machine.

## Conflict Resolution

Git sync does not currently support the ability to resolve conflicts within the application. If changes were made locally and remotely, a pull may fail.

Here are some strategies to help with conflicts:

* Each team member should make changes in a separate branch to avoid conflicts. Changes should be merged into master once reviewed and approved by other team members (eg. GitHub pull request).
* If a conflict occurs on pull, delete the branch locally and re-fetch it from the branches dialog.
