import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
      const data = await response.json();
      console.log(data);
      if (data.result ===null){
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
      <h1 className=" pb-4 text-center fw-bold text-accent font-pirata">Menù</h1>
      <div className="row g-4">
        {products.map(product => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card w-100 shadow border-0 h-100 bg-dark text-white overflow-hidden">
              <img 
                src={product.image} 
                className="card-img-top product-img-custom" 
                alt={product.name} 
              />
              <div className="card-body p-4 text-center d-flex flex-column">
                <h5 className="card-title text-accent mb-3 font-pirata">{product.name}</h5>
                <p className="card-text small mb-4">{product.description}</p>
                <p className="mb-2 small"><strong>Provenienza:</strong> {product.country}</p>
                <p className="fs-3 mt-auto text-accent font-pirata">{product.price} €</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;