import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import lionel from '@/assets/LIONEL NGADJUI.avif';

const lionelData = {
  name: "Me Lionel NGADJUI",
  role: "Associé",
  speciality: "Responsable du Département Contentieux",
  image: lionel,
  shortDescription:
    "Diplômée en droit français (Université de Montpellier I), en droit québécois (Université de Montréal) et en Common Law (Université de Sherbrooke), Me Vanessa de Happi est membre des barreaux du Cameroun et du Québec. Elle a débuté sa carrière comme avocate en Conformité au sein de l’un des plus grands groupes financiers du Canada (Desjardins Group), pour ensuite rejoindre le cabinet Norton Rose Fulbright, un cabinet international d’avocats d’affaires parmi les plus prestigieux. ",
  longDescription: `
    <p>Me Lionel NGADJUI est avocat au Barreau du Cameroun et est en charge du département contentieux au sein du cabinet.</p><br/>
    <p>Il dispose d’une expérience solide en matière de contentieux juridictionnel et d’arbitrage, acquise tant en cabinet qu’en environnement institutionnel.</p><br/>
    <p>Titulaire d’un Master II en contentieux et arbitrage des affaires et d’une Maîtrise en droit des affaires, son parcours est marqué par une pratique approfondie des <b>litiges commerciaux, sociaux, bancaires, maritimes et sociétaires, ainsi que des procédures devant les juridictions nationales et sous‑régionales.</b> Il intervient sur de nombreux dossiers impliquant des entreprises multinationales et des acteurs institutionnels.</p><br/>
    
    <p>Avant de rejoindre D. HAPPI Avocats, Me Lionel NGADJUI a acquis une expérience significative au sein de structures de conseil et d’audit, notamment au cabinet Downstream Consulting et chez Ernst & Young, où il a été exposé aux problématiques d’audit et de gestion du risque juridique. Cette double culture, combinant <b>approche contentieuse et compréhension des enjeux organisationnels</b>, nourrit sa pratique du contentieux.</b>
    
    <p>Il a par ailleurs occupé des fonctions de direction en tant que Directeur de Cabinet du Président du Comité de Normalisation de la Fédération Camerounaise de Football (FECAFOOT), expérience au cours de laquelle il a été directement impliqué dans des <b>questions sensibles de gouvernance, de gestion des conflits et de discipline au sein d’une organisation à forte exposition.</b></p><br/>

    <p>À travers sa pratique professionnelle, Me NGADJUI a développé une expertise particulière dans l’<b>anticipation et la maîtrise du risque contentieux</b>, ainsi que dans l’<b>accompagnement stratégique des entreprises confrontées à des conflits complexes.</b></p></br>
    <p>Au cours des dernières années, Lionel a assisté et représenté les clients du cabinet dans plusieurs contrôles d'envergure menés par l'administration des douanes, tant au cours de la phase précontentieuse que durant la phase contentieuse.</p>
    `,
  expertiseAreas: [
    "Avocat au Barreau du Cameroun",
    "Ancien directeur de cabinet du Président du Comité de normalisation de la FECAFOOT",
  ],
  ParcoursAcadémique: [
    "Master II Contentieux et Arbitrage des affaires UCAC",
    "Maîtrise en droit des affaires Université de Douala",
    "Certificat professionnel en droit des activités énergétiques et minières Institut des Matières Premières",
    "Master II en droit du commerce international Université de Montpellier",
    "Master I en droit des affaires Université de Montpellier",
  ],
  DistinctionsEtClassements: [
    "Membre de l'Association des Avocats spécialisés en droit du sport",
  ],
//   Langue: [
//     "",
//     "",
//   ],
  linkedin: "https://www.linkedin.com/in/lionel-ngadjui-74165132?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "lionelngadjui@dhavocats.com",
};

const LionelNgadjuiPage = () => {
  return <ProfilePage expertData={lionelData} />;
};

export default LionelNgadjuiPage;