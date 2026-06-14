import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiSailboat } from "react-icons/gi"; 


function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleItems(1);      // Corrisponde a row-cols-1
      else if (width < 992) setVisibleItems(2); // Corrisponde a row-cols-md-2
      else if (width < 1200) setVisibleItems(3); // Corrisponde a row-cols-lg-3
      else setVisibleItems(4);                  // Corrisponde a row-cols-xl-4
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset dell'indice se diventa invalido dopo un resize
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
  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Aggiungiamo il parametro di ricerca all'URL se presente
      let url = 'http://localhost:3000/products';
      const params = [];
      if (searchTerm) params.push(`search=${encodeURIComponent(searchTerm)}`);
      if (category) params.push(`category=${encodeURIComponent(category)}`);
      if (params.length) url += `?${params.join('&')}`;
        
      console.log('Fetching products from:', url);
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
      const data = await response.json();
      console.log('Products response:', data);
      
      setProducts(data.result || []);
      // Resettiamo l'indice dello slider quando cambiano i risultati
      setCurrentIndex(0);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, [searchTerm, category]);

  if (loading) return <div className="text-center py-5">Caricamento prodotti...</div>;
  if (error) return <div className="alert alert-danger m-5 text-center">Errore: {error}</div>;

  return (
    <div className="container py-3">
      <h1 className="pb-5 text-center fw-bold menu-color font-pirata display-3">Menù della Taverna</h1>

      {/* Barra di Ricerca */}
      <div className="row justify-content-end align-items-center mb-4">
        <div className="col-6 col-md-4 col-lg-3">
          

          <select
            className="form-select bg-dark text-white border-secondary shadow-none "
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Tutte le categorie</option>
            <option value="infuocato-del-mare-dei-ladri">Infuocato del Mare dei Ladri</option>
            <option value="affumicato-dei-relitti">Affumicato dei Relitti</option>
            <option value="abisso-del-kraken">Abisso del Kraken</option>
            <option value="taverna-dell-ancora-spezzata">Taverna dell'Ancora Spezzata</option>
            <option value="maledizione-dell-ordine-delle-anime">Maledizione dell'Ordine delle Anime</option>
          </select>
        </div>
        
        <div className="col-6 col-md-4 col-lg-3">
          <div className="input-group">
            <span className="input-group-text bg-dark border-secondary text-accent">
              <i className="bi bi-search"></i>
            </span>
            <input 
              type="text" 
              className="form-control bg-dark text-white border-secondary shadow-none" 
              placeholder="Cerca nel menù..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            /> 
          </div>
        </div>
      </div>
      
      <div className="slider-wrapper">
        {/* Bottone Sinistra */}
        <button 
          type="button"
          className="slider-btn start-0 text-accent " 
          onClick={prevSlide}
          disabled={currentIndex === 0 || products.length <= visibleItems}
        >
          <GiSailboat className="flip-horizontal" />
        </button>

        <div className="slider-container">
          {products.length > 0 ? (
            <div 
              className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 flex-nowrap mx-1 slider-track" 
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`, transition: 'transform 0.5s ease-in-out' }}
            >
              {products.map(product => (
                <div 
                  className="col slider-item p-2 d-flex" 
                  key={product.id}
                >
                  <Link 
                    to={`/products/${product.id}`} 
                    className="text-decoration-none text-white w-100 d-flex"
                  >
                    <div className="card shadow border-0 bg-dark text-white product-card w-100 h-100">
                      <img 
                        src={product.image} 
                        className="product-img-custom" 
                        alt={product.name} 
                      />
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

        {/* Bottone Destra */}
        <button 
          type="button"
          className="slider-btn end-0 text-accent" 
          onClick={nextSlide}
          disabled={currentIndex >= products.length - visibleItems || products.length <= visibleItems}
        >
           <GiSailboat/>
        </button>
      </div>
    </div>
  );
}

export default ProductList;