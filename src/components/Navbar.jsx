import { Link } from "react-router";

function Navbar() {
    return (
        <>
            <nav className="navbar md:navbar-expand bg-1">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        E-Commerce-App
                    </Link>

                    <dialog className="drawer drawer-end" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
                        <div className="drawer-body ms-auto md:mb-0">
                            <ul className="nav navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </dialog>
                </div>
            </nav>
        </>
    );
}

export default Navbar;