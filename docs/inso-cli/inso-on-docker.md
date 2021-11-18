---
layout: article-detail
title:  Inso CLI on Docker
category: "Inso CLI"
category-url: inso-cli
---

> Note: this feature is still experimental and in active development.

## Building the `inso` container

1. Clone the repository.
2. Install [Docker](https://docs.docker.com/get-docker/).
3. Run `docker build -t insomnia-inso:dev -f inso-dev.Dockerfile .`.
4. (Optional) Create an alias for the containerised version of `inso`, e.g. `alias inso-docker="docker run -it --rm insomnia-inso:dev"`.
5. (Optional) Try to run an `inso` command, e.g. `inso-docker help`

## Using the `inso` container

In order to run Insomnia specs in a container, you'll need to mount the specs folder on your host machine to a given folder on the container. Examples:

- Mounting an Insomnia git sync repository folder to a folder on the container:

```shell
cd <your-git-sync-repo-folder>

docker run -it --rm -v $(pwd):/var/temp insomnia-inso:dev run test -w /var/temp
```

- Mounting the Insomnia Application Data folder:

```shell
# On macOS:

docker run -v $HOME/Library/Application\ Support/Insomnia:/var/temp -it --rm insomnia-inso:dev run test --src /var/temp

# On Linux:
docker run -v $HOME/.config/Insomnia:/var/temp -it --rm insomnia-inso:dev run test --src /var/temp

# On Windows (using Docker for Windows and WSL):
docker run -v /mnt/c/Users/<your_username>/AppData/Roaming/Insomnia:/var/temp -it --rm insomnia-inso:dev run test --src /var/temp
```

- Mounting the folder where you keep an Insomnia v4 export:

```shell
cd <some-folder>

docker run -it --rm -v $(pwd):/var/temp insomnia-inso:dev run test -w /var/temp/Insomnia_YYYY-MM-DD.json
```
