#!/bin/bash

# Exit if any command fails
set -e

echo "Starting build and deployment process..."

# Build the React app
npm run build

# Create or switch to the 'build' branch
git branch -D build 2>/dev/null || true
git checkout -b build

# Remove all files except the build folder
git rm -rf . || true

# Force move everything from the build folder (including hidden files and directories) to the current directory
shopt -s dotglob  # Include hidden files in wildcard operations
mv build/* . || true
shopt -u dotglob  # Reset dotglob option to avoid affecting future commands

# Now move the contents of any hidden directories (like `static`) separately using `find`
find build -mindepth 1 -exec mv -t . {} + || true

# Remove the empty build folder
rm -rf build || true

# Update or create a .gitignore file
if [ -f .gitignore ]; then
  # Append entries if not already present
  grep -qxF "/node_modules" .gitignore || echo "/node_modules" >> .gitignore
  grep -qxF "deploy.sh" .gitignore || echo "deploy.sh" >> .gitignore
else
  # Create the .gitignore file with both entries
  echo "/node_modules" > .gitignore
  echo "deploy.sh" >> .gitignore
fi

# Commit and push the changes
git add .
git commit -m "Updated build files"
git push -f origin build

# Switch back to the main branch
git checkout main

echo "Build and deployment process complete!"






# to run: ./deploy.sh