import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import vanessa from '@/assets/VANESSA DE HAPPI.avif';
import VanessaPage from './vanessa-de-happi';

const jodieData = {
  name: "Jodie NGODEM",
  role: "Avocat stagiaire",
  speciality: "",
  image: vanessa,
  shortDescription:
    "Avocat en stage au Barreau du Cameroun et diplômée de l'Institute of Legal Practice and Development au Rwanda,",
  longDescription: `
    <p>Avocat en stage au Barreau du Cameroun et diplômée de l'Institute of Legal Practice and Development au Rwanda, Jodie se spécialise en Droit des sociétés, Droit des marchés financiers, Droit de la concurrence et  Human rights.</p><br/>
    <p>Jodie pratique au sein du cabinet dans des domaines variés, incluant le contentieux des affaires, le civil, le pénal et le recouvrement des créances.</p><br/>
    <p>Son esprit de défenseur des droits humains l'a conduit à approfondir ses connaissances sur la protection des intérêts des personnes vulnérables et leur accompagnement éventuel  après les procédures juridictionnelles.</p><br/>
    `,
  expertiseAreas: [
    "Contentieux civil et commercial",
    "Contentieux social",
    "Procédure pénale",
    "Recouvrement de créances",
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
  linkedin: " https://www.linkedin.com/in/jodie-estelle-ngodem-04a60a291?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "jngodem@dhavocats.com",
};

const JodieNgodemPage = () => {
  return <ProfilePage expertData={jodieData} />;
};

export default JodieNgodemPage;