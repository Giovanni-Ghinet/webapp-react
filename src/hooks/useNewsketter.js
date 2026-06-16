import { useContext } from "react";
import { NewsletterContext } from "../contexts/NewsletterContext";



function useNewsletter () {
    const context = useContext(NewsletterContext);

    // Sicurezza opzionale: avvisa se usi l'hook fuori dal Provider
    if (!context) {
        throw new Error('useNewsletter deve essere usato all\'interno di un NewsletterProvider');
    }

    return context;
}


export default useNewsletter;