#!/bin/bash

podman run \
    --rm \
    -it \
    -v /home/akdev:/root \
    -v /home/akdev/workshop/code/poke-web/web:/home/akdev/workshop/code/poke-web/web \
    -w /home/akdev/workshop/code/poke-web/web \
    -v /home/akdev/workshop/code/poke-web/web/src:/usr/share/nginx/html \
    -p 8080:80 \
    nginx:latest
