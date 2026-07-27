import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import rusell from '@/assets/TeamImages/Rusell_Ngako.avif';

const rusellData = {
  name: "Russel Ngako",
  role: "Juriste Contentieux",
  speciality: "",
  image: rusell,
  shortDescription:
    "Juriste collaborateur pluridisciplinaire, Russel est titulaire d'une Maîtrise en droit Privé Fondamental.",
  longDescription: `
    <p>Fort de plus de huit ans d’expérience, Russel Ngako est un juriste expérimenté, spécialisé en procédures de recouvrement et voies d’exécution et en contentieux administratif et fiscal.</p><br/>
    <p>Grâce à son expérience en contentieux et en exécution des décisions de justice, il assiste les clients du Cabinet dans leurs démarches auprès des administrations et tribunaux, en mettant en avant une approche personnalisée et pragmatique. Son expertise lui permet d’identifier les risques et opportunités juridiques pour proposer des solutions adaptées aux objectifs économiques des clients.</p><br/>
    <p>En parallèle, il poursuit un Master professionnel afin d’approfondir ses recherches sur la fiscalité des opérations de cession d’actions et de restructuration. Il est passionné par l’évolution du droit fiscal et veille à intégrer les meilleures pratiques en matière de gestion et de sécurisation des transactions. Son engagement et son expertise font de lui un conseiller de confiance, capable d’anticiper et de résoudre des problématiques complexes avec rigueur et efficacité.</p><br/>
    `,
  expertiseAreas: [
    "Droit du travail",
    "Contentieux civil",
    "Recouvrement des créances",
    "Contentieux des affaires",
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
  linkedin: "https://www.linkedin.com/in/russell-ngako-54216b1a7/",
  email: "rngako@dhavocats.com",
};

const RusselNgakoPage = () => {
  return <ProfilePage expertData={rusellData} />;
};

export default RusselNgakoPage;