#!/bin/bash

# Create necessary directories if they don't exist
mkdir -p apps/web/app
mkdir -p apps/web/public

# Move app directory content to apps/web/app
echo "Moving app directory to apps/web/app..."
cp -r app/* apps/web/app/

# Move public directory content to apps/web/public
echo "Moving public directory to apps/web/public..."
cp -r public/* apps/web/public/

# Copy config files
echo "Copying configuration files..."
cp next-env.d.ts apps/web/
cp .gitignore apps/web/

echo "Web files have been copied to the new monorepo structure."
echo "The original files remain untouched for safety."
echo ""
echo "Once you've verified everything works, you can start using the monorepo structure." 