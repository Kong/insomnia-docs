---
layout: article-detail
title:  GraphQL Queries
category: "Built-In Features"
category-url: built-in-features
---

[GraphQL](https://graphql.org/) is a query language for APIs that uses a type system to help with correctness and maintainability. Insomnia makes use of this type system to provide auto-completion and linting of GraphQL queries. This article will explain how to create and execute GraphQL queries within Insomnia.

## Using GraphQL

Creating a GraphQL request in Insomnia is easy. It can be done by either selecting the GraphQL request type during creation or by changing the body type of an existing request using the body menu.

Once this is done, you can fill in the query and variables section of the query.

### Query Section

The query is the only required field of a GraphQL request. Queries can include arguments, comments, fragment, as well as any other valid query constructs. While editing the query, Insomnia will provide auto-completion and errors messages based on the API schema.

{:.alert .alert-primary}
**Note**: GraphQL queries cannot include Insomnia templating but variables can.

### Variables Section

GraphQL [variables](https://graphql.org/learn/queries/#variables) are defined in the Query Variables section below the query. Variables must be defined as a valid JSON object and can include Environment Variables and Template Tags if desired. If the variables section is left empty the variables attribute will not be included in the request payload.

### Construct the Request Payload

Insomnia automatically constructs the payload of a GraphQL request and saves it whenever the query or variables sections are modified. There are three possible attributes that make up a GraphQL request.

* `query` (string): The GraphQL query to be sent.
* `variables` (object): An optional object of variables to be included with the query.
* `operationName` (string): An optional operation name, populated automatically using the first named query if one exists.

The following is an example of a GraphQL request payload that makes use of all three parameters.

```
{
    "query": "query MyQuery($id: string) { thing(id: $id) { id name created } }",
    "variables": {
        "id": "thing_123"
    },
    "operationName": "MyQuery"
}
```

{:.alert .alert-primary}
**Note**: It may be useful to know that this is how Insomnia stores the request body behind the scenes. Try converting the body type to JSON and back and see for yourself.

### Schema Fetching

To provide auto-complete and error checking of GraphQL queries, Insomnia automatically fetches the schema by sending an [introspection](https://graphql.org/learn/introspection/) query. This query is performed both when switching to a new GraphQL request in the app or when various properties of the request are modified (eg. URL). 

{:.alert .alert-primary}
**Note**: All attributes of the request (authentication, headers, etc) are also sent with the introspection query

### Documentation Browser

Insomnia supports the ability to browse the documentation for the current GraphQL endpoint. 

There are three ways to show the documentation pane.

1. Click **Show Documentation** in the Schema dropdown near the query.
2. Hover over a field and click within the popup documentation.
3. `Control+click` (on Mac) a field within a query.
