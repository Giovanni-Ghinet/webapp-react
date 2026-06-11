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

  if (loading) return <div>Caricamento prodotti...</div>;
  if (error) return <div>Errore: {error}</div>;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
            {product.image} - {product.price} € - {product.description} - {product.name} - {product.country}
        </li> 
      ))}
    </ul>
  );
}

export default ProductList;