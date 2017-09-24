const { hasLabel } = require('../utils/labelUtils');
const needsInfoLabel = "Status: Needs More Info";
const hasNeedsInfoLabel = hasLabel(needsInfoLabel);
const needsInfoHash = `[//]: # (${needsInfoLabel})`; // used to identify bot responses

const commentMessage = username => `
Hi @${username}, thanks for the issue. It looks like there's not enough information for us to know how to help you.

If you're reporting a bug, please be sure to include:

1. What you did (the source code and navigation configuration)
2. The actual navigation behavior
3. What you expected to happen instead

Include as many relevant details about the environment you experienced the bug in:

| software         | version
| ---------------- | -------
| react-navigation |
| react-native     |
| node             |
| npm or yarn      |

If it's something else, please provide as much additional information as possible. Thanks!

${needsInfoHash}
`;

const didAlreadyPostNeedsInfoResponse = comments =>
  comments.some(comment => comment.body.includes(needsInfoHash));

const checkForNeedsInfo = async context => {
  const { payload, github } = context;

  if (!hasNeedsInfoLabel(payload.issue.labels)) {
    return;
  }

  const { data: comments } = await github.issues.getComments(context.issue());
  if (didAlreadyPostNeedsInfoResponse(comments)) {
    return;
  }

  return github.issues.createComment(context.issue({
    body: commentMessage(payload.issue.user.login)
  }));
};

module.exports = checkForNeedsInfo;
