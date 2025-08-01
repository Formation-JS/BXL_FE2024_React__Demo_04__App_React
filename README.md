# Demo 04 - Requete AJAX

## Méthodes pour envoyer une requete en React :

### 1) Déclancher l'envoi de la requete dans un methode
Fonctionnement : 
- Créer un composant avec une méthode activable (click, form, ...).
- Dans la méthode, déclanche la requete.
- Mettre à jour l'app au besoin.

Cas pratique : 
- Récuperer des données à la demande (GET).
- Envoyer des données vers le serveur (POST, PUT, DELETE).

### 2) Composant dédié à une requete (-> useEffect)
Fonctionnement :
- Quand le composant est afficher, le requete est envoyé.
- Adapté les rendu visuel en fonction de l'avancement.

Cas pratique :
- Composant autonome qui affiche les données (GET)