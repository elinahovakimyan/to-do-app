import React, { Component } from 'react';
import Checklist from 'react-icons/lib/fa/list'
import '../Style.css'

class Header extends Component {
  render() {
    return (
      <div className="heading">
        <h1> Welcome to your TO-DO list <Checklist/> </h1>
      </div>
  	)
  }
}

export default Header