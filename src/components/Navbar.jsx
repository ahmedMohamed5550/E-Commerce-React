function Navbar() {
    return (
        <>
            <nav className="navbar md:navbar-expand bg-1">
                <div className="container">
                    <a className="navbar-brand" href="/#">E-Commerce-App</a>

                    <dialog className="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
                        <div className="drawer-body ms-auto md:mb-0">
                            <ul className="nav navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">About</a>
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