import React, { createContext } from "react";
import Get from '../Requests/Get';
import Delete from '../Requests/Delete';

export const UserContext = createContext();

class UserContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      loginModel: false,
      userId: ''
    }
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.closeLogin = this.closeLogin.bind(this);
  }

  componentDidMount() {
    Get('/users/my')
      .then((res) => {
        this.login(res.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logout = () => {
    this.setState({ isAuth: false, userId: '' });
    Delete('/users/session')
      .then((res) => {
        console.log("User Logged out");
      })
      .catch((err) => {
        console.log("Something went wrong");
      })
  };

  login = (id) => {
    this.setState({ isAuth: true, userId: id });
  }

  openLogin = () => {
    this.setState({ loginModel: true });
  }

  closeLogin = () => {
    this.setState({ loginModel: false });
  }

  render() {
    return (
      <UserContext.Provider value={{
        isAuth: this.state.isAuth,
        userId: this.state.userId,
        loginModel: this.state.loginModel,
        login: this.login,
        logout: this.logout,
        openLogin: this.openLogin,
        closeLogin: this.closeLogin
      }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
};

export default UserContextProvider;