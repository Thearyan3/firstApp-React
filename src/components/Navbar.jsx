import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from './aryan.jpg';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-primary" >
      <Container fluid>
        <Link className="text-white" to="/Home"><img width={50} height={50} style={{borderRadius: '50%'}} src={logo} alt="Image" /></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px'}} navbarScroll>
            <Link className="text-white" to="/Home">Home</Link>
            <Link className="text-white" to="/About">About</Link>
            <Link className="text-white" to="/Contact">Contact</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;