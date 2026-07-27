import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import stephane from '@/assets/TeamImages/Stephane_Djontu.avif';

const stephaneData = {
  name: "Me Stephane DJONTU",
  role: "Avocat Collaborateur",
  speciality: "",
  image: stephane,
  shortDescription:
    "Diplômée en droit français (Université de Montpellier I), en droit québécois (Université de Montréal) et en Common Law (Université de Sherbrooke), Me Vanessa de Happi est membre des barreaux du Cameroun et du Québec. Elle a débuté sa carrière comme avocate en Conformité au sein de l’un des plus grands groupes financiers du Canada (Desjardins Group), pour ensuite rejoindre le cabinet Norton Rose Fulbright, un cabinet international d’avocats d’affaires parmi les plus prestigieux. ",
  longDescription: `
    <p>Titulaire d’un Master II en droit privé fondamental obtenu à l’université de Yaoundé II-Soa où il prépare par ailleurs une thèse de doctorat, Stéphane Djontu est un avocat pluridisciplinaire. </p><br/>

    <p>Fort de cinq années de pratique, il jouit d’une bonne expertise en matière de droit civil, droit des affaires OHADA, droit pénal et contentieux foncier.</p><br/>

    <p><b>Me Djontu est principalement impliqué dans le suivi des dossiers de contentieux civil, administratif et pénal devant les tribunaux camerounais.</b></p><br/>
    `,
  expertiseAreas: [
    "Contentieux civil et commercial",
    "Contentieux des investissements",
    "Contentieux administratif et foncier",
    "Procédures collectives",
    "Défense pénale",
  ],
//   ParcoursAcadémique: [
//     "Master 2 en Fiscalité Appliquée",
//     "Master 1 en Finance / Comptabilité",
//   ],
//   DistinctionsEtClassements: [
//     "Membre de la commission fiscale et douanière du GECAM",
//     "Membre de la commission industrie du GECAM",
//   ],
//   Langue: [
//     "Français",
//     "Anglais",
//   ],
  linkedin: "https://www.linkedin.com/in/st%C3%A9phane-jovite-djontu-ntoukam-202a6a197",
  email: "sdjontu@dhavocats.com",
};

const StephaneDjontuPage = () => {
  return <ProfilePage expertData={stephaneData} />;
};

export default StephaneDjontuPage;