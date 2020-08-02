#!/bin/bash
# Saves time to go through the lazy routine

if [ -z "$1" ]; then 
  echo ""
  echo "EXAMPLE COMMAND:   ./lazyGIT.sh 'comments for commit'"
  echo ""
else
  git add -A
  git commit -m "$1"
  git push origin FullStackOpen
  git checkout master
  git merge FullStackOpen
  git push origin master
  git checkout FullStackOpen
fi

