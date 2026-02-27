import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export function NavigationBar() {
  return (
    <Navbar bg="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-primary">
          🎫 ESPRIT Events
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) => isActive ? 'nav-link-active' : ''}
            >
              Accueil
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/events"
              className={({ isActive }) => isActive ? 'nav-link-active' : ''}
            >
              Événements
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/add-event"
              className={({ isActive }) => isActive ? 'nav-link-active' : ''}
            >
              Add new Event
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) => isActive ? 'nav-link-active' : ''}
            >
              À propos
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) => isActive ? 'nav-link-active' : ''}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}