import { NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme";

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header>
            <nav className="navbar navbar-expand-lg border-bottom nav-color">
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
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Menù</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
                            </li>
                            <li className="nav-item ms-2">
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={toggleTheme}
                                    aria-label="Cambia tema"
                                >
                                    {theme === 'light' ? '🌙' : '☀️'}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
