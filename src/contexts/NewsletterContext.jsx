import { createContext, useState, useEffect, } from 'react';

// 1. Creiamo il contesto
const NewsletterContext = createContext(null);

// 2. Creiamo il Provider
function NewsletterProvider ({ children }) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        sessionStorage.removeItem('newsletter_closed');
        const isClosed = sessionStorage.getItem('newsletter_closed');

        if (!isClosed) {
            const timer = setTimeout(() => {
                setIsPopupVisible(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsPopupVisible(false);
        sessionStorage.setItem('newsletter_closed', 'true');
    };

    return (
        <NewsletterContext value={{ isPopupVisible, closePopup }}>
            {children}
        </NewsletterContext>
    );
};

export {
    NewsletterContext,
    NewsletterProvider
}