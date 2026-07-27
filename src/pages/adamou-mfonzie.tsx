import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import adamou from '@/assets/TeamImages/Adamou.png';

const adamouData = {
  name: "Adamou MFONZIE",
  role: "Expert Fiscal Agréé CEMAC",
  speciality: "Responsable du Département Fiscal",
  image: adamou,
  shortDescription:
    "Diplômée en droit français (Université de Montpellier I), en droit québécois (Université de Montréal) et en Common Law (Université de Sherbrooke), Me Vanessa de Happi est membre des barreaux du Cameroun et du Québec. Elle a débuté sa carrière comme avocate en Conformité au sein de l’un des plus grands groupes financiers du Canada (Desjardins Group), pour ensuite rejoindre le cabinet Norton Rose Fulbright, un cabinet international d’avocats d’affaires parmi les plus prestigieux. ",
  longDescription: `
    <p>Adamou MFONZIE est Fiscaliste et Responsable du Département Fiscalité de D. HAPPI Avocats, qu’il a rejoint en 2024.</p><br/>

    <p>À ce titre, il coordonne une équipe dédiée à l’assistance et au conseil des départements et clients du cabinet sur l’ensemble des enjeux fiscaux liés à leurs activités, tant dans le cadre des opérations courantes que des projets structurés.</p><br/>

    <p><b>Il justifie d’une expérience professionnelle de plus de dix (10) ans en conseil fiscal, acquise au sein de multinationales et de cabinets de conseil. Expérience qui lui confère une maîtrise solide des problématiques fiscales locales et internationales.</b></p><br/>
    
    <p><b>Son expertise couvre notamment l’assistance fiscale, le reporting, la planification fiscale, ainsi que l’accompagnement des entreprises lors des contrôles et des contentieux avec l’administration fiscale.</b></p></br>

    <p>Adamou MFONZIE intervient régulièrement sur :</p>
    <ul class="list-disc list-inside mt-4 pl-4 space-y-2 text-primary">
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">les contrôles et contentieux fiscaux</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">la planification et l’optimisation fiscale, dans le respect des cadres réglementaires applicables</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">l’assistance aux obligations fiscales déclaratives</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">l’évaluation et le suivi des risques fiscaux</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">l’accompagnement fiscal des investissements et des opérations présentant des enjeux transactionnels</span>
      </li>
    </ul><br/>
    
    <p>Tout au long de son parcours, il s’est distingué par son sens de l’anticipation, sa rigueur méthodologique et sa capacité à travailler en équipe, qualités qui lui permettent d’assurer une gestion structurée et sécurisée des dossiers qui lui sont confiés.</p><br/>

    <p>Il est reconnu pour son approche pragmatique et pour sa capacité à défendre efficacement les intérêts des clients du cabinet auprès de l’administration fiscale.</p></br>

    <p>Adamou est titulaire d’un DESS en Fiscalité appliquée de l’Université de Douala et est membre de la Commission Fiscale et Douanière du GECAM.</p>
    `,
  expertiseAreas: [
    "Expert Fiscal Agréé CEMAC N°518",
    "Droit des sociétés",
    "Droit des contrats",
    "Droit bancaire et financier",
    "Droit des investissements",
    "Droit du numérique",
    "Trade and commodities",
  ],
  ParcoursAcadémique: [
    "Master 2 en Fiscalité Appliquée",
    "Master 1 en Finance / Comptabilité",
  ],
  DistinctionsEtClassements: [
    "Membre de la commission fiscale et douanière du GECAM",
    "Membre de la commission industrie du GECAM",
  ],
//   Langue: [
//     "Français",
//     "Anglais",
//   ],
  linkedin: " https://www.linkedin.com/in/adamou-mfonzié-b48aa41b9?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "amfonzie@dhavocats.com",
};

const AdamouMfonziePage = () => {
  return <ProfilePage expertData={adamouData} />;
};

export default AdamouMfonziePage;