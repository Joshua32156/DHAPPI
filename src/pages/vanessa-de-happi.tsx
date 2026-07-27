import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import vanessa from '@/assets/VANESSA DE HAPPI.avif';

const vanessaData = {
  name: "Vanessa de HAPPI",
  role: "Of Counsel",
  speciality: "Contentieux & Arbitrage",
  image: vanessa,
  shortDescription:
    "Diplômée en droit français (Université de Montpellier I), en droit québécois (Université de Montréal) et en Common Law (Université de Sherbrooke), Me Vanessa de Happi est membre des barreaux du Cameroun et du Québec. Elle a débuté sa carrière comme avocate en Conformité au sein de l’un des plus grands groupes financiers du Canada (Desjardins Group), pour ensuite rejoindre le cabinet Norton Rose Fulbright, un cabinet international d’avocats d’affaires parmi les plus prestigieux. ",
  longDescription: `
    <p>Après plusieurs années d’exercice en qualité d’avocate chargée de la conformité au sein de l’un des plus importants groupes financiers du Canada (Desjardins Group), puis au sein d’un cabinet international d’avocats d’affaires de premier plan (Norton Rose Fulbright), Me Vanessa de HAPPI a rejoint D. HAPPI Avocats en 2017, où elle est en charge du département Conseil et Conformité du cabinet.</p><br/>
    <p>Tout au long de son parcours, elle a été impliquée dans des dossiers structurants en droit des affaires et en conformité, tant au Cameroun qu’au Canada. Elle accompagne régulièrement les clients du cabinet Devon des enjeux de conformité légale et réglementaire, dans des secteurs variés, ainsi qu’en matière de gouvernance des sociétés soumises au droit OHADA.</p><br/>
    <p>Elle intervient de manière récurrente sur des problématiques liées aux investissements et au financement de projets en zone OHADA. À ce titre, elle a récemment participé à plusieurs opérations de financement majeures, avec une implication particulière dans la structuration et la mise en place de financements syndiqués.</p><br/>
    
    <p>Me Vanessa de HAPPI a par ailleurs conduit de nombreux projets de mise en conformité aux lois et règlements, ainsi qu’aux standards internes d’entreprise. À ce titre, son expérience couvre notamment :</p>
    <ul class="list-disc list-inside mt-4 pl-4 space-y-2 text-primary">
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">l’accompagnement juridique des équipes projets et des parties prenantes financières</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">la réalisation d’audits juridiques et d’audits de conformité</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">l’élaboration d’outils et dispositifs de conformité</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">la rédaction de chartes éthiques et de politiques internes, notamment en matière de protection des données, LBC/FT, KYC, conformité prudentielle, nomination et de rémunération des dirigeants, politiques RH, etc.</span>
      </li>
    </ul><br/>
    
    <p>Elle assiste également les clients du cabinet dans le cadre de la mise en place de programmes de conformité, des contrôles menés par les autorités administratives et les organes de régulation et les assiste, le cas échéant, dans le cadre des procédures contentieuses y afférentes. Elle plaide devant les juridictions civiles et commerciales dans des matières relevant du droit des affaires et travaille aussi bien en français qu’en anglais.</p><br/>

    <p>Soucieuse d’allier analyse juridique et approche stratégique, Me Vanessa de HAPPI achève actuellement un Global Executive MBA (GEMBA) à SKEMA Business School, suivi en ligne et en présentiel sur les campus de Paris (France), Raleigh (USA), Belo Horizonte (Brésil) et Shanghai (Chine).</p>
    `,
  expertiseAreas: [
    "Conformité légale et réglementaire",
    "Droit des sociétés",
    "Droit des contrats",
    "Droit bancaire et financier",
    "Droit des investissements",
    "Droit du numérique",
    "Trade and commodities",
  ],
  ParcoursAcadémique: [
    "Global Executive MBA SKEMA Business School (En cours)",
    "Médiateur certifié en droit commercial OHADA McGill University",
    "LL.M en Common Law et droit transnational Université de Sherbrooke",
    "Master II en droit du commerce international Université de Montpellier",
    "Master I en droit des affaires Université de Montpellier",
  ],
  DistinctionsEtClassements: [
    "Jeune Afrique Business+ – 100 Legal Powerlist (depuis 2020)",
    "Chambers & Partners : Up and Coming Lawyer of the Year in Africa (2024) | Leading lawyer (2025, 2026)",
    "The Legal 500 – Leading Partner (2026)",
  ],
  Langue: [
    "Français",
    "Anglais",
  ],
  linkedin: "https://www.linkedin.com/in/vanessa-de-happi-7240b031?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "Vdehappi@dhavocats.com",
};

const VanessaPage = () => {
  return <ProfilePage expertData={vanessaData} />;
};

export default VanessaPage;