---
layout: article-detail
title:  Inso CLI on Docker
category: "Inso CLI"
category-url: inso-cli
---

## Pull `kong/inso`

Pull the latest `kong/inso` Docker image:

```shell
docker pull kong/inso:latest
```

All available tags can be found on Inso-CLI's [Docker Hub page](https://hub.docker.com/r/kong/inso/tags).

## Run Inso CLI commands

To run Insomnia specs in `kong/inso` container, mount the specs folder on your host machine to a `/var/temp` folder in the container. See the following sections for some examples.

## Examples

### Mount git sync repo

Mount an Insomnia git sync repository folder to a folder in the container:

```shell
cd <your-git-sync-repo-folder>

# Run Unit Tests
docker run -it --rm -v $(pwd):/var/temp kong/inso:latest run test -w /var/temp

# Generate Kong Declarative config
docker run -it --rm -v $(pwd):/var/temp kong/inso:latest generate config -w /var/temp -f json
```

## Mount Application Data folder

Mount the Insomnia Application Data folder:

```shell
# On macOS:
docker run -v $HOME/Library/Application\ Support/Insomnia:/var/temp -it --rm kong/inso:latest run test --src /var/temp

# On Linux:
docker run -v $HOME/.config/Insomnia:/var/temp -it --rm kong/inso:latest run test --src /var/temp

# On Windows (using Docker for Windows and WSL):
docker run -v /mnt/c/Users/<your_username>/AppData/Roaming/Insomnia:/var/temp -it --rm kong/inso:latest run test --src /var/temp
```

### Mount v4 export folder

Mount the folder where you keep an Insomnia v4 export:

```shell
cd <some-folder>
docker run -it --rm -v $(pwd):/var/temp kong/inso:latest run test -w /var/temp/Insomnia_YYYY-MM-DD.json
```
