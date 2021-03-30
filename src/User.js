import React from 'react';
import UserContext from './context/user-context';

class User extends React.Component {
  state = {
    user: {}
  };

  loginUser = () => {
    this.setState({
      user: {
        id: 1,
        first: `Raul`,
        last: `Ways`,
        username: `vicious27`
      }
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={this.state.user}>
        <Header>
          <buton onClick={this.loginUser}>
            login
            </buton>
        </Header>
      </UserContext.Provider>
    )
  }
}

export default User;