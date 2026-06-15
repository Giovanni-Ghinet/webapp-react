
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
                                        src="/img/team/giova_pirata.png"
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
                                        src="/img/team/Maurizio_pirata.png"
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
                                        src="/img/team/sara_pirata.png"
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
                                        src="/img/team/marco-pirata.png"
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
                                        src="/img/team/alessandro_pirata.png"
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

            {/* LA LEGGENDA DEL COZZARO NERO */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9 text-center">
                            <h2 className="fw-bold mb-3 title-color font-instrument">
                                La leggenda del Cozzaro Nero
                            </h2>

                            <p className="lead description-color font-newsreader fw-bold mb-4">
                                Si racconta che il Cozzaro Nero sia nato durante una
                                tempesta tanto violenta da inghiottire intere flotte.
                                Cinque naufraghi trovarono rifugio in una vecchia taverna
                                abbandonata, nascosta tra gli scogli di un’isola dimenticata.
                            </p>

                            <p className="description-color font-newsreader fw-bold mb-0">
                                Con l’ultimo barile di rum e un carico di cozze recuperato
                                dal mare prepararono il primo piatto della ciurma. Da quella
                                notte, la taverna accoglie pirati, corsari e marinai affamati:
                                nessuno riparte senza aver assaggiato almeno una delle sue
                                ricette maledette.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IL CODICE DELLA CIURMA */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="card border-0 shadow bg-dark text-white">
                                <div className="card-body p-4 p-md-5">
                                    <h2 className="fw-bold mb-4 text-center title-color font-instrument">
                                        Il codice della ciurma
                                    </h2>

                                    <ul className="list-unstyled mb-0 description-color font-newsreader fw-bold">
                                        <li className="mb-3">
                                            ☠ Nessuna cozza viene lasciata indietro.
                                        </li>

                                        <li className="mb-3">
                                            ☠ Il rum si condivide con tutta la ciurma, salvo ammutinamenti.
                                        </li>

                                        <li className="mb-3">
                                            ☠ Chi critica il cuoco viene mandato a pulire la cambusa.
                                        </li>

                                        <li className="mb-3">
                                            ☠ Ogni bottino conquistato deve essere diviso tra i membri dell’equipaggio.
                                        </li>

                                        <li className="mb-0">
                                            ☠ È severamente vietato chiedere un piatto senza cozze.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DOVE TROVARCI */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center g-4">
                        <div className="col-12 col-lg-6">
                            <img
                                src="/img/taverna-cozzaro-nero.png"
                                alt="La taverna del Cozzaro Nero"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-12 col-lg-5 text-center text-lg-start">
                            <h2 className="fw-bold mb-3 title-color font-instrument">
                                Dove trovarci
                            </h2>

                            <p className="lead description-color font-newsreader fw-bold">
                                Segui il profumo delle cozze e il rumore dei boccali:
                                troverai la nostra taverna affacciata sulla Baia dei Corsari.
                            </p>

                            <p className="description-color font-newsreader fw-bold mb-2">
                                <strong className="subtitle-green me-1">
                                    Indirizzo:
                                </strong>
                                Molo del Kraken 13, Baia dei Corsari
                            </p>

                            <div className="mb-2">
                                <p className="description-color font-newsreader fw-bold mb-1">
                                    <strong className="subtitle-green me-1">
                                        Lumacofono:
                                    </strong>
                                    “+33 958 906 6882”
                                </p>

                                <p className="description-color font-newsreader fst-italic small mb-0">
                                    La lumaca risponde solo dopo il terzo “Birubirubiru”.
                                </p>
                            </div>

                            <p className="description-color font-newsreader fw-bold mb-2">
                                <strong className="subtitle-green me-1">
                                    Email:
                                </strong>
                                er_cozzaro_nero@cozza.com
                            </p>

                            <p className="description-color font-newsreader fw-bold mb-0">
                                <strong className="subtitle-green me-1">
                                    Orari:
                                </strong>
                                Dal lunedì alla domenica, dalle 18:00 fino all’ultimo barile
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;
