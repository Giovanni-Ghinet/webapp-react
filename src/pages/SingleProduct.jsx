import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch del prodotto (che include già le sue recensioni)
        const prodRes = await fetch(`http://localhost:3000/products/${id}`);
        if (!prodRes.ok) throw new Error("Prodotto non trovato");
        const prodData = await prodRes.json();
        
        // Estraiamo il prodotto dall'array result
        const currentProduct = prodData.result[0];
        setProduct(currentProduct);
        setReviews(currentProduct.reviews || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div className="text-center py-5 mt-5">Preparando il bottino...</div>;
  if (error) return (
    <div className="container py-5 mt-5 text-center">
      <div className="alert alert-danger">{error}</div>
      <button className="btn btn-warning" onClick={() => navigate("/products")}>Torna al Menù</button>
    </div>
  );
  if (!product) return null;

  // Calcolo del voto medio
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + parseFloat(r.valutation), 0) / reviews.length).toFixed(1)
    : "N/A";

  return (
    <div className="container py-5">
      <button 
        className="btn btn-outline-secondary mb-4" 
        onClick={() => navigate(-1)}
      >
        ← Torna al menù
      </button>

      <div className="row g-5 mb-5">
        {/* Colonna Sinistra: Immagine */}
        <div className="col-12 col-md-6">
          <div className="rounded overflow-hidden shadow-lg border border-secondary">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-img-custom-single img-fluid"
            />
          </div>
        </div>

        {/* Colonna Destra: Info Prodotto */}
        <div className="col-12 col-md-6">
          <h1 className="display-4 fw-bold text-accent font-pirata mb-3">{product.name}</h1>
          
          <div className="d-flex align-items-center gap-3 mb-4">
            <span className="fs-2 fw-bold text-accent">{product.price} €</span>
            <span className="badge star-button text-dark fs-6">
              ★ {averageRating} / 5.0
            </span>
          </div>

          <p className="lead text-white mb-5">{product.description || "Una prelibatezza dei sette mari, preparata con ingredienti freschi e un pizzico di mistero piratesco."}</p>
          
          <button className="btn style-button btn-lg px-5 fw-bold">ORDINA ORA</button>
        </div>
      </div>

      {/* Sezione Recensioni (Massimo 3) */}
      <div className="mt-5 pt-5 border-top border-secondary">
        <h3 className="font-pirata text-accent mb-4">Cosa ne pensa la ciurma</h3>
        <div className="row">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id_review} className="col-12 col-md-4 mb-3">
              <div className="card h-100 bg-dark text-white border-secondary p-3 shadow-sm">
                <div className="fw-bold text-accent mb-1">{review.title}</div>
                <div className="small text-secondary mb-2">da {review.author}</div>
                <p className="small mb-0 italic">"{review.text}"</p>
              </div>
            </div>
          ))}
          {reviews.length === 0 && <p className="text-secondary">Nessun marinaio ha ancora lasciato un commento.</p>}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;