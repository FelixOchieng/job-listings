import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function Page404() {
	return (
		<Container className='mt-3'>
			<h3>Ooops! Page not Found</h3>
			<Link to='/' className='btn btn-link'>Go Back Home</Link>
		</Container>
	)
}
export default Page404