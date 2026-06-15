import { NavLink } from "react-router-dom";
import { GiSmallFishingSailboat } from "react-icons/gi";
import { GiTreasureMap } from "react-icons/gi";
import { GiOpenTreasureChest } from "react-icons/gi";

function Header() {


    return (
        <header className="sticky-top custom-header">
            <nav className="navbar navbar-expand-lg border-bottom principal-color custom-navbar">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <NavLink className="navbar-brand fw-semibold">
                            <img className="img-logo img-fluid" src="/img/img_cozzaro_nero_logo.png" />
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
                            <GiSmallFishingSailboat size={50} className="color-icon" />
                            <li className="nav-item">
                                <NavLink className="nav-link font-size font-instrument" to="/">Home </NavLink>
                            </li>
                            <GiTreasureMap size={40} className="color-icon" />
                            <li className="nav-item">
                                <NavLink className="nav-link font-size font-instrument" to="/products">Menù</NavLink>
                            </li>
                            <GiOpenTreasureChest size={40} className="color-icon" />
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
