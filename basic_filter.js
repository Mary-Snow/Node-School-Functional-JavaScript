   function getShortMessages(messages) {
    return messages.map(function(message){
      return message.message;
    }).filter(function(mes){
        return mes.length < 50;
    })
    }

    module.exports = getShortMessages