import { Link } from "react-router"
export default function Notfound(){
    return(
        <>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go to Home</Link>
        </>
    )
}