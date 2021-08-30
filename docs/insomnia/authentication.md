---
layout: article-detail
title:  Authentication
category: "Built-In Features"
category-url: built-in-features
---

Insomnia provides a number of authentication helpers to make it trivial to interface with the most common authentication standards. Simply choose your standard, fill in some details, and Insomnia will take care of the hard work for you.

## Authentication Basics

To set up authentication for a given request, select the desired authentication type from the **Auth** dropdown. Then fill out the required fields.

![The Auth dropdown menu shows all of the built-in authentication types.](/assets/images/authentication-menu.png)
_Select your authentication type from the Auth dropdown menu._ 

## Supported Authentication Types
Currently, Insomnia supports the following authentication standards.

### Basic Authentication
Basic authentication is one of the most basic ways to authenticate an HTTP request and is commonly used for passing API keys to authenticate popular APIs such as [Stripe](https://stripe.com/docs/api/authentication).

### Digest Authentication
Digest is sometimes confused with Basic because it also uses a username and password, but it is much more complicated. To authenticate with a Digest endpoint, the client must send two requests instead of one. The first request sent to the server receives a nonce value, which is then used to produce a one-time-use hash key to authenticate the request.

### OAuth 1.0
OAuth 1.0 provides a method for clients to access server resources on behalf of a resource owner. OAuth 1.0 is used for many popular application APIs such as Twitter.

### OAuth 2.0
The OAuth 2.0 authorization framework enables applications to obtain limited access to an HTTP service, usually on behalf of a resource owner. OAuth 2.0 is used for many popular application APIs such as GitHub, Facebook, Google, Dropbox, and many more.

### Bearer Token
The bearer token mechanism is commonly used within the OAuth 2.0 protocol and is outlined in RFC6750.

### Microsoft NTLM
NTLM is the authentication protocol used on networks that include systems running the Windows operating system and on stand-alone systems. More information can be found by visiting the Microsoft Documentation.

### AWS IAM v4
AWS IAM v4 is the mechanism used to authenticate with the AWS API. More information can be found in the AWS Docs.

### .netrc File
The .netrc file contains login and initialization information used by the auto-login process. More information can be found here.

This authentication type requires no user input. The .netrc file on your computer will be located and used automatically.

### HAWK
Hawk is an HTTP authentication scheme using a message authentication code (MAC) algorithm to provide partial HTTP request cryptographic verification. More information can be found on the HAWK Project Page.
