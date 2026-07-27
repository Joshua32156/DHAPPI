import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import judicael from '@/assets/TeamImages/Judickael.avif';

const judicaelData = {
  name: "Judicaël NGUELEFACK",
  role: "legal counsel",
  speciality: "Juriste Contentieux",
  image: judicael,
  shortDescription:
    "La pratique de Judicaël inclut les matières relatives au contentieux pénal, civil, administratif et OHADA.",
  longDescription: `
    <p>Titulaire d’un Master II en Droit Communautaire et Comparé CEMAC de l’Université de Dschang (Cameroun), Judicaël a rejoint le cabinet en mars 2020 après quelques années de pratique en cabinet d’avocats puis au sein du département juridique d’une des institutions bancaires les plus importantes de la place.</p><br/>
    <p>Judicaël se spécialise en contentieux des affaires et sa pratique au sein du cabinet inclut les matières relatives au contentieux pénal, civil, administratif et OHADA ainsi que la conformité légale et réglementaire en zone CEMAC.</p><br/>
    `,
  expertiseAreas: [
    "Droit du travail",
    "Droit bancaire",
    "Droit des personnes et des biens",
    "Recouvrement des créances",
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
  linkedin: "https://www.linkedin.com/in/judicael-nguelefack-tsatedem-0246b0205/",
  email: "jnguelefack@dhavocats.com",
};

const JudicaelNguelefackPage = () => {
  return <ProfilePage expertData={judicaelData} />;
};

export default JudicaelNguelefackPage;