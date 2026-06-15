import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiSailboat } from "react-icons/gi";

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleItems(1);
      else if (width < 992) setVisibleItems(2);
      else setVisibleItems(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (currentIndex > Math.max(0, products.length - visibleItems)) {
      setCurrentIndex(Math.max(0, products.length - visibleItems));
    }
  }, [visibleItems, products.length]);

  const nextSlide = () => {
    if (currentIndex < products.length - visibleItems) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };


  useEffect(() => {

    const url = 'http://localhost:3000/products?latest=5';

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => {
        setProducts(data.result || []);
        setCurrentIndex(0);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
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

        {loading ? (
          <div className="text-center py-5 text-accent font-pirata fs-3">Preparando il bottino...</div>
        ) : error ? (
          <div className="alert alert-danger m-5 text-center">Errore: {error}</div>
        ) : (
          <div className="slider-wrapper">
            <button
              type="button"
              className="slider-btn btn-slider-prev text-accent "
              onClick={prevSlide}
              disabled={currentIndex === 0 || products.length <= visibleItems}
            >
              <GiSailboat className="flip-horizontal" />
            </button>

            <div className="slider-container">
              {products.length > 0 ? (
                <div
                  className="slider-track"
                  style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`, transition: 'transform 0.5s ease-in-out' }}
                >
                  {products.map(product => (
                    <div className="col slider-item p-2 d-flex" style={{ flex: `0 0 ${100 / visibleItems}%` }} key={product.id}>
                      <Link to={`/products/${product.id}`} className="text-decoration-none text-white w-100 d-flex">
                        <div className="card shadow border-0 bg-dark text-white product-card w-100 h-100">
                          <img src={product.image} className="product-img-custom" alt={product.name} />
                          <div className="card-body p-4 text-center d-flex flex-column">
                            <h5 className="card-title text-accent mb-3 font-pirata">{product.name}</h5>
                            <p className="fs-3 mt-auto text-accent font-pirata">{product.price} €</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5 w-100">
                  <h3 className="text-accent font-pirata display-5">Nessun prodotto trovato</h3>
                  <p className="text-secondary font-newsreader fs-4">Sembra che i mari siano vuoti... prova a cercare un altro bottino!</p>
                </div>
              )}
            </div>

            <button
              type="button"
              className="slider-btn btn-slider-next text-accent"
              onClick={nextSlide}
              disabled={currentIndex >= products.length - visibleItems || products.length <= visibleItems}
            >
              <GiSailboat />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}




export default HomePage;


//'http://localhost:3000/products?latest=5'