import { useEffect, useState } from "react";

//! Exemple de requete GET
export default function PersonDetail({ personId }) {

    const [isLoading, setLoading] = useState(false);
    const [person, setPerson] = useState(null);
    const [messageError, setMessageError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setPerson(null);
        setMessageError(null);

        fetch('http://localhost:3000/people/' + personId)
            .then(response => response.json())
            .then(data => {
                setPerson(data)
                setLoading(false)
            })
            .catch(error => {
                setMessageError(error.message)
                setLoading(false)
            })
    }, [personId])
    
    return (
        <>
            <h3>Détail du personnage "{personId}"</h3>
            {isLoading ? (
                <p>Chargement en cours...</p>
            ) : (person !== null) ? (
                <p>{person.firstname} {person.lastname}</p>
            ) : (messageError !== null) ? (
                <p>Une erreur est survenu : {messageError}</p>
            ) : (
                <p>Aucune donnée charger...</p>
            )}
        </>
    );
}