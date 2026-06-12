import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleItems = 4;

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
    try {
      const response = await fetch('http://localhost:3000/products');
      if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
      const data = await response.json();
      console.log(data);
      if (data.result === null){
        throw new Error('Nessun prodotto trovato');
      }
      setProducts(data.result);   
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, []);

  if (loading) return <div className="text-center py-5">Caricamento prodotti...</div>;
  if (error) return <div className="alert alert-danger m-5 text-center">Errore: {error}</div>;

  return (
    <div className="container py-3">
      <h1 className="pb-5 text-center fw-bold text-accent font-pirata display-3">Menù della Taverna</h1>
      
      <div className="slider-wrapper">
        {/* Bottone Sinistra */}
        <button 
          type="button"
          className="slider-btn start-0 text-accent" 
          onClick={prevSlide}
          disabled={currentIndex === 0 || products.length <= visibleItems}
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <div className="slider-container">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {products.map(product => (
              <div className="slider-item" key={product.id}>
                <Link 
                  to={`/products/${product.id}`} 
                  className="text-decoration-none text-white w-100"
                >
                  <div className="card shadow border-0 bg-dark text-white product-card">
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
        </div>

        {/* Bottone Destra */}
        <button 
          type="button"
          className="slider-btn end-0 text-accent" 
          onClick={nextSlide}
          disabled={currentIndex >= products.length - visibleItems || products.length <= visibleItems}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductList;