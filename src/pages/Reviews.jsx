import { useState, useEffect } from "react";
function Reviews() {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('http://localhost:3000/reviews');
                if (!response.ok) throw new Error(`Errore HTTP: ${ response.status }`);
                const data = await response.json();
                console.log(data);
                
                if (data.result === null) {
                    throw new Error('Nessuna recensione trovata');
                }
                setReviews(data.result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);

    if (loading) return <div className="text-center py-5">Caricamento recensioni...</div>;
    if (error) return <div className="alert alert-danger m-5 text-center">Errore: {error}</div>;

    return (
        <div className="container py-3">
            <h1 className="pb-4 text-center fw-bold text-accent">Recensioni</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    {reviews.map(review => (
                        <div key={review.id} className="card bg-dark text-white mb-4 shadow border-0 overflow-hidden">
                            <div className="row g-0">
                                {/* Lato Sinistro: Nome del piatto e Autore */}
                                <div className="col-md-4 bg-secondary bg-opacity-10 d-flex flex-column justify-content-center align-items-center p-4 text-center border-end border-secondary">
                                    <h6 className="text-uppercase small mb-1 text-secondary">Piatto</h6>
                                    <h5 className="fw-bold text-accent mb-3">{review.product_name}</h5>
                                    <div className="mt-2">
                                        <span className="text-secondary small">Autore</span>
                                        <p className="mb-0 fw-semibold">{review.author}</p>
                                    </div>
                                </div>
                                {/* Lato Destro: Titolo, Valutazione e Testo */}
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="card-title fw-bold text-accent mb-0">{review.title}</h5>
                                            <span className="fs-5 fw-bold text-accent">
                                                {review.valutation} <small className="text-secondary">/ 5.0</small>
                                            </span>
                                        </div>
                                        <p className="card-text mt-3">{review.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Reviews;