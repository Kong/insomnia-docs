---
layout: article-detail
title:  Login Activity Report
category: "Enterprise Reporting"
category-url: enterprise-login-report
---
## Reporting: Last Logged In
You can download the reporting of the last login activity of your enterprise members in the license page - https://app.insomnia.rest/app/enterprise/licenses.

Click the download icon in the column header of "Last Active". Once you download it, you will see the csv rows with email and last login date. This date means when the person logged in.

### How do we get the login activity?
We have a cache layer that captures the session validity. This session validity might get updated if the Insomnia desktop application sends a request to operate on the insomnia resources. The session validity is synchronized once a while every day. However, it does not update the session created time as it merely updated its validity.

If you do not see any value in the column, that means either the user never signned in or the user might have logged out.