---
layout: article-detail
title:  Inso CLI on Docker
category: "Inso CLI"
category-url: inso-cli
---

{:.alert .alert-primary}
> **Note**: this feature is still experimental and in active development.

## Build the `inso` Container

1. Clone the [Insomnia repository](https://github.com/Kong/insomnia).
2. Install [Docker](https://docs.docker.com/get-docker/).
3. Run `docker build -t insomnia-inso:dev -f inso-dev.Dockerfile .`.

## Use the `inso` Container

To run Insomnia specs in a Docker container, mount the specs folder on your host machine to a given folder on the container. Examples:

- Mount an Insomnia git sync repository folder to a folder on the container:

```shell
cd <your-git-sync-repo-folder>

docker run -it --rm -v $(pwd):/var/temp insomnia-inso:dev run test -w /var/temp
```

- Mount the Insomnia Application Data folder:

```shell
# On macOS:
docker run -v $HOME/Library/Application\ Support/Insomnia:/var/temp -it --rm insomnia-inso:dev run test --src /var/temp

# On Linux:
docker run -v $HOME/.config/Insomnia:/var/temp -it --rm insomnia-inso:dev run test --src /var/temp

# On Windows (using Docker for Windows and WSL):
docker run -v /mnt/c/Users/<your_username>/AppData/Roaming/Insomnia:/var/temp -it --rm insomnia-inso:dev run test --src /var/temp
```

- Mount the folder where you keep an Insomnia v4 export:

```shell
cd <some-folder>

docker run -it --rm -v $(pwd):/var/temp insomnia-inso:dev run test -w /var/temp/Insomnia_YYYY-MM-DD.json
```
