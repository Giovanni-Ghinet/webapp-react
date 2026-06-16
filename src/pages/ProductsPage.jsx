import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Stato per la ricerca ritardata (Debounce)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // Gestione del Debounce: aggiorna debouncedSearchTerm solo dopo 500ms di inattività
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  

  // 1. Fetch delle categorie (eseguito solo una volta al montaggio del componente)
  useEffect(() => {
    const url_categories = 'http://localhost:3000/categories';
    fetch(url_categories)
      .then(response => {
        if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => {
        // Uso data.result o data.response in base alla struttura del tuo back-end
        setCategories(data.response || data.result || []);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  // 2. Fetch dei prodotti (eseguito quando cambia la ricerca o la categoria selezionata)
  useEffect(() => {
    setLoading(true);
    
    const params = new URLSearchParams();
    if (debouncedSearchTerm) params.append('search', debouncedSearchTerm);
    if (selectedCategory) params.append('slug', selectedCategory);

    const url = `http://localhost:3000/products?${params.toString()}`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => {
        setProducts(data.result || []);
        
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [debouncedSearchTerm, selectedCategory]);

  return (
    <div className="container py-3">
      <h1 className="pb-5 text-center fw-bold menu-color font-pirata display-3">Menù della Taverna</h1>

      {/* Barra di Ricerca */}
      <div className="row justify-content-end align-items-center mb-4 g-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <select
            className="form-select bg-dark text-white border-secondary shadow-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Tutte le categorie</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
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
      
      {loading ? (
        <div className="text-center py-5 text-accent font-pirata fs-3">Preparando il bottino...</div>
      ) : error ? (
        <div className="alert alert-danger m-5 text-center">Errore: {error}</div>
      ) : (
        <div className="products-grid-container">
          
          <div className="container">
            {products.length > 0 ? (
              <div 
                className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4" 
                
              >
                {products.map(product => (
                  <div className="col d-flex" key={product.id}>
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
                <h3 className="title-color font-pirata display-5">Nessun prodotto trovato</h3>
                <p className="subtitle-color font-newsreader fs-4">Sembra che i mari siano vuoti... prova a cercare un altro bottino!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
