import { Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import { IoIosHome } from "react-icons/io";

export default function Header({ fontColor, className = 'navbar', style = {} }) {
  const color =  { color: fontColor };
  return (
    <Navbar 
      className={className}
      style={style}
    >
      <Navbar.Brand href="/">
        <IoIosHome 
          color={fontColor}
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Link style={color} href="/">Global</Nav.Link>
        <Nav.Link style={color} href="/css">Pure CSS</Nav.Link>
        <Nav.Link style={color} href="/hybrid">Hybrid</Nav.Link>
        <Nav.Link style={color} href="/inline">Inline CSS</Nav.Link>
        <Nav.Link style={color} href="/object">Js Object</Nav.Link>
      </Nav>
    </Navbar>
  )
}