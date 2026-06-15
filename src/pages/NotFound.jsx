
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main>
            <section className="not-found-section py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center g-5">

                        {/* IMMAGINE A SINISTRA */}
                        <div className="col-12 col-md-8 col-lg-5">
                            <div className="not-found-image-wrapper">
                                <img
                                    src="/img/samuel_pirata.png"
                                    alt="Pirata che segnala che la pagina non è stata trovata"
                                    className="img-fluid not-found-image"
                                />
                            </div>

                        </div>

                        {/* TESTI A DESTRA */}
                        <div className="col-12 col-lg-6 text-center">
                            <p className="not-found-number title-color font-pirata mb-0">
                                404
                            </p>

                            <h1 className="title-color font-pirata fw-bold mb-3">
                                La pagina non esiste. PUPPA.
                            </h1>

                            <p className="lead description-color font-newsreader fw-bold mb-3">
                                La pagina che cercavi è affondata insieme al bottino.
                            </p>

                            <p className="description-color font-newsreader fw-bold mb-4">
                                Il nostro cartografo sostiene che non sia mai esistita.
                                Il capitano, invece, sostiene che sia colpa tua.
                            </p>

                            <p className="title-color font-instrument fw-bold fst-italic mb-4">
                                Ma cosa mi combini, Nedo?
                            </p>

                            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                                <Link
                                    to="/"
                                    className="btn principal-color font-instrument fw-bold"
                                >
                                    Torna alla taverna
                                </Link>

                                <Link
                                    to="/products"
                                    className="btn btn-dark subtitle-green font-instrument fw-bold"
                                >
                                    Cerca un altro bottino
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default NotFound;

