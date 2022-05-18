import ReactDOM from "react-dom"
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom"
import Home from './pages/Home'
import Navigation from './components/Navigation'
import FindJobs from "./pages/FindJobs"
import CompanyReviews from "./pages/CompanyReviews"
import FindSalaries from "./pages/FindSalaries"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Page404 from "./pages/Page404"

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/find-jobs' element={<FindJobs />} />
				<Route path='/company-reviews' element={<CompanyReviews />} />
				<Route path='/find-salaries' element={<FindSalaries />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/*' element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App

if (document.getElementById('root')) {
	ReactDOM.render(<App />, document.getElementById('root'))
}