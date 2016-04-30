var MessagesSender = React.createClass({
  getInitialState: function (){
    return {
      messageText: ''
    };
  },

  handleChange: function (event) {
    this.setState({
      messageText: event.target.value
    });
  },

  handlePostMessage: function () {
    var that = this;
    $.ajax({
      method: "POST",
      url: "/messages.json",
      data: {
        comment: {
          text: this.state.messageText,
          user_id: this.current_user.id
        }
      }
    }).done(function(response) {
      that.setState({
        messageText: ''
      });
    });
  },

  render: function(){
    return (
      <div>
        <textarea row={40} cols={40}
                placeholder="Send a message"
                value{this.state.messageText}
                onChange={this.handleChange}/>
      </div>
    );
  }
});
