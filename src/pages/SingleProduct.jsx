import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const blanckOBJ = {
    title: "",
    text: "",
    author: "",
    valutation: "",
    product: ""
};

const URL_API_POST = "http://localhost:3000/reviews";



function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reviewOBJ, setReviewOBJ] = useState(blanckOBJ);
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
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
  useEffect(() => {
    fetchData();
  }, [id]);


  function changeHandler(event) {
    const { name, value, type } = event.target;
    const tempOBJ = { ...reviewOBJ,
      [name]: type === "number" ? Number(value): value,
      product:product.name};
    console.log(tempOBJ);
    setReviewOBJ(tempOBJ);
  }

  function submitHandler(event) {
    event.preventDefault();
    fetch(URL_API_POST, {
      // Se non mettete questa proprietà le API non funzioneranno XD
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(reviewOBJ)
    }).then(response => {
      return response.json();
    }).then(json => {
      console.log('Risposta server', json);
      fetchData();
      setReviewOBJ(blanckOBJ);
    }).catch(error => {
      alert(`messaggio non inviato ${error}`);
    });
  }

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
          <h1 className="display-4 fw-bold font-pirata mb-3 title-color">{product.name}</h1>

          <div className="d-flex align-items-center gap-3 mb-4">
            <span className="fs-2 fw-bold subtitle-color">{product.price} €</span>
            <span className="badge star-button text-dark fs-6">
              ★ {averageRating} / 5.0
            </span>
          </div>

          <p className="lead subtitle-color mb-5">{product.description || "Una prelibatezza dei sette mari, preparata con ingredienti freschi e un pizzico di mistero piratesco."}</p>

          <button className="btn style-button btn-lg px-5 fw-bold">ORDINA ORA</button>
          <form onSubmit={submitHandler} className="mt-4 pe-5">
            <div className="mb-2">
              <label htmlFor="author" className="form-label title-color font-pirata fs-4">NOME</label>
              <input type="text" className="form-control bg-dark text-white" id="author" name="author" value={reviewOBJ.author} onChange={changeHandler} required />
            </div>
            <div className="mb-2">
              <label htmlFor="title" className="form-label title-color font-pirata fs-4">TITOLO</label>
              <input type="text" className="form-control bg-dark text-white" id="title" name="title" value={reviewOBJ.title} onChange={changeHandler} required />
            </div>
            <div className="mb-2">
              <label htmlFor="valutation" className="form-label title-color font-pirata fs-4">VOTO</label>
              <input type="number" className="form-control bg-dark text-white" id="valutation" name="valutation" value={reviewOBJ.latest} onChange={changeHandler} required />
            </div>
            <div className="mb-2">
              <label htmlFor="text" className="form-label title-color font-pirata fs-4">DESCRIZIONE</label>
              <textarea className="form-control bg-dark text-white" id="text" rows="8" name="text" onChange={changeHandler} value={reviewOBJ.text} required></textarea>
            </div>
            <button className="btn style-button btn-lg px-5 fw-bold" type="submit">INVIA RECENSIONE</button>
          </form>
        </div>
      </div>

      {/* Sezione Recensioni (Massimo 3) */}
      <div className="mt-5 pt-5 border-top border-secondary">
        <h3 className="font-pirata text-accent mb-4">Cosa ne pensa la ciurma</h3>
        <div className="row">
          {reviews.slice(0, 6).map((review) => (
            <div key={review.id_review} className="col-12 col-md-4 mb-3">
              <div className="card h-100 bg-dark text-white border-secondary p-3 shadow-sm">
                <div className="fw-bold text-accent mb-1">{review.title}</div>
                <div className="small text-secondary mb-2">da {review.author}</div>
                <div className="mb-2 fw-bold text-accent">
                  {review.valutation} <small className="text-secondary">/ 5.0</small>
                </div>
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