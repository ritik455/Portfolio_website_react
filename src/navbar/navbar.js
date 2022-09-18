import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">RK</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#intro_section">About</Nav.Link>
                <Nav.Link href="#education_section">Education</Nav.Link>
                <Nav.Link href="#skills_section">Skills</Nav.Link>
                <Nav.Link href="#projects_section">Projects</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
