import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import simon from '@/assets/TeamImages/Simon.avif';

const simonData = {
  name: "Simon MOUMBOK",
  role: "legal counsel",
  speciality: "Juriste Conseil",
  image: simon,
  shortDescription:
    "Simon est spécialisé droit des contrats d'affaires, des sociétés, de la distribution et des investissements.",
  longDescription: `
    <p>Simon Moumbok, est titulaire d’un Master II en Droit Privé obtenu à l’Université de Yaoundé II.</p><br/>
    <p>Précédemment assistant chercheur au sein de la filiale camerounaise d’un centre d’étude et de recherche juridique international, il a rejoint le cabinet en qualité de juriste conseil.</p><br/>
    <p>Ayant acquis une solide expérience en tant que consultant juridique auprès d’une entreprise de gestion de contrats d’investissement, Simon est spécialisé en droit des contrats d’affaires, droit des sociétés, droit de la distribution et droit des investissements. Sa pratique au sein du cabinet se concentre sur l’audit juridique des contrats, le conseil et la conformité légale et réglementaire.</p><br/>
    `,
  expertiseAreas: [
    "Droit de l’énergie",
    "Droit des contrats",
    "Droit des sociétés",
    "Droit de la distribution",
    "Droit des investissements",
    "Droit du commerce international",
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
  linkedin: "https://www.linkedin.com/in/simon-legrand-moumbok-851592190/",
  email: "smoumbok@dhavocats.com",
};

const SimonMoumbokPage = () => {
  return <ProfilePage expertData={simonData} />;
};

export default SimonMoumbokPage;