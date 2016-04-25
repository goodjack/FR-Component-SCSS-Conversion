#!/bin/bash
git config --global user.email "kenichi.shibata@fastretailing.com"
git config --global user.name "fr-kshibata"
git stash
git remote -v
git checkout -b lib
git pull origin lib
git branch -av
echo "node_modules" > .gitignore
echo "coverage" >> .gitignore
echo "*.log" >> .gitignore
npm run build
git add .
git commit -m "published lib"
git push origin lib --force
