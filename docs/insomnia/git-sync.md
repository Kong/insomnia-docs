---
layout: article-detail
title:  Sync with Git
category: "Sync with Git"
category-url: git-sync
---

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
3. Click **Authenticate with GitHub App**. Your web browser should opened to the Insomnia website.
4. Click on **Continue**.
5. You might be prompted to continue by your browser through the Insomnia app via  "Choose Application" box.  If you are not, you can follow the instructions on the page to complete GitHub account authentication with the Insomnia App.
6. You can now clone repositories that the GitHub App has access to! Search for the repository you want to connect to and click **Clone**.

NOTE: If you cannot find the repository you want to connect to, you will need to ask the repository or organization owner to install the [Insomnia Desktop GitHub App](https://github.com/apps/insomnia-desktop).

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

* [GitHub](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
  * Ensure that the token has the `user:email` scope in order to correctly associate commits with your GitHub account.
  * For public repos, select [`public_repo`](https://github.com/settings/tokens/new?description=insomnia-git-sync&scopes=public_repo,user:email) when creating your token.
  * For private repos, select [`repo`](https://github.com/settings/tokens/new?description=insomnia-git-sync&scopes=repo,user:email) when creating your token.
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
