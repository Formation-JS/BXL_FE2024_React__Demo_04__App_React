import { useState } from "react";

//! Exemple de requete GET
export default function PeopleList() {

    const [isLoading, setLoading] = useState(false);
    const [people, setPeople] = useState(null);
    const [messageError, setMessageError] = useState(null);

    const handleLoad = () => {
        setLoading(true);
        setPeople(null);
        setMessageError(null);

        fetch('http://localhost:3000/people')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => setMessageError(error.message))
            .finally(() => setLoading(false));
    };

    return (
        <>
            <h3>La liste des personnes</h3>
            <button onClick={handleLoad}>Charger la liste</button>
            {isLoading ? (
                <p>Chargement en cours...</p>
            ) : (people !== null) ? (
                <ul>
                    {people.map(person => (
                        <li key={person.id}>{person.firstname} {person.lastname}</li>
                    ))}
                </ul>
            ) : (messageError !== null) ? (
                <p>Une erreur est survenu : {messageError}</p>
            ) : (
                <p>Aucune donnée charger...</p>
            )}
        </>
    );
}