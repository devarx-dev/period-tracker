import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>S.H.E</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home" >Home</Nav.Link>
            <Nav.Link href="/calender">Calender</Nav.Link>
            <Nav.Link href="/todo">To do list</Nav.Link>
            <Nav.Link href="/hygine">Hygine</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      <br />
      
    </>
  );
}

export default ColorSchemesExample;