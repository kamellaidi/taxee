const taxis = 
     [
      {
        "id": 1,
        "category": "Standard",
        "vehicle_type": "Break",
        "engine_type": "Essence",
        "seats": 4,
        "driver": {
          "name": "Bob",
          "description": "Le chauffeur le plus en retard du quartier. Il aime bien faire des détours pour vous montrer les embouteillages."
        }
      },
      {
        "id": 2,
        "category": "Luxe",
        "vehicle_type": "SUV",
        "engine_type": "Diesel",
        "seats": 6,
        "driver": {
          "name": "Alice",
          "description": "La conductrice avec un sens de l'humour inégalé. Elle a toujours une blague à vous raconter, même si elle est un peu douteuse."
        }
      },
      {
        "id": 3,
        "category": "Écologique",
        "vehicle_type": "Berline",
        "engine_type": "Électrique",
        "seats": 3,
        "driver": {
          "name": "Charlie",
          "description": "Le conducteur écolo qui aime vous rappeler combien d'émissions de carbone vous économisez en utilisant son taxi. Attention, il peut être un peu moralisateur !"
        }
      },
      {
        "id": 4,
        "category": "Standard",
        "vehicle_type": "Compact",
        "engine_type": "Essence",
        "seats": 5,
        "driver": {
          "name": "Eva",
          "description": "La conductrice qui conduit avec une main tout en mangeant un sandwich avec l'autre. Elle a une habileté impressionnante, mais attention aux virages serrés !"
        }
      },
      {
        "id": 5,
        "category": "Luxe",
        "vehicle_type": "Limousine",
        "engine_type": "Essence",
        "seats": 8,
        "driver": {
          "name": "Victor",
          "description": "Le chauffeur qui se prend pour une célébrité. Il adore vous faire sentir comme une star en vous ouvrant la porte et en vous appelant 'monsieur' ou 'madame'."
        }
      },
      {
        "id": 6,
        "category": "Écologique",
        "vehicle_type": "Hybride",
        "engine_type": "Essence/Électrique",
        "seats": 4,
        "driver": {
          "name": "Sophie",
          "description": "La conductrice passionnée d'écologie qui a transformé son taxi en véritable jardin sur roues. Attendez-vous à une expérience florale lors de votre trajet !"
        }
      },
      {
        "id": 7,
        "category": "Standard",
        "vehicle_type": "Berline",
        "engine_type": "Diesel",
        "seats": 4,
        "driver": {
          "name": "Maxime",
          "description": "Le chauffeur le plus bavard de tous. Il connaît toutes les nouvelles du quartier et vous en fera part, que vous le vouliez ou non."
        }
      },
      {
        "id": 8,
        "category": "Luxe",
        "vehicle_type": "Coupé",
        "engine_type": "Essence",
        "seats": 2,
        "driver": {
          "name": "Olivia",
          "description": "La conductrice qui aime rouler à toute vitesse. Si vous avez besoin d'une course effrénée, elle est celle qu'il vous faut. Attachez votre ceinture !"
        }
      },
      {
        "id": 9,
        "category": "Écologique",
        "vehicle_type": "Vélo électrique",
        "engine_type": "Électrique",
        "seats": 1,
        "driver": {
          "name": "Luc",
          "description": "Le cycliste chevronné qui a décidé de devenir chauffeur de taxi à vélo. Il vous fera vivre une expérience unique et sportive pendant votre trajet."
        }
      },
      {
        "id": 10,
        "category": "Standard",
        "vehicle_type": "Citadine",
        "engine_type": "Essence",
        "seats": 4,
        "driver": {
          "name": "Hélène",
          "description": "La conductrice qui parle aux pigeons. Elle est convaincue qu'ils comprennent tout ce qu'elle leur dit. Vous aurez peut-être droit à une conversation intéressante avec les oiseaux pendant votre trajet."
        }
      },
      {
        "id": 11,
        "category": "Luxe",
        "vehicle_type": "Berline",
        "engine_type": "Hybride",
        "seats": 4,
        "driver": {
          "name": "Louis",
          "description": "Le chauffeur aux goûts raffinés. Il a toujours de la musique classique en fond sonore et vous propose des bonbons à la menthe pour une expérience élégante à bord de son taxi."
        }
      },
      {
        "id": 12,
        "category": "Écologique",
        "vehicle_type": "Monospace",
        "engine_type": "Électrique",
        "seats": 7,
        "driver": {
          "name": "Julie",
          "description": "La conductrice zen qui vous propose des séances de méditation guidée pendant votre trajet. Vous pourrez vous détendre et oublier le stress de la circulation."
        }
      },
      {
        "id": 13,
        "category": "Standard",
        "vehicle_type": "Cabriolet",
        "engine_type": "Essence",
        "seats": 2,
        "driver": {
          "name": "Thomas",
          "description": "Le chauffeur fan de soleil. Si le temps le permet, il ouvrira le toit de son taxi pour que vous puissiez profiter du ciel bleu pendant votre trajet."
        }
      },
      {
        "id": 14,
        "category": "Luxe",
        "vehicle_type": "Mini-van",
        "engine_type": "Diesel",
        "seats": 7,
        "driver": {
          "name": "Camille",
          "description": "La conductrice qui vous propose un buffet à bord de son taxi. Vous aurez l'embarras du choix parmi une variété de collations et de boissons pendant votre trajet."
        }
      },
      {
        "id": 15,
        "category": "Écologique",
        "vehicle_type": "Bus électrique",
        "engine_type": "Électrique",
        "seats": 20,
        "driver": {
          "name": "Martin",
          "description": "Le chauffeur du futur. Son taxi est un véritable bus électrique avec des panneaux solaires sur le toit. Il peut accueillir un grand nombre de passagers dans le confort écologique."
        }
      },
      {
        "id": 16,
        "category": "Standard",
        "vehicle_type": "Fourgonnette",
        "engine_type": "Essence",
        "seats": 9,
        "driver": {
          "name": "Emma",
          "description": "La conductrice multitalentueuse. Elle peut vous raconter une histoire captivante, jouer de la guitare et vous apprendre quelques mots dans une langue étrangère pendant votre trajet."
        }
      },
      {
        "id": 17,
        "category": "Luxe",
        "vehicle_type": "Limousine",
        "engine_type": "Hybride",
        "seats": 10,
        "driver": {
          "name": "Alexandre",
          "description": "Le chauffeur qui se considère comme un guide touristique. Il vous fera découvrir les meilleurs endroits de la ville pendant votre trajet en limousine."
        }
      },
      {
        "id": 18,
        "category": "Écologique",
        "vehicle_type": "Trottinette électrique",
        "engine_type": "Électrique",
        "seats": 1,
        "driver": {
          "name": "Sarah",
          "description": "La conductrice agile qui se faufile partout avec sa trottinette électrique. Elle vous fera gagner du temps en évitant les embouteillages et en vous offrant une expérience amusante."
        }
      },
      {
        "id": 19,
        "category": "Standard",
        "vehicle_type": "Monospace",
        "engine_type": "Diesel",
        "seats": 6,
        "driver": {
          "name": "Romain",
          "description": "Le chauffeur qui connaît toutes les chansons populaires par cœur. Il vous propose un karaoké improvisé pendant votre trajet. Préparez-vous à chanter à tue-tête !"
        }
      },
      {
        "id": 20,
        "category": "Luxe",
        "vehicle_type": "Berline",
        "engine_type": "Hybride",
        "seats": 4,
        "driver": {
          "name": "Clara",
          "description": "La conductrice sophistiquée. Elle est toujours parfaitement habillée et vous offre un service impeccable à bord de son taxi de luxe."
        }
      }
    ]
  

export default taxis
