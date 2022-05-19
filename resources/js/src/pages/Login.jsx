import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const {data} = await axios.post('/login', {
			email,
			password
		})

		navigate('/')
	}


	return (
		<Container className='mt-3'>
			<Row className='justify-content-center'>
				<Col md={5}>
					<Card>
						<Card.Header><FaUser /> Login</Card.Header>
						<Card.Body>
							<Form onSubmit={handleSubmit}>
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
									Sign In
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}
export default Login