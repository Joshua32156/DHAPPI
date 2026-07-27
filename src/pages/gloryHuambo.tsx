import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import glory from '@/assets/TeamImages/Glory.png';

const GloryHuamboData = {
  name: "Glory HUAMBO",
  role: "Of Counsel",
  speciality: "Contentieux & Arbitrage",
  image: glory,
  shortDescription:
    "Diplômée en droit français (Université de Montpellier I), en droit québécois (Université de Montréal) et en Common Law (Université de Sherbrooke), Me Vanessa de Happi est membre des barreaux du Cameroun et du Québec. Elle a débuté sa carrière comme avocate en Conformité au sein de l’un des plus grands groupes financiers du Canada (Desjardins Group), pour ensuite rejoindre le cabinet Norton Rose Fulbright, un cabinet international d’avocats d’affaires parmi les plus prestigieux. ",
  longDescription: `
    <p>Maître Glory HUAMBO justifie de douze (12) années d’expérience professionnelle, dont cinq (05) années en cabinet d’avocats, avec une pratique continue et approfondie en droit du travail, y compris, la gestion des procédures disciplinaires. Il est membre de la Commission Juridique et Contentieux du GECAM et a participé à la revue du nouveau code du travail camerounais.</p><br/>
    <p>Il intervient sur l’ensemble des dossiers du cabinet présentant des problématiques de droit du travail et de droit social et agit régulièrement en contexte multi‑entités et/ou multi‑pays.</p><br/>
    <p>Avant de rejoindre D. HAPPI Avocats, Me Glory HUAMBO a exercé les fonctions de Responsable Quality & Risk Management et Juriste d’Entreprise chez KPMG Afrique centrale, où il est intervenu sur les problématiques de conformité, de gestion des risques et de contrôle des procédures internes dans le cadre organisationnel.</p><br/>
    <p>Il a également exercé comme Chef Service Juridique et Contentieux au sein du réseau Emploi Service, un groupe opérant dans plusieurs pays d’Afrique francophone subsaharienne, avec une implication directe dans la gestion des questions sociales et disciplinaires à l’échelle régionale.</p><br/>
    
    <p>Son expérience couvre notamment :</p>
    <ul class="list-disc list-inside mt-4 pl-4 space-y-2 text-primary">
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">L’audit et la rédaction d’opinions juridiques en matière sociale</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">La rédaction d’instruments juridiques à portée sociale (contrats, RI, politiques RH)</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">L’élaboration, la mise en œuvre et le suivi des procédures propres aux ressources humaines</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">La gestion des procédures disciplinaires</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">L’évaluation des droits de fin de contrat de travail et la régularisation d’avancements sociaux</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">La gestion des procédures devant l’administrations du travail  et les juridictions sociales</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">La fiscalité de la paie</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">La formation aux exigences légales et de conformité</span>
      </li>
    </ul><br/>
    
    <p>Me HUAMBO est titulaire d’une licence en droit, d’un Master I en Finance-Comptabilité et d’un Master II en Fiscalité.</p><br/>

    `,
  // expertiseAreas: [
  //   "Conformité légale et réglementaire",
  //   "Droit des sociétés",
  //   "Droit des contrats",
  //   "Droit bancaire et financier",
  //   "Droit des investissements",
  //   "Droit du numérique",
  //   "Trade and commodities",
  // ],
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
  linkedin: "https://www.linkedin.com/in/glory-huambo-8b798785?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "ghuambo@dhavocats.com",
};

const GloryHuamboPage = () => {
  return <ProfilePage expertData={GloryHuamboData} />;
};

export default GloryHuamboPage;