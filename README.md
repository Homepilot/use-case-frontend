# Cas technique Frontend 🛠️


## Énoncé du cas
En vous basant sur la maquette située dans le dossier `/public`, reproduisez la page qui liste des biens le plus fidèlement possible.

- Vous devrez mettre en place une pagination.
- Le click sur une card ouvrira une aside (drawer) affichant plus de détails sur le bien (cette partie est libre de proposition), vous pourrez ainsi afficher le propriétaire, le montant du loyer, la surface  et éventuellement permettre la modification du bien et/ou supprimer celui-ci.
-  Enfin vous devrez créer un bouton `Ajouter un bien` qui proposera un formulaire (dans une aside, modale ou nouvelle page) permettant de créer un nouveau bien. Ce formulaire est assez basique mais doit proposer une liste de propriétaires pour choisir le propriétaire assigné au bien. Cette liste devra être récupérée via l'API. Pour ne pas rendre le cas trop long, on ajoutera une photo à partir d'un lien et pas d'un File.

Vous pouvez utiliser REST ou GraphQL (ou les 2) comme vous le souhaitez. Un playground et un swagger sont à votre disposition.


*Le test est à réaliser en 3h maximum. Nous devrons pouvoir exécuter celui-ci sur notre poste sans trop de configuration ainsi que suivre votre avancement*

### 🚀 Clonez/Downloadez le repo puis assignez lui l'URL d'un nouveau repo git que vous aurez créé afin de pouvoir nous le partager.
### Merci de ne pas forker le repo pour ne pas involontairement partager votre travail avec les autres candidats 😉

Vous devrez créer un dépôt Git *privé* et inviter @BenZ et @easygreg


Voici les identifiants Github à ajouter en tant que collaborateur:

-   @BenoitStephant
-   @easygreg
-   @Koala-gentil
-   @thibault60000


## Installation

### Pré-requis
- Docker
- NodeJS + NPM (ou yarn)

### Backend
- ouvrez le dossier /server
- faites un `yarn`
- faites un `docker-compose up --build``

La base de donnée devrait être accessible dès que le log suivant apparait

```
homepilot-database  | [1] LOG:  database system is ready to accept connections
```

Bien entendu, vous pouvez changer le port dans le `.env` si celui-ci est déjà utilisé

Pour le server NestJS, celui-ci devrait être prêt dès que la ligne suivant apparait :

```
homepilot-server    | [Nest] LOG [NestApplication] Nest application successfully started +2ms
```

Enfin tapez les 2 commandes suivantes pour générer mettre à jour le schéma Prisma et insérer quelques données

```
yarn run docker:prisma dev
```

```
cat database/*.sql | docker exec -i homepilot-database psql -U homepilot -d homepilot
```


Vous pouvez ainsi tester le backend en vous rendant sur http://localhost:3000
Et accéder au playground graphql depuis l'url http:/localhost:3000/graphql
Vous pouvez également ajouter cette url à la sandbox apollo : https://studio.apollographql.com/
Le Swagger pour l'api REST se trouve à l'url : http:/localhost:3000/graphql

## Frontend

- faites un `yarn`
- faites un `yarn dev`

Rendez vous sur l'url http://127.0.0.1:5175/

Le projet dispose de 2 composants permettant d'effectuer une requête GraphQL et une requête HTTP en REST
L'architecture proposée est du Vue 3 avec Tailwind et PrimeVue déjà configurés.
Il y a également Pinia pour le store et Vitest pour les tests unitaires


## Bon courage 🐈 !
