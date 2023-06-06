-- Insertion de données dans la table "Unit"
INSERT INTO
    "Unit" (
        "landlord_id",
        "name",
        "surface",
        "furnished",
        "rent_amount",
        "photo_url",
        "created_at",
        "updated_at"
    )
VALUES
    (
        1,
        'Appartement 1',
        80,
        true,
        1000,
        'https://rent-technologies.s3.eu-central-1.amazonaws.com/images/Cas-technique/se%CC%81jour.jpg',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    ),
    (
        2,
        'Appartement 2',
        65,
        false,
        800,
        'https://rent-technologies.s3.eu-central-1.amazonaws.com/images/Cas-technique/salon-luxe-loft-rendu-3d-etagere_105762-2104.avif',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    ),
    (
        3,
        'Maison 1',
        150,
        true,
        1500,
        'https://rent-technologies.s3.eu-central-1.amazonaws.com/images/Cas-technique/salon-interieur-cadre-photo-blanc-canape-blanc-rendu-3d_46483-504.avif',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    ),
    (
        4,
        'Studio 1',
        40,
        true,
        600,
        'https://rent-technologies.s3.eu-central-1.amazonaws.com/images/Cas-technique/maquette-mur-interieur-salon-dans-tons-chauds-canape-cuir-qui-se-trouve-derriere-cuisine-rendu-3d_41470-3753.avif',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    ),
    (
        5,
        'Appartement 3',
        75,
        false,
        900,
        'https://rent-technologies.s3.eu-central-1.amazonaws.com/images/Cas-technique/istockphoto-1326191354-612x612.jpg',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    ),
    (
        6,
        'Maison 2',
        200,
        true,
        2000,
        'https://rent-technologies.s3.eu-central-1.amazonaws.com/images/Cas-technique/istockphoto-1293762741-612x612.jpg',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    ),
    (
        7,
        'Appartement 4',
        70,
        false,
        850,
        'https://rent-technologies.s3.eu-central-1.amazonaws.com/images/Cas-technique/istockphoto-1251694108-612x612.jpg',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    ),
    (
        8,
        'Studio 2',
        45,
        true,
        650,
        'https://rent-technologies.s3.eu-central-1.amazonaws.com/images/Cas-technique/claustra-pour-separer-chambre-et-coin-bureau-du-salon-petit-espace_5796455.webp',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    ),
    (
        9,
        'Appartement 5',
        85,
        false,
        1100,
        'https://rent-technologies.s3.eu-central-1.amazonaws.com/images/Cas-technique/architecture-interieur-appartement-haussmannien.jpg',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    );