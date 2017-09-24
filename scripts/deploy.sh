#!/bin/sh

now --public -e APP_ID="$APP_ID" \
-e WEBHOOK_SECRET="$WEBHOOK_SECRET" \
-e PRIVATE_KEY="$PRIVATE_KEY" \
-e NODE_ENV=production

now alias
now rm --safe --yes react-navigation-bot