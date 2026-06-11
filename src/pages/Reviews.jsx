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
                    throw new Error('Nessun prodotto trovato');
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

    if (loading) return <div>loading reviews...</div>;
    if (error) return <div>Errore: {error}</div>;

    return (
        <ul>
            {reviews.map(reviews => (
                <li key={reviews.id}>
                {reviews.author} - {reviews.product_name} - {reviews.text} - {reviews.title} - {reviews.valutation}
                </li>
            ))}
        </ul>
    )
}
export default Reviews;