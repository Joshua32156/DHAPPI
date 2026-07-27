import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import rosalie from '@/assets/TeamImages/Rosalie.avif';

const rosalieData = {
  name: "Rosalie DIPITA",
  role: "Assistante Juridique",
  speciality: "",
  image: rosalie,
  shortDescription:
    "Rosalie est le pilier autour duquel tourne l'organisation de l'équipe de D. HAPPI Avocats.",
  longDescription: `
    <p>Titulaire d’un Master II en Droit privé fondamental et d’une Licence en lettres et sciences humaines à l’Université de Ngaoundéré (Cameroun), Rosalie a rejoint le cabinet en 2016 après quelques années en cabinets d’avocats et services juridiques d’entreprises.</p><br/>
    <p>En tant que Assistante Juridique Principale, Rosalie est en charge du secrétariat, du suivi de la clientèle et de la conformité au sein du cabinet.</p><br/>
    <p>Elle est le pilier autour duquel tourne l’organisation de l’équipe DH Avocats.</p><br/>
    `,
//   expertiseAreas: [
//     "Droit de l’énergie",
//     "Droit des contrats",
//     "Droit des sociétés",
//     "Droit de la distribution",
//     "Droit des investissements",
//     "Droit du commerce international",
//   ],
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
  linkedin: "https://www.linkedin.com/in/rosalie-dipita-1783a4208/",
  email: "secretariat@dhavocats.com",
};

const RosalieDipitaPage = () => {
  return <ProfilePage expertData={rosalieData} />;
};

export default RosalieDipitaPage;