import { Link } from "react-router";


const Navbar: React.FC = () => {
    return (
        <div className="navbar text-info m-0 p-0 d-flex flex-column align-items-center bg-light">
        <h1 className="mt-3 text-center fw-bold ">THE TEST OF MEMORY</h1>
        <ul className="navbar-nav d-flex flex-row justify-content-center bg-primary rounded-5">
            <li className="nav-item">
                <Link to="/" className="nav-link text-dark fs-5 fw-medium  mx-3 ">home</Link>
            </li>
             <li className="nav-item">
                <Link to="/game" className="nav-link text-dark fs-5 fw-medium mx-3 ">the memory test</Link>
            </li>
             <li className="nav-item">
                <Link to="/selection" className="nav-link text-dark fs-5 fw-medium mx-3 ">other games</Link>
            </li>
             <li className="nav-item">
                <Link to="/leaderboard" className="nav-link text-dark fs-5 fw-medium mx-3 ">leaderboards</Link>
            </li>
        </ul>
    </div>
    );
}

export default Navbar;