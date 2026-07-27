import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import estelle from '@/assets/TeamImages/Estelle.avif';

const estelleData = {
  name: "Estelle TAHOUÉ",
  role: "Executive Assistant",
  speciality: "",
  image: estelle,
  shortDescription:
    "Estelle est l'assistante exécutive du cabinet, jouant un rôle clé dans le soutien administratif et opérationnel.",
  longDescription: `
    <p>Estelle rejoint le cabinet en 2022, forte de plus de dix ans d’expérience au sein de divers cabinets et entreprises opérant dans des secteurs variés comme l’énergie, les télécommunications, les douanes ou encore la finance. Au cours de ces années passées presqu’exclusivement aux côtés de managers et de dirigeants de sociétés, elle a acquis une solide expérience en administration, organisation d’entreprise, gestion des équipes ou encore dans les relations clients et avec les prestataires extérieurs.</p><br/>
    <p>Motivée par un désir constant d’efficacité et d’efficience, elle œuvre à l’optimisation de la coordination et du suivi des activités administratives et opérationnelles liées au bon fonctionnement du cabinet. </p><br/>
    <p>Titulaire d’un Master in Translation and Interpreting de l’Université de Bath (UK), Estelle est parfaitement bilingue et s’exprime brillamment en anglais et en français.</p><br/>
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
  linkedin: "https://www.linkedin.com/in/estelle-gaelle-tahoue-129533229?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "etahoue@dhavocats.com",
};

const EstelleTahouePage = () => {
  return <ProfilePage expertData={estelleData} />;
};

export default EstelleTahouePage;