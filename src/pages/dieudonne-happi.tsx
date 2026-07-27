import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import dieudonne from '@/assets/DIEUDONNÉ HAPPI.avif';

const DieudonneData = {
  name: "Me Dieudonné HAPPI",
  role: "Associé Fondateur",
  speciality: "",
  image: dieudonne,
  shortDescription:
    "Diplômée en droit français (Université de Montpellier I), en droit québécois (Université de Montréal) et en Common Law (Université de Sherbrooke), Me Vanessa de Happi est membre des barreaux du Cameroun et du Québec. Elle a débuté sa carrière comme avocate en Conformité au sein de l’un des plus grands groupes financiers du Canada (Desjardins Group), pour ensuite rejoindre le cabinet Norton Rose Fulbright, un cabinet international d’avocats d’affaires parmi les plus prestigieux. ",
  longDescription: `
    <p>Me Dieudonné HAPPI est avocat au Barreau du Cameroun et associé fondateur de D. HAPPI Avocats, cabinet qu’il a créé en 1985. Il bénéficie d’une expérience reconnue de plus de quatre décennies en contentieux complexes, et jouit d’une réputation solidement établie en matière d’intégrité et de gouvernance.</p><br/>
    <p>Tout au long de son parcours, il s’est illustré dans des <b>contentieux majeurs et sensibles</b>, impliquant des entreprises, des institutions publiques et des dirigeants, tant au niveau national que sous‑régional. Son expérience couvre notamment le droit pénal des affaires, les contentieux complexes, ainsi que les litiges à forts enjeux économiques et réputationnels.</p><br/>
    <p><b>Au‑delà de sa pratique professionnelle, Me Dieudonné HAPPI a été appelé à exercer des fonctions institutionnelles de tout premier plan, en lien direct avec des problématiques de gouvernance, d’éthique et de discipline au sommet des organisations.</b></p><br/>
    
    <p>Il a notamment été désigné <b>Président du Comité de Normalisation de la Fédération Camerounaise de Football</b> (FECAFOOT) par la FIFA, avec pour mission de revoir les textes internes, d’assurer la gestion transitoire de l’institution et d’organiser le processus électoral conduisant à la mise en place d’un nouvel exécutif.</p>
     
    <p>Dans le prolongement de cette expérience, il a été désigné <b>Vice‑Président de la Commission de Gouvernance de la Confédération Africaine de Football (CAF)</b>, où il siège depuis 2019, et a contribué aux travaux relatifs aux règles de gouvernance, d’éthique et de discipline au sein des instances sportives continentales. Il a également exercé les fonctions de <b>Président de la Commission électorale de la CAF</b>, chargée de superviser le processus électoral ayant conduit à l’élection du Président Patrice MOTSEPE à sa tête.</p><br/>

    <p>En 2020, il a été désigné <b>Mandataire de la FIFA pour l’accompagnement des comités de normalisation</b> sur le continent africain.</p><br/>
    <p>Me Dieudonné HAPPI a récemment été nommé <b>Consul Honoraire du Royaume du Maroc au Cameroun</b> par le Roi Mohamed VI, rôle dans lequel il contribue au développement des relations économiques et institutionnelles entre les deux États.</p>
    `,
  expertiseAreas: [
    "Avocat au Barreau du Cameroun",
    "Chevalier de l’ordre de la valeur",
    "Consul Honoraire du Royaume du Maroc",
    "Vice-Président de la Commission de Gouvernance de la Confédération Africaine de Football (CAF)",
    "Mandataire de la FIFA pour le continent africain",
    "Ancien Président du Comité de normalisation de la Fédération Camerounaise de Football (FECAFOOT)",
    "Ancien membre du Conseil de l’ordre",
  ],
//   ParcoursAcadémique: [
//     "Global Executive MBA SKEMA Business School (En cours)",
//     "Médiateur certifié en droit commercial OHADA McGill University",
//     "LL.M en Common Law et droit transnational Université de Sherbrooke",
//     "Master II en droit du commerce international Université de Montpellier",
//     "Master I en droit des affaires Université de Montpellier",
//   ],
//   DistinctionsEtClassements: [
//     "Jeune Afrique Business+ – 100 Legal Powerlist (depuis 2020)",
//     "Chambers & Partners : Up and Coming Lawyer of the Year in Africa (2024) | Leading lawyer (2025, 2026)",
//     "The Legal 500 – Leading Partner (2026)",
//   ],
//   Langue: [
//     "Français",
//     "Anglais",
//   ],
  linkedin: " ",
  email: " ",
};

const DieudonneHappiPage = () => {
  return <ProfilePage expertData={DieudonneData} />;
};

export default DieudonneHappiPage;