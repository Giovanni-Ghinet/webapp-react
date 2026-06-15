import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWidget from "../styles/ChatWidget";

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
            <ChatWidget />
        </>
    );
}

export default MainLayout;