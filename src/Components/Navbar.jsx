import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>ESPRIT Events</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active text-decoration-underline" : "nav-link"
            }
          >
            Home
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
