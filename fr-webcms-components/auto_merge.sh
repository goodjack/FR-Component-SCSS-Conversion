#!/bin/bash

git config --global user.email "ci@automerger.com"
git config --global user.name "AUTO MERGER"
git checkout stage
git reset --hard  stage
git merge --no-ff --no-edit develop
git commit --amend -m "Merged Develop Branch"
git push origin stage --force
