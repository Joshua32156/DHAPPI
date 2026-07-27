import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import allyson from '@/assets/TeamImages/Allyson.jpg';

const allysonData = {
  name: "Allyson MPONDO",
  role: "Juriste Conseil",
  speciality: "",
  image: allyson,
  shortDescription:
    "Titulaire d’un Master II en droit des affaires de l’Université de Buea, Allyson poursuit actuellement un Master ...",
  longDescription: `
    <p>Titulaire d’un Master II en droit des affaires de l’Université de Buea, Allyson poursuit actuellement un Master Professionnel en fiscalité à l’École Supérieure des Sciences Économiques et Commerciales (ESSEC) de Douala.</p><br/>
    <p>Spécialisée en droit des sociétés, droit des contrats d’affaires, droit fiscal, ainsi qu’en réglementation douanière et des changes, Allyson a acquis une expérience significative au sein d’un cabinet de conseil juridique et fiscal avant de rejoindre l’équipe de DH Avocats.</p><br/>
    <p>Son intégration au sein du cabinet s'inscrit dans sa volonté de renforcer son expertise en conseil juridique et en conformité réglementaire. Elle intervient notamment dans la structuration et la rédaction de contrats d’affaires, l’audit juridique et fiscal, l’audit en douanes et changes, ainsi que dans l’accompagnement des entreprises en matière de conformité légale et réglementaire.</p><br/>
    `,
  expertiseAreas: [
    "Audit juridique",
    "Ingénierie sociétale",
    "Droit des contrats",
    "Conformité légale et réglementaire",
    "Gestion du secrétariat juridique des entreprises",
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
// //   ],
//   Langue: [
//     "Français",
//     "Anglais",
//   ],
  linkedin: "https://www.linkedin.com/in/allyson-mpondo-339686246?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "ampondo@dhavocats.com",
};

const AllysonPage = () => {
  return <ProfilePage expertData={allysonData} />;
};

export default AllysonPage;