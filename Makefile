all:
	webpack --progress --show-modules

deploy: all
	parse deploy
