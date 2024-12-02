import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brandLogo from '../../assets/images/logo.png';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-transparent navbar">
      <Container>
        <Navbar.Brand href="#home"><img src={brandLogo} alt="logo" className="brand-logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link  href="#memes">About me</Nav.Link>
            <Nav.Link href="#deets">Services</Nav.Link>
            <Nav.Link href="#deets">Projects</Nav.Link>
            <Nav.Link  href="#memes">Testimonials</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
            <Nav><button className="button-cv">Download CV</button></Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default CollapsibleExample;