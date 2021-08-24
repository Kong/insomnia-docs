---
layout: article-detail
title:  Encoding
category: "Built-In Features"
category-url: built-in-features
---

When trying to send a GET request which contains data in dd/mm/YYYY format, but Insomnia convert's '/' into '%2F', so that you are getting the request back with 19%2f10%2020 is encountered due to how Insomnia handles all the already encoded characters as seen here:

https://github.com/Kong/insomnia/blob/453745d3e22cb64bb271a2ab7b36df2b8d936892/packages/insomnia-url/src/querystring.js#L208. 

More than likely you will have to do the encoding on your own, because the code sees a string that has an encoded bit that is ignored, and a non-encoded bit that gets encoded. You can make use of urlencoder, encoding and W3Schools to achieve this.