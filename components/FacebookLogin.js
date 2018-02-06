import React from 'react';
import FacebookLogin from 'react-facebook-login';
 
class MyComponent extends React.Component {
  constructor(props) {
      super(props);
 
      this.response = this.response.bind(this);
  };
 
  response(response) {
    // Send the token to the server and link the account 
    console.log(response);
  };
 
  render() {
    return (
      <FacebookLogin
        appId="1099597531133376"
        component={({onClick}) => {
            return <button onClick={onClick}>Login with facebook</button>
        }}
        fields="name,email,picture"
        callback={this.response}
      />
    )
  }
}
 
export default MyComponent;