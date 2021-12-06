---
layout: article-detail
title:  Responses
category: "Requests and Responses"
category-url: requests-and-responses
---

Insomnia is most commonly used for displaying text content like JSON and XML, and it also has the ability to display rich content in the following formats:

* HTML
* Images
* SVG
* Audio files
* PDF
* CSV

Access the **Preview** tab dropdown menu to change the Preview Mode. Note that the tab name changes between Preview, Source, and Raw as you select a new option. 

![The Preview tab appears in the right-side panel, and you can access Preview Modes via by clicking on the Preview dropdown menu.](/assets/images/preview.png)
_Use the Preview dropdown menu to change the Preview Mode._

## Search

To execute a plain text search of a response, click inside the response and type CTRL + F (or CMD + F on Mac) to open the search bar. Type your search term and press enter, and the matching keywords will be highlighted.

## Filter

The filter box appears in the right bottom corner, below the response. [jsonpath-plus](https://www.npmjs.com/package/jsonpath-plus) is used to filter JSON responses, while [XPath](https://www.w3.org/TR/xpath/) is used to filter XML responses. Click on the `?` for examples. You will only see the `?` icon on JSON and XML responses.

![Click on the question mark icon for examples.](/assets/images/json-xml-examples.png)
_On returned JSON and XML, click the question mark icon for examples._

Since we use [jsonpath-plus](https://www.npmjs.com/package/jsonpath-plus), you'll need to escape `@` by preceding it with <code>`</code>. For example, if you want to filter by the following:

```text
$['hydra:member'][0]['@id']
```

add <code>`</code> prior to the `@`:

```text
$['hydra:member'][0]['`@id']
```

## Save to File

If the response is too large, or you want to save or parse the response outside of Insomnia, you can save the raw response directly to a file. To do this, click the **Preview** dropdown menu then **Save Raw Response**.

## Access Response History

Past responses can be viewed in the dropdown menu of the response window.

![Access the response history for a specific request in the response window dropdown menu.](/assets/images/response-history.png)
_Click the response window dropdown menu to see response history._

Activating a past response will show the response in the response window. You can also revert the request to the state it was in when the response was saved.