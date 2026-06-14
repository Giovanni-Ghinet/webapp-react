import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [latestProducts, setLatestProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("http://localhost:3000/products?latest=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Errore nella richiesta: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        if (!data.result) {
          throw new Error("Prodotti non disponibili");
        }
        console.log(data.result[0]);
        setLatestProducts(data.result);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="py-2">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12">
              <div className="container-titolo">
                <h1 className="display-4 fw-bold mb-4 font-pirata title-color titolo-principale">
                  IL Cozzaro Nero
                </h1>
              </div>

              <p className="lead mb-4 fw-bold subtitle-color font-newsreader f-14">
                Salpa verso una taverna di mare dove le cozze non sono un semplice piatto,
                ma una leggenda da assaggiare. Ricette goliardiche, sapori decisi,
                nomi maledetti e ingredienti da ciurma affamata trasformano ogni portata
                in un piccolo bottino piratesco.
              </p>

              <Link to="/products" className="btn sabbia-color font-instrument fw-bold">Scopri il menù</Link>
            </div>

            <div className="col-12">
              <img
                src="/img/hero-cozzaro-2.png"
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
              <h2 className="fw-bold mb-3 title-color font-instrument">
                Chi siamo
              </h2>

              <p className="lead mb-4 description-color font-newsreader fw-bold">
                Dietro ogni piatto del Cozzaro Nero si nasconde una ciurma pronta
                ad affrontare tempeste, mostri marini e marinai affamati.
              </p>

              <p className="mb-4 description-color font-newsreader fw-bold">
                La nostra ciurma è composta da Giovanni Paolo Ghinet, Marco Fiordi,
                Sara Luongo, Maurizio Palmisano e Alessandro Tiberia.
              </p>

              <Link
                to="/chi-siamo"
                className="btn sabbia-color font-instrument fw-bold"
              >
                Conosci la ciurma
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COSA VENDIAMO */}
      <section id="menu" className="py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h2 className="fw-bold mb-3 title-color font-instrument">
                Cosa vendiamo
              </h2>

              <p className="lead mb-4 description-color font-newsreader fw-bold">
                Vendiamo piatti a base di cozze cucinate in tanti modi diversi:
                al vapore, gratinate, piccanti, speziate, al vino, al rum e con
                ingredienti ispirati al mondo piratesco.
              </p>

              <p className="mb-0 description-color font-newsreader fw-bold">
                Ogni ricetta ha un nome unico, una personalità precisa e un sapore
                pensato per distinguersi dal classico ristorante di mare. Qui le
                cozze diventano protagoniste di piatti goliardici, creativi e
                maledettamente saporiti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ULTIMI PRODOTTI */}

      <section className="py-3">
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 text-center">
              <h2 className="fw-bold mb-2 title-color font-instrument">Ultimi piatti arrivati a bordo</h2>
              <p className="lead mb-0 description-color font-instrument">Le ultime creazioni preparate dalla nostra ciurma</p>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {isLoading && (
              <div className="col-12 text-center">
                <p className="mb-0 text-v-color font-instrument">Caricamento degli ultimi piatti...</p>
              </div>
            )}

            {error && (
              <div className="col-12 text-center">
                <p className="mb-0 text-v-color">Errore: {error}</p>
              </div>
            )}

            {!isLoading && !error && latestProducts.length === 0 && (
              <div className="col-12 text-center">
                <p className="mb-0 text-v-color font-instrument">Nessun piatto disponibile</p>
              </div>
            )}

            {!isLoading && !error && latestProducts.map((product) => (

              <div
                className="col-12 col-md-6 col-lg-4 d-flex"
                key={product.id}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="text-decoration-none text-white w-100"
                >
                  <article className="card w-100 shadow border-0 h-100 bg-dark text-white product-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top product-img-custom-single"
                    />

                    <div className="card-body p-4 text-center d-flex flex-column principal-color font-instrument">
                      <h3 className="card-title text-accent mb-0 font-pirata">
                        {product.name}
                      </h3>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}




export default HomePage;


//'http://localhost:3000/products?latest=5'