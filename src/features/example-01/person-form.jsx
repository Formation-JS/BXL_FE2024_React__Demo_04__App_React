import { useState } from "react";


//! Exemple de requete POST (Ajout)
export default function PersonForm() {

    const [message, setMessage] = useState(null);

    const handleAddDonald = () => {
        setMessage('Envoi en cours...');
        const data = { firstname: 'Donald', lastname: 'Duck' };

        fetch('http://localhost:3000/people', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => setMessage('Envoi réussi'))
            .catch(error => setMessage('Envoi echoué'));
    };

    return (
        <div>
            <h3>Envoyer une requete POST</h3>
            <button onClick={handleAddDonald}>Ajouter Donald</button>
            {message && (
                <span>{message}</span>
            )}
        </div>
    );
}