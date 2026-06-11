function Footer() {
    return (
        <footer className="border-top py-3 mt-auto footer-color">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 text-md-start">
                        <h5> Links </h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Contacts</a></li>
                            <li><a href="/Review">Review</a></li>
                        </ul>

                        <h5> Contacts </h5>
                        <ul className="list-unstyled">
                            <li><a href="/">+33 958 906 6882 </a></li>
                            <li><a href="/">er_cozzaro_nero@cozza.com</a></li>
                        </ul>
                    </div>

                    <div className="col-md-6 text-md-end">
                        <h5>Social Network</h5>
                        <ul className="list-unstyled">
                            <li>Instagram <a href="/">@erCozzaNera</a></li>
                            <li>TikTok <a href="/">@neraCozza</a></li>
                            <li>Facebook <a href="/">Cozza nera</a></li>
                        </ul>

                        <h5>Legal information</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Privacy Cookie</a></li>
                            <li><a href="/">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container text-center text-secondary small">
                &copy; {new Date().getFullYear()} Cozzaro Nero
            </div>
        </footer>
    );
}

export default Footer;
