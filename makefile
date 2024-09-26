build:
	@clear
	DOCKER_BUILDKIT=1 docker build --tag insomnia-docs:latest .

run:
	@docker run --rm -it -p 4000:4000 -v ${PWD}/docs:/docs insomnia-docs:latest

help:
	@echo -e "build - build insomnia-docs container image."
	@echo -e "run - Start insomnia-docs container image."