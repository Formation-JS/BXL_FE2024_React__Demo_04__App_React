import { Suspense, use } from "react";

const requetePromise = async (id) => {
    //! Delay
    await (new Promise(resolve => { setTimeout(resolve, 500); }));
    
    //! Request
    const response = await fetch('http://localhost:3000/people/' + id);

    if (response.status === 404) {
        throw new Error('Personne non trouvé !');
    }

    //! Result
    return await response.json();
};

//! Exemple de requete GET
export default function PersonDetail({ personId }) {

    const promise = requetePromise(personId); // <- Promise

    return (
        <>
            <h3>Détail du personnage "{personId}"</h3>
            <Suspense fallback={<p>Chargement en cours...</p>}>
                <PersonDetailInner ajax={promise} />
            </Suspense>
        </>
    );
}

function PersonDetailInner({ ajax }) {
    const person = use(ajax);

    return (
        <p>{person.firstname} {person.lastname}</p>
    );
}