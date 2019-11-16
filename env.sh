#!/bin/bash

NODE_HOME="/opt/node"

PATH="./node_modules/.bin:${NODE_HOME}/bin:${PATH}"
export PATH

PS1="[Node] ${PS1}"
export PS1
