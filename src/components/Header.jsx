import { NavLink } from "react-router-dom";


function Header() {


    return (
        <header className="fixed-top custom-header">
            <nav className="navbar navbar-expand-lg border-bottom principal-color custom-navbar">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <NavLink className="navbar-brand fw-semibold" to="/">
                            <img className="img-logo" src="/img/img_cozzaro_nero_logo.png" alt="/home" />
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mainNav"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <NavLink className="nav-link font-size font-instrument" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link font-size font-instrument" to="/products">Menù</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link font-size font-instrument" to="/reviews">Recensioni</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
