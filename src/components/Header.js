import { Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import '../../static/components/header.css'

export default function Header() {
  return (
    <Navbar 
      // bg='light' 
      // variant='light'
      className='navbar'
    >
      <Navbar.Brand href="#home">
        {/* <img
          src={require("../images/gavel.png")}
          width="30"
          height="30"
        /> */}
      </Navbar.Brand>
      <Nav>
        <Nav.Link className='nav-link' href="/">Home</Nav.Link>
        <Nav.Link className='nav-link' href="/inline">Inline CSS</Nav.Link>
        <Nav.Link className='nav-link' href="/object">Js Object</Nav.Link>
        <Nav.Link className='nav-link' href="/hybrid">Hybrid</Nav.Link>
        <Nav.Link className='nav-link' href="/css">Pure CSS</Nav.Link>
      </Nav>
    </Navbar>
  )
}