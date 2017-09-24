const { hasLabel } = require('../utils/labelUtils');
const questionLabel = 'Type: Question';
const hasQuestionLabel = hasLabel(questionLabel);
const questionHash = `[//]: # (${questionLabel})`; // used to identify bot responses

const questionCommentMessage = username => `
Hi @${username}!

It looks like this question is better suited for [Stack Overflow](https://stackoverflow.com/search?q=react-navigation). I also encourage you to join the [Reactiflux](https://www.reactiflux.com/) community on Discord. There are React Native and React Navigation channels with helpful people who might be able to answer your question. I would also like to mention that there is a collection of links and tutorials for React Navigation [here](https://github.com/react-navigation/react-navigation-links).

If you believe that you are experiencing a bug or have a feature request, please open a new Issue following the [Issue Template](https://github.com/react-community/react-navigation/blob/master/.github/ISSUE_TEMPLATE.md) or submit a PR.

${questionHash}
`;

const didAlreadyPostQuestionResponse = comments =>
  comments.some(comment => comment.body.includes(questionHash));

const checkForQuestion = async context => {
  const { payload, github } = context;

  if (!hasQuestionLabel(payload.issue.labels)) {
    return;
  }

  const { data: comments } = await github.issues.getComments(context.issue());
  if (didAlreadyPostQuestionResponse(comments)) {
    return;
  }

  return github.issues.createComment(context.issue({
    body: questionCommentMessage(payload.issue.user.login)
  }));
};

module.exports = checkForQuestion;