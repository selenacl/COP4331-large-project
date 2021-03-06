import React , { Component } from 'react';
import Background from '../../background.png';
import './Login.css';
import axios from 'axios';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: ''
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(e) {
    this.setState({
      emailInput: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      passwordInput: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    // console.log(`Submitted`);
    // console.log(`Email: ${this.state.emailInput}`);
    // console.log(`Password: ${this.state.passwordInput}`);

    const newUser = {
      emailInput: this.state.emailInput,
      passwordInput: this.state.passwordInput
    };

    axios.post('http://localhost:3001/users', newUser).then(res => console.log(res.data));

    this.setState({
            emailInput: '',
            passwordInput: '',
    });
  }
  render() {
    return (
      <React.Fragment>
        <div style={login}>

          <div class="loginContainer">
            <div class="loginBox2"></div>
            <div class="loginBox1">
              <h1 id="greet"><b>Good to see you<br />again!<br /><br /></b></h1>

              <form name="login" action="" onSubmit={this.onSubmit}>
                <label class="label">
                  <span class="field"><b>Email</b></span>
                  <input type="email" name="email" placeholder="Your email address" maxlength="30" value={this.state.emailInput} onChange={this.onChangeEmail}/>
                </label>

                <div class="label">
                  <span class="field"><b>Password</b></span>
                  <input type="password" name="password" class="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" maxlength="30" value={this.state.passwordInput} onChange={this.onChangePassword}/>

                  <a href="#" class="loginLinks"><br />Forgot password?<br /></a>
                  <input type="submit" style={loginBtn} value="Sign In" />
                  <a href="#" class="loginLinks"><br />New to our Service?<br />Sign up!<br /></a>
                </div>

              </form>




              {/*<p class="loginForm"><b>Email address</b></p>
              <input class="loginInput" type="email" id="email" placeholder="Your email address" maxlength="30" />
              <p class="loginForm"><b>Password</b></p>
              <input class="loginInput" type="password" id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
              <a href="#" class="loginLinks"><br />Forgot password?Click here.<br /></a>
              <button type="button" style={loginBtn}>Sign In</button>
              <a href="#" class="loginLinks"><br />New to our Service?<br /></a>*/}
            </div>
            <div class="loginBox1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Start;

const login = {
  backgroundColor: '#EEEEEE',
  width: "100%",
  color: "#f00fff",
  fontSize: "50px",
  marginLeft: "auto",
  marginRight: "auto",
   height: "100%",

  backgroundSize: "cover"
}

const loginBtn = {
    background: '#AAAAAA',
      color: '#FFFFFF',
      width:' 115px',
      height:'35px',
      borderRadius: '50px',
      fontSize: '100%',
      border: 'none',
      cursor: 'pointer'
}
