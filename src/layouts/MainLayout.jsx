import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
    return (
        <>
            <Header />
            <div className="home-page-bg">
                <main className="">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;