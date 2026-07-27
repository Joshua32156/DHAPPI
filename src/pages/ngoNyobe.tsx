import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import nyobe from '@/assets/TeamImages/HomeTeam/NYOBE.jpg';

const estherngonyobeData = {
  name: "Esther Ngo Nyobe",
  role: "Doctorante en droit des affaires",
  speciality: "Juriste Conseil",
  image: nyobe,
  shortDescription:
    "Esther est juriste financière, disposant de cinq (05) années d’expérience professionnelle, ...",
  longDescription: `
    <p>Esther est juriste financière, disposant de cinq (05) années d’expérience professionnelle, avec une expertise dans la structuration et l’exécution d’opérations de financement. Elle a rejoint le cabinet en juillet 2023 en qualité de juriste conseil.</p><br/>
    
    <p>Elle intervient sur des transactions stratégiques à forte valeur ajoutée, en accompagnant des clients institutionnels et corporate dans la structuration juridique et financière de leurs opérations, notamment en :</p>
    <ul class="list-disc list-inside mt-4 pl-4 space-y-2 text-primary">
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">Structuration de financements structurés et project finance</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">Levées de fonds (equity, dette et instruments hybrides)</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">Opérations de marchés de capitaux  (IPO,LBO...)</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">Titrisation et structuration d’actifs</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">Garanties bancaires</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">Conformité légale et réglementaire bancaire & financiére </span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">Réglementation des changes</span>
      </li>
    </ul><br/>
    
    <p>Grâce à une approche intégrée combinant analyse juridique et compréhension approfondie des mécanismes financiers, elle contribue à sécuriser les opérations tout en optimisant leur structuration, dans un cadre conforme aux exigences réglementaires locales et internationales.</p><br/>

    <p>En parallèle de sa pratique professionnelle, Esther poursuit un Master en Finance et Comptabilité à l’ESSEC de Douala, renforçant ainsi sa capacité à intervenir sur des problématiques financières complexes et à dialoguer efficacement avec les différents acteurs d’une opération (investisseurs, prêteurs, conseils financiers).</p>
    `,
//   expertiseAreas: [
//     "Conformité légale et réglementaire",
//     "Droit des sociétés",
//     "Droit des contrats",
//     "Droit bancaire et financier",
//     "Droit des investissements",
//     "Droit du numérique",
//     "Trade and commodities",
//   ],
  ParcoursAcadémique: [
    "Doctorante en droit des affaires avec une spécialisation sur les marchés financiers",
    "Master 2 en droit des affaires avec une spécialisation sur les marchés financiers",
    "Master 2 en contentieux internationale avec une spécialisation en fiscalité internationale",
    "Certification en Capital Market Executive Certificate",
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
  linkedin: "https://www.linkedin.com/in/esther-péronne-ngo-nyobe-bayiha-12a963193?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "engonyobe@dhavocats.com",
};

const EstherNgoNyobePage = () => {
  return <ProfilePage expertData={estherngonyobeData} />;
};

export default EstherNgoNyobePage;