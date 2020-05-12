module.exports = function (context, updatedMessages) {
    context.bindings.signalRMessages =
    updatedMessages.map(message => ({
        target: 'messageUpdated',
        arguments: [message]
      }));
    context.done();
  };