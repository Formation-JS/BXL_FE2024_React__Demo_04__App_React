import { useEffect, useState } from "react";

//! Exemple de requete GET
export default function PersonDetail({ personId }) {

    const [isLoading, setLoading] = useState(false);
    const [person, setPerson] = useState(null);
    const [messageError, setMessageError] = useState(null);

    useEffect(() => {
        //! Execution de la requete via un effect
        let isCancel = false;

        setLoading(true);
        setPerson(null);
        setMessageError(null);

        fetch('http://localhost:3000/people/' + personId)
            .then(response => response.json())
            .then(data => {
                //? Si le "cleanup" a été déclancher, on active pas la suite du code
                if(isCancel) return;

                setPerson(data)
                setLoading(false)
            })
            .catch(error => {
                //? Si le "cleanup" a été déclancher, on active pas la suite du code
                if(isCancel) return;
                
                setMessageError(error.message)
                setLoading(false)
            });

        return () => {
            //! Cleanup de l'effet
            isCancel = true;   

            //? Tips : Possibilité d'annuler la requete via les options du "fetch"
            //  https://developer.mozilla.org/en-US/docs/Web/API/AbortController
        }

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