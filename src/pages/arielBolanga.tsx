import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import ariel from '@/assets/TeamImages/Ariel.jpeg';

const arielData = {
  name: "Ariel Bolanga Ogolong",
  role: "Avocat",
  speciality: "Droit des Affaires & Fiscalité",
  image: ariel,
  shortDescription:
    "Dr Ariel BOLANGA OGOLONG est un juriste spécialisé en droit des affaires et en conseil juridique.",
  longDescription: `
    <p>Le Dr Ariel BOLANGA OGOLONG est un juriste spécialisé en droit foncier, droit privé et droit des affaires. Il intervient auprès des entreprises, investisseurs, institutions et particuliers pour les conseiller dans la sécurisation de leurs activités et la protection de leurs intérêts patrimoniaux.</p><br/>
    <p>Titulaire d’un Doctorat (PhD) en Droit Privé obtenu à l’Université de Douala avec la mention Très Honorable et les félicitations du jury, il a consacré ses travaux de recherche à la question de « La notion de trouble en matière d’occupation foncière », un sujet au cœur des problématiques foncières contemporaines.</p><br/>
    <p>Son parcours académique et professionnel lui a permis de développer une expertise approfondie dans la gestion des contentieux fonciers, la sécurisation des droits immobiliers, l’accompagnement des projets d’investissement et l’ingénierie juridique appliquée aux opérations économiques. Il apporte à ses clients une analyse rigoureuse et des solutions adaptées aux défis juridiques auxquels ils sont confrontés.</p><br/>
    
    <p>Reconnu pour sa rigueur, son sens de l’analyse et sa maîtrise des enjeux fonciers et patrimoniaux, Ariel met son expertise au service de la sécurité juridique et de la réussite des projets de ses clients.</p>
    `,
  expertiseAreas: [
    "Droit Privé",
    "Droit Foncier et Domanial",
    "Droit des Affaires",
    "Conseil et Ingénierie Juridique",
    "Gestion des Risques Juridiques",
    "Sécurisation des Investissements et du Patrimoine Immobilier",
    "Contentieux Fonciers et Immobiliers",
    "Droit OHADA",
  ],
  ParcoursAcadémique: [
    "Licence en Droit Privé",
    "Master en Droit Privé",
    "Doctorat (PhD) en Droit Privé, spécialisation en Droit Foncier",
  ],
//   DistinctionsEtClassements: [
//     "Jeune Afrique Business+ – 100 Legal Powerlist (depuis 2020)",
//     "Chambers & Partners : Up and Coming Lawyer of the Year in Africa (2024) | Leading lawyer (2025, 2026)",
//     "The Legal 500 – Leading Partner (2026)",
//   ],
//   Langue: [
//     "Français",
//     "Anglais",
//   ],
  linkedin: "https://www.linkedin.com/in/ariel-bolanga-58773b1a9",
  email: "abolanga@dhavocats.com",
};

const ArielBolangaPage = () => {
  return <ProfilePage expertData={arielData} />;
};

export default ArielBolangaPage;