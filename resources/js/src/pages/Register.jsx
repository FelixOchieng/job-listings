import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { FaUserPlus } from 'react-icons/fa'

function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const { data } = await axios.post('/register', {
			name,
			email,
			password
		})

		navigate('/login')
	}

	return (
		<Container className='mt-3'>
			<Row className='justify-content-center'>
				<Col md={5}>
					<Card>
						<Card.Header><FaUserPlus /> Register</Card.Header>
						<Card.Body>
							<Form onSubmit={handleSubmit}>
								<Form.Group className="mb-3">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter name e.g John Doe"
										onChange={e => setName(e.target.value)}
									/>
								</Form.Group>

								<Form.Group className="mb-3">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										placeholder="Enter email e.g name@example.com"
										onChange={e => setEmail(e.target.value)}
									/>
								</Form.Group>

								<Form.Group className="mb-3">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Enter password"
										onChange={e => setPassword(e.target.value)}
									/>
								</Form.Group>

								<Button variant="primary" type="submit">
									Sign Up
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}
export default Register