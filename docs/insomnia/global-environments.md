---
layout: article-detail
title:  Global Environments
category: "Get Started"
category-url: get-started
---

Starting with the [release of Insomnia 9.3.0](https://konghq.com/blog/product-releases/insomnia-9-3-ga), the concept of Global Environments has been introduced.

Global environments can be defined on a Project level and can be used across multiple collections, including the ability to leverage them in pre-request and after-response scripting.

You can create as many global environments as you wish, so you aren't limited to only one, and decide to store them locally on your computer, or leverage Cloud Sync or Git Sync for collaboration (based on your storage settings for your projects).

## Creating Global Environments

To create a new global Environment:

- Go to the Insomnia dashboard.
- Click on the **Create** button.
- Select **Environment** from the dropdown menu.

You can filter by Existing Environments by using the sidebar on the dashboard.

![Global Environments seen on dashboard](../assets/images/global-envs-2.png)

### Setting Up a Global Environment

After creating a new global environment, you can:

- **Set Up Default Environment Variables**: In a new global environment, configure default environment variables on the **Base environment**. This setup is similar to how it works for collection environments.

- **Create Sub-Environments**: You can create sub-environments within the global environment. Sub-environments can be designated as private or shared.

![Global Environments workspace](../assets/images/global-envs-1.png)

By following these steps, you can efficiently create, filter, and manage your environments on the dashboard.

## Using global environments

Once you are have defined a global Environment, you should be able to select it from the Environment selection menu within any Collection or Design Document.

![Selecting global Environment within a collection](../assets/images/global-envs-3.png)

On the Environment selection menu you'll be shown which environments are currently selected/active.

### Environment priority order

If you define the same environment variable across different levels of environments, both at a global environment level as well as on a given collection's environments, the lowest-level value will take priority.

- Global Environment (base) *(highest-level)*
- Global Environment (Sub-environment)
- Collection Environment (base)
- Collection Environment (Sub-environment)
- Folder-level environment *(lowest-level)*
