import React, { useState } from 'react';
import './NavMenu.css';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';

export default function NavMenu() {

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
            <Navbar expand="lg" style={{ backgroundColor: 'orange' }} >
                <Container >
                    <Navbar.Brand href="#home">HippoCampusUON</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#">Freshie Guide</Nav.Link>
                            <Nav.Link href="#">Events</Nav.Link>
                            <Nav.Link href="#">Chapters & Clubs</Nav.Link>
                            <NavDropdown title="Resources" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Link 1</NavDropdown.Item>
                                <NavDropdown.Item href="#">Link 2</NavDropdown.Item>
                                <NavDropdown.Item href="#">Link 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </header>
    );
  }
}
