---
layout: article-detail
title:  Sync with Git
category: "Get Started"
category-url: get-started
---

Insomnia is a collaborative tool for creating, managing, and sharing API specifications. This collaboration is built on the ubiquitous version control system Git, which was chosen to allow Insomnia to fit within the existing editing, review, testing, and deployment workflows that companies and teams already have in place for source code.

## Enable Sync

To use the Git sync feature, click **Setup Sync** within a Collection. 

![Enable Git sync within a Collection by clicking the Setup Sync button.](/assets/images/setup-sync.png)
_Enable Git sync within a Collection by clicking the Setup Sync button._

## Remote Repository Settings

When configuring a remote repository, you will be prompted for the following information. 

* **Git URI**: The URI of the git repository you wish to connect to. Note, only https URLs are supported.
* **Author Name/Email**: Git author metadata that will be stored with each commit
* **Authentication Token**: The token needed to authenticate with remote repository provider (GitHub, Bintray, etc). If you have two-factor authentication (2FA) enabled on your account, it is unlikely you will be able to use your username and password. Instead, generate a Personal Access Token (or an App Password in Bitbucket lingo). 

Find instructions on how to create a Personal Access Token on the following platforms:

* [Github](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/)
* [Gitlab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)

Once complete, click **Done** and the repository settings will be persisted for future operations. Author details and token can be updated after if needed.

## Clone an Existing Repository

If a team member has already pushed a Collection to a remote repository, it can be cloned via the main menu in the top-right of the application on the Dashboard view. Here, you will see the same Repository Settings dialog to configure remote access.

{:.alert .alert-primary}
**Note**: Insomnia does not currently support repositories that contain files outside the root **.insomnia** folder.

In order to clone, the repository must exist and also contain the root `.insomnia/` folder.

## Managing Branches
When working with Git, it is recommended to perform changes in separate branches. This has two benefits:

* Reduces the chances of merge conflicts when team members are making frequent changes
* Supports a pull-request workflow where team members can leave feedback before merging
Local branches can be created from the branch management dialog. This dialog presents both local branches and remote branches. 

{:.alert .alert-primary}
**Note**: Remote branches will only appear if they do not already exist locally.

## Commits and History
A new commit can be created via the git menu at the top right of the header. The descriptive message that will be saved in Git is entered in the input area.

Once we create the commit, we can view it in the repository history.

## Push Changes
Commits and branches only exist locally when created. A push needs to be done to share the commits and history of a branch remotely. If pushing fails, you will be given the option to force push.

The push or force push operation can fail for many reasons, and logs will be presented in the Developer Console prefixed with 'git-event' with further debugging information. A likely cause is that your user does not have permissions to push to a protected branch. 

For instance, with Gitlab, the main/master branch is protected by default, and those with the role of a developer are unable to push directly to it. In that case, push to a separate branch and create a pull request, or update the permissions for your user on the repository.

# Pull Changes
If a team member makes a change to the remote repository, they will need to be pulled down in order to use locally. Pulling will fetch the current branch from the remote repository and merge any changes locally.

## Conflict Resolution
Designer does not currently support the ability to resolve conflicts. If changes were made locally and remotely, a pull may fail.

Here are some strategies to help with conflicts:

* Each team member should make changes in a separate branch to avoid conflicts. Changes should be merged into master once reviewed and approved by other team members (eg. GitHub pull request).
* If a conflict occurs on pull, delete the branch locally and re-fetch it from the branches dialog.