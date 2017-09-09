import React, { Component } from 'react'
import $ from 'jquery'
import MacBook from './img/macbook.png'
import Logo from './img/logo.png'
import {  validEmail,
          containsUpperCase,
          maxLength5,
          containsLetter,
          containsDigit,
          containsSpecialCharacter } from './utils/validations'
import './App.css'


const loginValidation = [
  {validator: validEmail, msg: 'Email is invalid'},
  {validator: containsUpperCase, msg: "Email must contain at least one upper case."}
]

const passwordValidation = [
  {validator: maxLength5, msg: 'Password must be at least 5 characters.'},
  {validator: containsLetter, msg: "Password must contain at least one letter."},
  {validator: containsDigit, msg: 'Password must contain at least one digit.'},
  {validator: containsSpecialCharacter, msg: "Password must contain at least one special character."}
]

class App extends Component {
  constructor (props) {
    super(props) 

    this.state = {
      email: '',
      password: '',
      errors: [],
      valid: false,
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
    return formIsValid;          
  }

  onChange = target => {
    const { submited } = this.state  
    
    this.setState({ 
      email: this.email.value,
      password: this.password.value,
      valid: false
    })
    
    submited && setTimeout(() => this.validation(), 0)  
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
        console.log(displayData)
        alert(displayData)
      }
    })

    this.setState({ valid: true })
  }

  render() {    
    const { errors, submited } = this.state

    let style
    if (submited && errors.length < 1) {
      style = { borderColor: '#1aff66', boxShadow: '0 0 6px #33ff77' }
    } else if (submited && errors.length) {
      style = { borderColor: '#da291c', boxShadow: '0 0 6px #e80000' }
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
            {errors && errors.map((error, i) => <div key={i} className='error'>{error}</div>)}           
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
