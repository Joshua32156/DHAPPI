import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import tene from '@/assets/TeamImages/HomeTeam/Tene.jpg';

const joelData = {
  name: "Joël TENE",
  role: "Expert en Douanes Agréé CEMAC",
  speciality: "Consultant Douanes, Changes & Transport",
  image: tene,
  shortDescription:
    "Diplômée en droit français (Université de Montpellier I), en droit québécois (Université de Montréal) et en Common Law (Université de Sherbrooke), Me Vanessa de Happi est membre des barreaux du Cameroun et du Québec. Elle a débuté sa carrière comme avocate en Conformité au sein de l’un des plus grands groupes financiers du Canada (Desjardins Group), pour ensuite rejoindre le cabinet Norton Rose Fulbright, un cabinet international d’avocats d’affaires parmi les plus prestigieux. ",
  longDescription: `
    <p>Joël TENE est actuellement inscrit en doctorat en Droit des Affaires à l’Université Paris 1 Panthéon‑Sorbonne et intervient également en qualité de chercheur invité à la Columbia Law School aux États‑Unis.</p><br/>
    <p>Il est titulaire d’un Diplôme Postuniversitaire en Droit des Affaires de l’Université de Douala, d’un Master en Transport international de l’Université Paris 1 Panthéon‑Sorbonne, et est certifié par l’Academy of Customs Knowledge de l’Organisation Mondiale des Douanes (OMD) à Bruxelles.</p><br/>
    <p>Il justifie de plus de dix (10) années d’expérience professionnelle dans les domaines des douanes, de la réglementation des changes, du droit des affaires et du transport international.</p><br/>
    
    <p>À ce titre, il a notamment occupé le poste de Responsable de la Réglementation des Douanes et du Contrôle des Changes au sein de Mazars Tax and Legal Cameroun (aujourd’hui Forvis Mazars), où il est intervenu sur des problématiques complexes liées aux flux transfrontaliers, aux obligations réglementaires et aux interactions avec les administrations compétentes.</p></br>

    <p>Son expertise couvre en particulier :</p>
    <ul class="list-disc list-inside mt-4 pl-4 space-y-2 text-primary">
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">le droit des douanes et du commerce extérieur</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">la réglementation des changes</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">les aspects juridiques du transport international</span>
      </li>
      <li class="pl-2 text-gray-700 dark:text-gray-300">
        <span class="font-medium">l’accompagnement des entreprises dans des environnements réglementaires structurés et multi‑pays.</span>
      </li>
    </ul><br/>
    
    <p>Joël est par ailleurs membre de plusieurs organisations et instances professionnelles et académiques, notamment : le CADEX (Centre pour la Recherche et la Promotion du Commerce Extérieur en Afrique) à Paris, la Commission Fiscale et Douanière du GECAM, le Think Tank Center for Research on Energy and Mining Policies (CARPEM) à Paris, ainsi que l’Association des Avocats Noirs à New York. Il travaille couramment en français et en anglais, ce qui lui permet d’intervenir efficacement sur des dossiers à dimension internationale et multi‑juridictionnelle.</p><br/>
    `,
  expertiseAreas: [
    "Expert agréé en douanes",
    "Doctorant en Droit des Affaires Université Panthéon‑Sorbonne",
    "Chercheur invité à la Columbia Law School",
  ],
  ParcoursAcadémique: [
    "Master en Transport international",
    "Université Panthéon‑Sorbonne",
    "Diplôme Postuniversitaire en Droit des Affaires    Université de Douala",
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
  linkedin: "",
  email: "",
};

const JoelPage = () => {
  return <ProfilePage expertData={joelData} />;
};

export default JoelPage;