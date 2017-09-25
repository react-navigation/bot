#!/bin/sh

NOW=`pwd`/node_modules/.bin/now

URL=$($NOW -t $NOW_TOKEN --force --public -e APP_ID="$APP_ID" \
-e WEBHOOK_SECRET="$WEBHOOK_SECRET" \
-e PRIVATE_KEY="$PRIVATE_KEY" \
-e NODE_ENV=production && sleep 5)
$NOW -t ${NOW_TOKEN} alias set ${URL} react-navigation-bot.now.sh