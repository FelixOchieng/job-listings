import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Navigation() {
	return (
		<Navbar bg="light" expand="lg" variant="light" className='shadow'>
			<Container>
				<Navbar.Brand as={Link} to='/' className='font-weight-bold'>LaraGigs</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to='/find-jobs' href="#home">Find Jobs</Nav.Link>
						<Nav.Link as={Link} to='/company-reviews' href="#link">Company Reviews</Nav.Link>
						<Nav.Link as={Link} to='/find-salaries' href="#link">Find Salaries</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						<Nav.Link as={Link} to='/login' href="#home">Login</Nav.Link>
						<Nav.Link as={Link} to='/register' href="#link">Register</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
export default Navigation