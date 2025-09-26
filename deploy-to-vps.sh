#!/bin/bash

# Deployment script for KreativeKommit VPS
# Usage: ./deploy-to-vps.sh [username@]87.106.67.93

set -euo pipefail

VPS_HOST="${1:-root@87.106.67.93}"
VPS_PATH="/var/www/html"

echo "Deploying to VPS: $VPS_HOST"
echo "Target directory: $VPS_PATH"

# echo "Syncing blog content..."
# rsync -avz --delete "content/" "$VPS_HOST:$VPS_PATH/content/"  # Uncomment when content/ is in use

echo "Syncing pages directory..."
echo "Syncing source code..."
echo "Syncing scripts directory..."
echo "Syncing root config and lock files..."

echo "Syncing public directory (for sitemaps and static assets)..."
rsync -avz --delete ./public/ "$VPS_HOST:$VPS_PATH/"

echo "Syncing project files (excluding build, node_modules, .git, etc.)..."
rsync -avz --delete \
  --exclude="node_modules" \
  --exclude=".next" \
  --exclude=".git" \
  --exclude=".DS_Store" \
  --exclude="*.log" \
  --exclude="README.md" \
  --exclude="deploy-to-vps.sh" \
  --exclude="*.env" \
  --exclude="*.local" \
  ./ "$VPS_HOST:$VPS_PATH/"



# Sync .env.local as .env if present
if [ -f .env.local ]; then
  echo "Transferring .env.local as .env..."
  scp .env.local "$VPS_HOST:$VPS_PATH/.env"
elif [ -f .env ]; then
  echo "Transferring .env..."
  scp .env "$VPS_HOST:$VPS_PATH/"
fi

# Sync keywords_data.json if present
if [ -f keywords_data.json ]; then
  echo "Transferring keywords_data.json..."
  scp "keywords_data.json" "$VPS_HOST:$VPS_PATH/"
fi

echo "Deployment complete."


echo "Restarting services and building on remote..."
ssh "$VPS_HOST" bash <<ENDSSH
cd $VPS_PATH || { echo 'Failed to cd to $VPS_PATH'; exit 1; }

if ! command -v pnpm >/dev/null 2>&1; then
  echo 'pnpm not found on remote. Please install pnpm.';
  exit 1;
fi

echo 'Installing dependencies with pnpm...'
pnpm install --frozen-lockfile || { echo 'pnpm install failed'; exit 2; }

echo 'Building Next.js app...'
pnpm run build || { echo 'Next.js build failed'; exit 3; }


echo 'Restarting/starting PM2 process...'
if pm2 restart kreativekommit --update-env; then
  echo 'PM2 process kreativekommit restarted.';
elif pm2 start "pnpm run start" --name kreativekommit; then
  echo 'PM2 process kreativekommit started.';
else
  echo 'PM2 failed to start/restart kreativekommit.';
  exit 4;
fi

# Ensure PM2 auto-restarts on server reboot
echo 'Configuring PM2 to auto-restart on reboot...'
pm2 startup
pm2 save

echo 'Testing nginx config...'
if nginx -t; then
  echo 'Nginx config is valid. Restarting nginx...';
  systemctl restart nginx || { echo 'Nginx restart failed'; exit 5; }
  echo 'Restarting nginx for good measure...';
  systemctl restart nginx || { echo 'Second nginx restart failed'; exit 6; }
else
  echo 'Nginx config test failed. Not restarting nginx.';
  exit 7;
fi
ENDSSH

# Final step: sync .next/ to remote (outside SSH block)
# echo 'Final sync: .next/ to remote...'
# rsync -avz .next/ "$VPS_HOST:$VPS_PATH/.next/"