container_version := latest
container_name := insomnia-docs

build:
	@clear
	DOCKER_BUILDKIT=1 docker build --tag ${container_name}:${container_version} .

run:
	@docker run -it --rm -p 4000:4000 insomnia-docs:latest

help:
	@echo -e "build - build insomnia-docs container image."
	@echo -e "run - Start insomnia-docs container image."