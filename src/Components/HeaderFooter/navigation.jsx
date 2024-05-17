import { useState } from "react";
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../utility/utility";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navigation.css";

function Navigation() {
    const navigate = useNavigate();

    const handleclick1 = () => {
        console.log("home");
        navigate('/homepage');
    }

    const handleclick2 = () => {
        console.log("Reviews");
        navigate('/reviews');
    }

    const handleclick3 = () => {
        console.log("About");
        navigate('/about');
    }

    const handleclick4 = () => {
        console.log("Services");
        navigate('/service');
    }

    const handleclick5 = () => {
        console.log("Admin");
        navigate('/adminDashboard');
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <div className="navContainer">
            <Navbar expand="lg">
                <Container fluid>
                    <img src="src/assets/medicine-symbol-svgrepo-com.svg" className="h-16" alt="MedXpert Logo" />
                    <Navbar.Brand className="navBrand" style={{ color: 'white' }}>MedXpert</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'white' }} />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1" className="navLinks" style={{ color: 'white' }} onClick={handleclick1}>Home</Nav.Link>
                            <Nav.Link href="#action2" className="navLinks" style={{ color: 'white' }} onClick={handleclick2}>Reviews</Nav.Link>
                            <Nav.Link href="#action3" className="navLinks" style={{ color: 'white' }} onClick={handleclick3}>About</Nav.Link>
                            <Nav.Link href="#action4" className="navLinks" style={{ color: 'white' }} onClick={handleclick4}>Contact</Nav.Link>
                            <Nav.Link href="#action5" className="navLinks" style={{ color: 'white' }} onClick={handleclick5}>Admin</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#action6" className="navLinks" style={{ color: 'white' }} onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;
