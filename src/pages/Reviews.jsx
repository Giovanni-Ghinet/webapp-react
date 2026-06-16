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
            <h1 className="pb-4 text-center fw-bold review-color font-pirata">Recensioni</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    {reviews.map(review => (
                        <div key={review.id} className="card text-white mb-4 shadow border-0 overflow-hidden card-recensione">
                            <div className="row g-0">
                                <div className="col-md-4 bg-secondary bg-opacity-10 d-flex flex-column justify-content-center align-items-center p-4 text-center border-end border-secondary">
                                    <span className="text-uppercase small mb-1 text-secondary font-instrument spaziatura-lettere">Piatto</span>
                                    <h5 className="fw-bold text-accent mb-3 font-instrument fs-4">{review.product_name}</h5>
                                    
                                    <div className="mt-2">
                                        <span className="text-secondary small font-instrument spaziatura-lettere">Autore</span>
                                        <p className="mb-0 fw-semibold font-newsreader text-white-50">{review.author}</p>
                                    </div>
                                        <div className="mt-2">
                                        <span className="text-secondary small font-instrument spaziatura-lettere">Data</span>
                                        <p className="mb-0 fw-semibold font-newsreader text-white-50">{review.date}</p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4 d-flex flex-column h-100 justify-content-center">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="card-title fw-bold text-accent mb-0 font-instrument fs-4">{review.title}</h5>
                                            <span className="fs-5 fw-bold title-color font-instrument">
                                                {review.valutation} <small className="text-secondary fs-6">/ 5.0</small>
                                            </span>
                                        </div>
                                        <p className="card-text mt-3 font-newsreader description-color fs-5 lh-base">{review.text}</p>
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