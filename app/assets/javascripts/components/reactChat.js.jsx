var ReactChat = React.createClass({
  getInitialState: function () {
    return {
      messages: []
    };
  },

  tick: function() {
    var that = this;
    var url = '/messages';
    var $chatWindow = $('#chat-window');
    $chatWindow[0].scrollTop = $chatWindow[0].scrollHeight;
    $.getJSON(url, function(response){
      console.log(response);
      that.setState({
        messages: response
      })
    });
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div>
        {this.state.messages.map(function(message){
          return (
            <MessageDisplay
              key={message.id}
              user_name={message.user_name}
              body={message.body}
              />
          );
        })}
      </div>
    );
  }
});
