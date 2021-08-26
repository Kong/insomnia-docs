---
layout: article-detail
title:  GraphQL Queries
category: "Built-In Features"
category-url: built-in-features
---

GraphQL is a query language for APIs that uses a type system to help with correctness and maintainability. Insomnia makes use of this type system to provide auto-completion and linting of GraphQL queries. This article will explain how to create and execute GraphQL queries within Insomnia.

## Using GraphQL

Creating a GraphQL request in Insomnia is easy. It can be done be either selecting the GraphQL request type during creation or by changing the body type of an existing request using the body menu.

Once this is done, you can fill in the query and variables section of the query.

Query Section
The query is the only required field of a GraphQL request. Queries can include arguments, comments, fragment, as well as any other valid query constructs. While editing the query, Insomnia will provide auto-completion and errors messages based on the API's schema (more on this later).

{:.alert .alert-primary}
**Note**: GraphQL queries cannot include Insomnia templating but variables can.

Variables Section
GraphQL variables are defined in the Query Variables section below the query. Variables must be defined as a valid JSON object and can include Environment Variables and Template Tags if desired. If the variables section is left empty the variables attribute will not be included in the request payload.

Constructing the Request Payload
Insomnia automatically constructs the payload of a GraphQL request and saves it whenever the query or variables sections are modified. There are three possible attributes that make up a GraphQL request.

query: String: The GraphQL query to be sent
variables: ?Object: An (optional) object of variables to be included with the query
operationName: ?String: An (optional) operation name, populated automatically using the first named query if one exists
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

Schema Fetching
To provide auto-complete and error checking of GraphQL queries, Insomnia automatically fetches the schema by sending an introspection query. This query is performed both when switching to a new GraphQL request in the app or when various properties of the request are modified (eg. URL). 

{:.alert .alert-primary}
**Note**: All attributes of the request (authentication, headers, etc) are also sent with the introspection query

Documentation Browser
Insomnia supports the ability to browse the documentation for the current GraphQL endpoint. 

There are three ways to show the documentation pane.

Click "Show Documentation" in the Schema dropdown near the query
Hover over a field and click within the popup documentation
Control-click (command on Mac) a field within a query

This article demonstrated how Insomnia can help create and send queries to a GraphQL API. There are many other tools that do similar things, but one large benefit of using Insomnia is that you can also use the many other great features of Insomnia as well, like Authentication Helpers, Environment Variables, Proxies, Team Collaboration, and more!