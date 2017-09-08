import React, { Component } from 'react';
import $ from 'jquery'
import MacBook from './img/macbook.png'
import Logo from './img/logo.png'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props) 

    this.state = {
      data: {}
    }
  }

  onSubmit = e => {
    e.preventDefault()

    const email = this.email.value
    const password = this.password.value

    $.ajax({
      url: 'https://reqres.in/api/login',
      type: 'POST',
      data: {
          email,
          password
      },
      success: response => {
        let displayData = `Token:\n${JSON.stringify({response}, null, 2)}`; 
        console.log(displayData)
        alert(displayData)
      }
    })
  }
  render() {
    return (
      <div className='Login'>
        <div className='Login-left-side'>
          <div className='Login-logo'>
            <img src={Logo} alt='logo' />
          </div>
          <form className='Login-inputs' onSubmit={this.onSubmit}>
            <input 
              className='email'
              placeholder='Username'
              type='email'
              ref={node => this.email = node} />
            <input
              className='password'
              placeholder='Password'
              type='password' 
              ref={node => this.password = node} />
            <div className='Login-password-forgot'>
              <a href=''>Forgot password?</a>
            </div>
            <div className='Login-button'>
              <button type='submit'>LOGIN</button>
            </div>            
          </form>          
        </div>
        <div className='Login-right-side' >
          <div className='Login-macbook'>
            <img src={MacBook} alt='macbook' />
          </div>
        </div>       
      </div>
    );
  }
}


export default App;
