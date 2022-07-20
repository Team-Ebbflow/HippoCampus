import React, { useState, useEffect } from 'react';
import './NavMenu.css';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';

export default function NavMenu() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
    <header>
        <Navbar expand="xl" style={{padding: '0.20%'}}>
              <Container>
                    <Navbar.Brand href="home">
                        <img
                            src="https://cdn.discordapp.com/attachments/989084273522909234/989084301444399114/hippocampus_logo_black.png"
                            width="100"
                            height="100"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="guide">Freshie Guide</Nav.Link>
                            <Nav.Link href="club">Chapters & Clubs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
              </Container>
        </Navbar>

        <div>
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                style={{
                    position: 'fixed',
                    padding: '1rem 2rem',
                    fontSize: '20px',
                    bottom: '40px',
                    right: '40px',
                    backgroundColor: '#f4a460',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                Scroll to Top
            </button>
        </div>
    </header>
  );
}
