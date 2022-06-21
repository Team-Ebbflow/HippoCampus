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
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">HippoCampusUON</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Freshie Guide</Nav.Link>
                            <Nav.Link href="#link">Events</Nav.Link>
                            <Nav.Link href="#link">Chapters & Clubs</Nav.Link>
                            <NavDropdown title="Resourse" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Link 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Link 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Link 3</NavDropdown.Item>
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
