import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event){
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/pharmacies/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            if(responseJson.message === 'Auth failed') {
              console.log('Wrong Login!');
            } else {
              console.log(responseJson);
              // this.setState({
              //   token: responseJson.token
              // });
              // this.loginSucess();
            }
            return responseJson;
          })
          .catch((error) => {
            console.log('duuuude');
          });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" value={this.state.email} onChange={this.handleEmail} />
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePassword} />
        </label>
        <input type="submit" value="Submit" />
          <li>
            <Link to={{ pathname: '/dashboard', state: { email: this.state.email} }}>
              dashboard
            </Link>
          </li>
      </form>
    );
  }
}

export default HomePage;
