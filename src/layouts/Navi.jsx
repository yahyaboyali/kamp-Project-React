import React from 'react'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import CartSummary from './CartSummary'
export default function Navi() {
    return (
        <Navbar bg="dark" variant='dark' expand="sm">
            <Container fluid="md">
                <Navbar.Brand>react</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >Link</Nav.Link>
                        
                    </Nav>
                    <CartSummary />
                    <Button variant="success">Search</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
