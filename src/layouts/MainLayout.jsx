import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
    return (
        <>
            <Header />
            <div>
                <main className="container  my-4">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;