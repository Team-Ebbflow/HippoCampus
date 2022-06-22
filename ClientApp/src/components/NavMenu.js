import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

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
                            <NavDropdown title="Resourse" id="basic-nav-dropdown">
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
