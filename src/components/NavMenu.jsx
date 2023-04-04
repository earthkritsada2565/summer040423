
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import { FaHome } from "react-icons/fa"
import { NavLink, Link } from 'react-router-dom';

function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><FaHome size={50} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link ><NavLink to={'/'}> Home </NavLink></Nav.Link>
            <Nav.Link ><NavLink to={'categorie'}>Categories</NavLink></Nav.Link>
            <Nav.Link ><NavLink to={'product'}>Product</NavLink> </Nav.Link>
            <Nav.Link><NavLink to={'order'}>Order</NavLink></Nav.Link>



          </Nav>
          <Nav className='justify-contain-end'>
            <Nav.Link as={NavLink} to={'about'}>About</Nav.Link>
            <Nav.Link as={NavLink} to={'login'}>Login</Nav.Link>
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;