import useNewsletter from "../hooks/useNewsketter";


const NewsletterPopup = () => {

    const { isPopupVisible, closePopup } = useNewsletter();
    console.log("Stato del popup:", isPopupVisible);
    if (!isPopupVisible) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <button className="close-btn" onClick={closePopup}>&times;</button>
                <h2 className="menu-color font-pirata">Iscriviti alla Newsletter!</h2>
                <p className="subtitle-color">Ricevi le ultime novità e offerte speciali direttamente nella tua email.</p>
                <form onSubmit={(e) => { e.preventDefault(); closePopup(); }}>
                    <input type="email" placeholder="Inserisci la tua email" required />
                    <button type="submit" className="submit-btn ">Iscriviti</button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterPopup;