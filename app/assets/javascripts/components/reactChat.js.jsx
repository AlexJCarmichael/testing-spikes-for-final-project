var ReactChat = React.createClass({
  getInitialState: function () {
    return {
      messages: []
    };
  },

  tick: function() {
    var that = this;
    var url = document.URL;
    $.getJSON(url, function(response){
      that.setState({
        messages: response.messages
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
      {this.state.messages.map(function(comment){
        return (
          <MessageDisplay
            key={message.id}
            user_name={current_user.email}
            text={message.text}
            />
        );
      })}
      </div>
    );
  }
});
