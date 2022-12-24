import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const FcbNavbar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className='navbar fcb-navbar'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png"
                            width="80"
                            height="80"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ml-auto justify-content-end fcb-links" >
                            <Nav.Link href="#home" className='fcb-link'>Players</Nav.Link>
                            <Nav.Link href="#home1" className='fcb-link'>History</Nav.Link>
                            <Nav.Link href="#home2" className='fcb-link'>Contact</Nav.Link>
                            <Nav.Link href="#home3" className='fcb-link'>Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default FcbNavbar