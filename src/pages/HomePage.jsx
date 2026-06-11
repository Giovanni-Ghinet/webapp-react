function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="py-2">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12">
              <p className="text-uppercase fw-bold mb-2">
                Taverna piratesca di mare
              </p>

              <h1 className="display-4 fw-bold mb-4">
                Il Cozzaro Nero
              </h1>

              <p className="lead mb-4">
                Salpa verso una taverna di mare dove le cozze non sono un semplice piatto,
                ma una leggenda da assaggiare. Ricette goliardiche, sapori decisi,
                nomi maledetti e ingredienti da ciurma affamata trasformano ogni portata
                in un piccolo bottino piratesco.
              </p>

              <a href="#menu" className="btn btn-warning fw-bold">
                Scopri il menù
              </a>
            </div>

            <div className="col-12">
              <img
                src="/hero-cozzaro.png"
                alt="Tre piatti di cozze in stile piratesco"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section id="chi-siamo" className="py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h2 className="fw-bold mb-3">
                Chi siamo
              </h2>

              <p className="lead mb-0">
                Il Cozzaro Nero nasce come una taverna immaginaria per veri
                amanti del mare: un posto dove ogni piatto racconta una storia,
                tra pirati, leggende, bottini perduti e cozze cucinate in modi
                sempre diversi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COSA VENDIAMO */}
      <section id="menu" className="py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h2 className="fw-bold mb-3">
                Cosa vendiamo
              </h2>

              <p className="lead mb-4">
                Vendiamo piatti a base di cozze cucinate in tanti modi diversi:
                al vapore, gratinate, piccanti, speziate, al vino, al rum e con
                ingredienti ispirati al mondo piratesco.
              </p>

              <p className="mb-0">
                Ogni ricetta ha un nome unico, una personalità precisa e un sapore
                pensato per distinguersi dal classico ristorante di mare. Qui le
                cozze diventano protagoniste di piatti goliardici, creativi e
                maledettamente saporiti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;