import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import marie from '@/assets/TeamImages/Marie_Hatho.avif';

const marieData = {
  name: "Me Marie HATHO",
  role: "Avocat Collaborateur",
  speciality: "",
  image: marie,
  shortDescription:
    "Inscrite en qualité d’Avocate au Barreau du Cameroun et titulaire d’un Master en Contentieux et Arbitrage des Affaires de l’Université Catholique d’Afrique Centrale et d’une Maîtrise en droit des affaires et de l’entreprise de l’Université de Douala, Me Marie HATHO MBEYA se spécialise en contentieux et arbitrage des affaires.",
  longDescription: `
    <p>Inscrite en qualité d’Avocate au Barreau du Cameroun et titulaire d’un Master en Contentieux et Arbitrage des Affaires de l’Université Catholique d’Afrique Centrale et d’une Maîtrise en droit des affaires et de l’entreprise de l’Université de Douala, Me Marie HATHO MBEYA se spécialise en contentieux et arbitrage des affaires.</p><br/>
    <p>Elle bénéficie de près de quatre années d’exercice en cabinet d’avocats, au cours desquelles elle a pu exercer en matière de procédure de recouvrement forcé des créances, marchés publics, contentieux pénal et contentieux civil. Son parcours à la division des affaires juridiques du Ministère des Travaux Publics, précisément à la cellule du Contentieux lui a permis d’affiner ses compétences dans la gestion du contentieux des marchés publics.</p><br/>
    <p>C’est dans ce cadre qu’elle assure au sein du Cabinet DH Avocats le traitement et le suivi des dossiers liés aux marchés publics et aux contentieux à caractère civil, commercial et pénal.</p><br/>
    
    `,
  expertiseAreas: [
    "Contentieux et arbitrage des affaires",
    "Recouvrement des créances",
    "Droit des marchés publics",
    "Droit pénal",
    "Contentieux fiscal",
    "Droit civil des personnes et des biens",
  ],
  // ParcoursAcadémique: [
  //   "Global Executive MBA SKEMA Business School (En cours)",
  //   "Médiateur certifié en droit commercial OHADA McGill University",
  //   "LL.M en Common Law et droit transnational Université de Sherbrooke",
  //   "Master II en droit du commerce international Université de Montpellier",
  //   "Master I en droit des affaires Université de Montpellier",
  // ],
  // DistinctionsEtClassements: [
  //   "Jeune Afrique Business+ – 100 Legal Powerlist (depuis 2020)",
  //   "Chambers & Partners : Up and Coming Lawyer of the Year in Africa (2024) | Leading lawyer (2025, 2026)",
  //   "The Legal 500 – Leading Partner (2026)",
  // ],
  // Langue: [
  //   "Français",
  //   "Anglais",
  // ],
  linkedin: "https://www.linkedin.com/in/marie-hatho-448578b6/",
  email: "mhatho@dhavocats.com",
};

const MarieHathoPage = () => {
  return <ProfilePage expertData={marieData} />;
};

export default MarieHathoPage;