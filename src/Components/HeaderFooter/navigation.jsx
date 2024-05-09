import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navigation.css";


function Navigation(){

    const[query, setQuery] = useState("");
    //to do search
    //if searchbar = null then do normal display     i.e - ibalhin ang hinimo na display sa homepage ngari
    //if current user is at home, display medicine
    //if current user is at reviews, display reviews

    const handleclick1 = () => {
        console.log("home");
    }

    const handleclick2 = () => {
        console.log("Reviews");
    }

    const handleclick3 = () => {
        console.log("About");
    }

    const handleclick4 = () => {
        console.log("Services");
    }

    const handleclick5 = () => {
        console.log("Logo");
    }




    return (
        <div className="navContainer">
          <Navbar expand="lg">
          <Container fluid>
            <img src="src/assets/medicine-symbol-svgrepo-com.svg" class="h-16" alt="MedXpert Logo" />
            <Navbar.Brand className="navBrand" style={{ color: 'white' }}>MedXpert</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1" className="navLinks" style={{ color: 'white' }} onClick={handleclick1}>Home</Nav.Link>
                <Nav.Link href="#action2" className="navLinks" style={{ color: 'white' }} onClick={handleclick2}>Reviews</Nav.Link>
                <Nav.Link href="#action3" className="navLinks" style={{ color: 'white' }} onClick={handleclick3}>About</Nav.Link>
                <Nav.Link href="#action4" className="navLinks" style={{ color: 'white' }} onClick={handleclick4}>Contact</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
      )
}

export default Navigation;