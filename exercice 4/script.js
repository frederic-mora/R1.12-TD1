/* 
    Documentation : https://fr.javascript.info/

    Les notions (nouvelles) abordées dans cet exercice sont expliquées ici : 
    . https://fr.javascript.info/object

    Objectifs : 

        . Découvrir les opérateurs arithmétiques de base
        . Savoir faire un calcul sur des valeurs dans des variables
*/


/*
    Cet exercice a la même finalité que le précédent : calculer l'équivalent en secondes d'une durée donnée en heures/minutes/secondes.
    Dans cette version, on utilise un objet pour "regrouper" les données (heures, minutes, secondes) puisqu'elles décrivent une seule et 
    même durée. Un objet est délimité par {}. C'est un "contenant" qui permet de regrouper plusieurs données décrivant une même information. 
    Les variables que l'on "range" ainsi dans un objet sont alors appelées propriétés de l'objet. On accède à la valeur d'une propriété 
    d'un objet grâce à la "notation pointée" : nomObjet.nomPropriété. Par exemple ici, period.heures vaut 2.
*/

let period = {
    heures: 2,
    minutes: 23,
    secondes: 51,
};

let total_en_secondes = "Replace me with the good computations !";

