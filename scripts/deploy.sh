#!/bin/sh

NOW=`pwd`/node_modules/.bin/now

$NOW -t $NOW_TOKEN --public -e APP_ID="$APP_ID" \
-e WEBHOOK_SECRET="$WEBHOOK_SECRET" \
-e PRIVATE_KEY="$PRIVATE_KEY" \
-e NODE_ENV=production

$NOW alias
$NOW rm --safe --yes react-navigation-bot