#!/bin/bash

git config --global user.email "ci@automerger.com"
git config --global user.name "AUTO MERGER"
git checkout stage
git reset --hard develop
git push origin stage --force
