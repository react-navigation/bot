# react-navigation-bot

[![CircleCI](https://circleci.com/gh/matthamil/react-navigation-bot/tree/master.svg?style=svg)](https://circleci.com/gh/matthamil/react-navigation-bot/tree/master)

A GitHub App built with [probot](https://github.com/probot/probot) that helps maintain the [react-navigation](https://github.com/react-community/react-navigation) repo.

## Setup

[localtunnel](https://github.com/localtunnel/localtunnel) is recommended to run this bot locally. [Register a new GitHub App](https://github.com/settings/apps) and set the homepage URL to https://example.com (or anything for development), set the Webhook URL to your localtunnel URL, and add a webhook secret called `development`. Create a new GitHub repo and add the App to the repo. Add the localtunnel URL as a Webhook URL to the repo. 

Create a .env file in the root directory with the following:

```shell
# The ID of your GitHub App
APP_ID=1000 # your app ID
WEBHOOK_SECRET=development # or your secret

# Uncomment this to get verbose logging
# LOG_LEVEL=trace # or `info` to show less
```

Run the bot.

```
# Install dependencies
npm install

# Run the bot
npm start
```

See the official [Probot](https://github.com/probot/probot) documentation for more.

## Features

This bot auto-responds to the following:

1. Issue Label *Status: Needs More Info*
1. Issue Label *Type: Question* 

