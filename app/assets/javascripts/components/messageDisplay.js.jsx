var MessageDisplay = React.createClass({
  render: function(){
    return (
      <div>
      <strong>  {this.props.user_name}  </strong> |
            <p>
              {this.props.body}
            </p>
      </div>
    );
  }
});
