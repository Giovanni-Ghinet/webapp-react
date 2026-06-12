function Footer() {
    return (
        <footer className="border-top py-3 mt-auto principal-color">
            <div className="container text-md-center text-sm-center text-xs-center">
                <div className="row">
                    <div className="col-4">
                        <h5 className="font-size font-instrument"> Links </h5>
                        <ul className="list-unstyled">
                            <li><a className="footer-link" href="/">Home</a></li>
                            <li><a className="footer-link" href="/">Contatti</a></li>
                            <li><a className="footer-link" href="/Review">Recensioni</a></li>
                        </ul>
                        <h5 className="font-size font-instrument" > Contatti </h5>
                        <ul className="list-unstyled">
                            <li><a className="footer-link" href="/">+33 958 906 6882 </a></li>
                            <li><a className="footer-link" href="/">er_cozzaro_nero@cozza.com</a></li>
                        </ul>
                    </div>

                    <div className="container-img-footer col-4">
                        <img className="img-logo-footer" src="/img/img_cozzaro_nero_logo.png" alt="/home" />
                    </div>

                    <div className="col-4">
                        <h5 className="font-size font-instrument" >Social Network</h5>
                        <ul className="list-unstyled">
                            <li>Instagram <a className="footer-link" href="/">@erCozzaNera</a></li>
                            <li>TikTok <a className="footer-link" href="/">@neraCozza</a></li>
                            <li>Facebook <a className="footer-link" href="/">Cozza nera</a></li>
                        </ul>
                        <h5 className="font-size font-instrument" >Informazioni Legali</h5>
                        <ul className="list-unstyled">
                            <li><a className="footer-link" href="/">politiche di privacy</a></li>
                            <li><a className="footer-link" href="/">Privacy Cookie</a></li>
                            <li><a className="footer-link" href="/">Termini di Servizio</a></li>
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



