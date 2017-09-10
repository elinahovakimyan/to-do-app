import React, { Component } from 'react'
import $ from 'jquery'
import { notification } from 'antd';
import MacBook from './img/macbook.png'
import Logo from './img/logo.png'
import {  loginValidation, passwordValidation } from './utils/validations'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props) 

    this.state = {
      email: '',
      password: '',
      errors: [],      
      submited: false
    }
  }

  validation = () => {
    let { password, email } = this.state;    
    let formIsValid = true;
    let errors = [];

    loginValidation.forEach(validation => {
      if (!validation.validator(email)) {
        errors.push(validation.msg)
        formIsValid = false;
      }
    });

    passwordValidation.forEach(validation => {      
      if (!validation.validator(password)) {
        errors.push(validation.msg)
        formIsValid = false;
      }
    });

    this.setState({errors: errors});
    errors.map(error => {
      return notification.error({
        message: 'ERROR',
        description: error,
        duration: 6
      })
    })
    return formIsValid;          
  }

  onChange = target => {
    this.setState({ 
      email: this.email.value,
      password: this.password.value,      
      submited: false
    })      
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    
    if (!this.validation()) {
      this.setState({ submited: true })      
      return 
    }    

    $.ajax({
      url: 'https://reqres.in/api/login',
      type: 'POST',
      data: {
          email,
          password
      },
      success: response => {
        let displayData = JSON.stringify({response}, null, 2)
        notification.success({
          message: 'SUCCESS',
          description: displayData,
          duration: 5
        })
        console.log(displayData)       
      }
    })

    this.setState({ errors: [], submited: true })
  }

  render() {    
    const { errors, submited } = this.state    

    let style
    if (submited && !errors.length) {
      style = { borderColor: '#1aff66', boxShadow: '0 0 6px #33ff77' }
    }

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
              type='text'
              onChange={this.onChange}
              style={style}
              ref={node => this.email = node} />
            <input
              className='password'
              placeholder='Password'
              type='password'
              onChange={this.onChange}
              style={style} 
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
