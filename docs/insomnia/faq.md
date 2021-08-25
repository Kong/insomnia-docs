---
layout: article-detail
title:  FAQ
category: Support
category-url: support
---

Here are the answers to the most frequently asked questions that we receive. For support, see our [support community page](https://insomnia.rest/support). 

## General Questions

**What platforms does Insomnia run on?**

Insomnia has desktop apps for 64-bit versions of Mac, Windows, and Linux.

**Does Insomnia provide 32-bit binaries?**

At this time, Insomnia is 64-bit only.

**What software license does Insomnia use?**

The Insomnia desktop application and related software packages are open source software under the MIT license and the source code is available at github.com/kong/insomnia. The server-side software that backed the paid sync service is closed source.

**Can I use Insomnia for commercial use?**

Yes, of course!

**How can I support Insomnia?**

First of all, thank you! Since Insomnia is just starting out, the best thing you can do is help spread the word! You can also submit bug reports on our open source repository, let us know how you use Insomnia, or sign up for a paid plan.

## Technical Questions

**How can I temporarily disable Nunjucks template?**

You can disable templating of the request body via the request settings dialog (accessed from the sidebar). For more control, you can also disable templating by wrapping the desired content in the Nunjucks {% raw %}{% raw %}{% endraw %} Tag.

**Why don’t I see anything after importing a backup?**

The import/export feature acts similarly to copying files in a filesystem. If the import contains data that originated from your application, data will be overwritten. However, if the import contains data that did not originate from your application, new data (including request collections / design documents) may have be created.

{:.alert .alert-primary}
**Note**: You can check for newly created Collections and Documents on the Dashboard.

**Where does the application store data?**

Insomnia stores data in Electron’s appData directory, which differs depending on platform. The local database is distributed across files with the name `insomnia.${resourceName}.db`.

* `%APPDATA%/Insomnia` on Windows
* `XDG_CONFIG_HOME/Insomnia` or `~/.config/Insomnia` on Linux
* `~/Library/Application Support/Insomnia` on macOS

The app data directory can also be shown by navigating to Help > Show App Data Folder.

## Team Questions

**What is the team size limit for a free trial?**

The free trial is limited to 5 team members. Once the trial has expired you will be billed for each team member, which means the post-trial limit is the number of member seats you purchase.
