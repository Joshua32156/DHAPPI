import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import boris from '@/assets/TeamImages/Boris_Minlo.avif';

const borisData = {
  name: "Boris MINLO",
  role: "Legal Counsel",
  speciality: "Responsable du Département Conseil",
  image: boris,
  shortDescription:
    "Diplômée en droit français (Université de Montpellier I), en droit québécois (Université de Montréal) et en Common Law (Université de Sherbrooke), Me Vanessa de Happi est membre des barreaux du Cameroun et du Québec. Elle a débuté sa carrière comme avocate en Conformité au sein de l’un des plus grands groupes financiers du Canada (Desjardins Group), pour ensuite rejoindre le cabinet Norton Rose Fulbright, un cabinet international d’avocats d’affaires parmi les plus prestigieux. ",
  longDescription: `
    <p>Titulaire d'un Master II en Droit Privé, Boris prépare actuellement une thèse de Doctorat à l'Université de Douala sur la restructuration des entreprises en difficultés par le recours au financement alternatif. Il est par ailleurs certifié de l'Ecole Régionale Supérieure de la Magistrature de l'OHADA en Restructuration d'Entreprises.</p><br/>
    <p>Boris se spécialise en Droit des sociétés, Droit de la concurrence, Droit des investissements, Droit des contrats d’affaires, Droit des entreprises en difficulté, Droit bancaire et financier.</p><br/>
    <p>Après son passage au sein du service juridique d’une importante société brassicole camerounaise, il a fait ses preuves en cabinet d’affaires avant d’exercer comme Gestionnaire des engagements dans une prestigieuse institution financière pour finalement rejoindre DH Avocats.</p><br/>
    
    <p>Sa pratique au sein du cabinet se concentre essentiellement dans les domaines de la structuration et l’arrangement des opérations d’investissement, le montage des contrats complexes, l’audit juridique, le conseil et la conformité légale et règlementaire.</p>
    `,
  expertiseAreas: [
    "Audit juridique",
    "Ingénierie sociétaire",
    "Droit de la concurrence",
    "Droit des investissements",
    "Droit bancaire et financier",
    "Droit des contrats d’affaires",
    "Droit des sûretés",
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
  linkedin: "https://www.linkedin.com/in/boris-rodrigue-minlo-enguele-526703180/",
  email: "bminlo@dhavocats.com",
};

const BorisPage = () => {
  return <ProfilePage expertData={borisData} />;
};

export default BorisPage;