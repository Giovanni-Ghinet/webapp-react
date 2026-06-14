
function AboutPage() {
    return (
        <main>
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9 text-center">
                            <h1 className="fw-bold mb-3 title-color font-instrument">
                                La ciurma del Cozzaro Nero
                            </h1>

                            <p className="lead description-color font-newsreader fw-bold">
                                Nessuna taverna può sopravvivere alle tempeste senza una
                                ciurma fidata. Tra cambusa, bottini e ricette maledette,
                                questi sono i pirati che mantengono viva la leggenda del
                                Cozzaro Nero.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-2">
                <div className="container">
                    <div className="row justify-content-center g-4">

                        {/* GIOVANNI PAOLO GHINET */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                            <article className="card w-100 h-100 shadow border-0 bg-dark text-white">
                                <div className="bg-dark p-3">
                                    <img
                                        src="/img/team/dio.png"
                                        alt="Giovanni Paolo Ghinet"
                                        className="card-img-top rounded"
                                    />
                                </div>

                                <div className="card-body p-4 text-center bg-dark">
                                    <h2 className="h3 card-title title-color font-pirata mb-3">
                                        Giovanni Paolo Ghinet
                                    </h2>

                                    <h3 className="h5 subtitle-green font-instrument fw-bold mb-3">
                                        Capitano del Cozzaro Nero
                                    </h3>

                                    <p className="description-color font-newsreader fw-bold mb-0">
                                        Comanda la ciurma, decide la rotta e custodisce le
                                        ricette più segrete della taverna. Nessun piatto
                                        lascia la cambusa senza la sua approvazione.
                                    </p>
                                </div>
                            </article>
                        </div>

                        {/* MAURIZIO PALMISANO */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                            <article className="card w-100 h-100 shadow border-0 bg-dark text-white">
                                <div className="bg-dark p-3">
                                    <img
                                        src="/img/team/dio.png"
                                        alt="Maurizio Palmisano"
                                        className="card-img-top rounded"
                                    />
                                </div>

                                <div className="card-body p-4 text-center bg-dark">
                                    <h2 className="h3 card-title title-color font-pirata mb-3">
                                        Maurizio Palmisano
                                    </h2>

                                    <h3 className="h5 subtitle-green font-instrument fw-bold mb-3">
                                        Quartiermastro del Bottino
                                    </h3>

                                    <p className="description-color font-newsreader fw-bold mb-0">
                                        Gestisce le provviste della taverna e controlla che
                                        ogni piatto venga preparato con gli ingredienti
                                        migliori recuperati durante le spedizioni.
                                    </p>
                                </div>
                            </article>
                        </div>

                        {/* SARA LUONGO */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                            <article className="card w-100 h-100 shadow border-0 bg-dark text-white">
                                <div className="bg-dark p-3">
                                    <img
                                        src="/img/team/dio.png"
                                        alt="Sara Luongo"
                                        className="card-img-top rounded"
                                    />
                                </div>

                                <div className="card-body p-4 text-center bg-dark">
                                    <h2 className="h3 card-title title-color font-pirata mb-3">
                                        Sara Luongo
                                    </h2>

                                    <h3 className="h5 subtitle-green font-instrument fw-bold mb-3">
                                        Custode della Cambusa
                                    </h3>

                                    <p className="description-color font-newsreader fw-bold mb-0">
                                        Sorveglia ingredienti, spezie e ricette raccolte
                                        durante i viaggi, mantenendo l’ordine tra pentole,
                                        barili e marinai affamati.
                                    </p>
                                </div>
                            </article>
                        </div>

                        {/* Marco Fiordi */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                            <article className="card w-100 h-100 shadow border-0 bg-dark text-white">
                                <div className="bg-dark p-3">
                                    <img
                                        src="/img/team/dio.png"
                                        alt="Marco Fiordi"
                                        className="card-img-top rounded"
                                    />
                                </div>

                                <div className="card-body p-4 text-center bg-dark">
                                    <h2 className="h3 card-title title-color font-pirata mb-3">
                                        Marco Fiordi
                                    </h2>

                                    <h3 className="h5 subtitle-green font-instrument fw-bold mb-3">
                                        Mastro Cozzaro di Bordo
                                    </h3>

                                    <p className="description-color font-newsreader fw-bold mb-0">
                                        Esperto nella preparazione delle cozze e conoscitore
                                        di antiche tecniche marinare. Tra fiamme, rum e spezie
                                        proibite crea piatti degni di una leggenda.
                                    </p>
                                </div>
                            </article>
                        </div>

                        {/* ALESSANDRO TIBERIA */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                            <article className="card w-100 h-100 shadow border-0 bg-dark text-white">
                                <div className="bg-dark p-3">
                                    <img
                                        src="/img/team/dio.png"
                                        alt="Alessandro Tiberia"
                                        className="card-img-top rounded"
                                    />
                                </div>

                                <div className="card-body p-4 text-center bg-dark">
                                    <h2 className="h3 card-title title-color font-pirata mb-3">
                                        Alessandro Tiberia
                                    </h2>

                                    <h3 className="h5 subtitle-green font-instrument fw-bold mb-3">
                                        Cartografo dei Sapori
                                    </h3>

                                    <p className="description-color font-newsreader fw-bold mb-0">
                                        Studia le mappe dei mari e annota ogni ingrediente
                                        scoperto durante le traversate. Dalle sue rotte
                                        nascono nuove ricette per la ciurma.
                                    </p>
                                </div>
                            </article>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;
