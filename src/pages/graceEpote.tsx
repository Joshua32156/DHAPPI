import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import vanessa from '@/assets/VANESSA DE HAPPI.avif';

const graceData = {
  name: "Grace EPOTE",
  role: "Avocat stagiaire",
  speciality: "",
  image: vanessa,
  shortDescription:
    "Titulaire d’une licence en droit public, et d’un niveau master en droit public international... ",
  longDescription: `
    <p>Titulaire d’une licence en droit public, et d’un niveau master en droit public international, Grace EPOTE possède une expertise approfondie en droit des relations internationales, en contentieux international ainsi qu’en droit de l’homme. Son parcours académique lui confère une vision globale et analytique des enjeux juridiques liés aux interactions entre les États, les organisations internationales et les individus, notamment en matière de protection des droits fondamentaux et de règlement des différends à l’échelle internationale.</p><br/>
    <p>Depuis son intégration au sein du Cabinet, elle évolue activement au sein du département contentieux, où elle met en application ses connaissances théoriques tout en développant des compétences pratiques essentielles. Cette immersion lui permet d’intervenir dans des dossiers variés relevant du droit pénal, du recouvrement de créances, du droit de l’arbitrage et du droit des sociétés. Par cette expérience, elle affine son expertise en matière de stratégie contentieuse et de résolution des litiges, tout en acquérant une maîtrise approfondie des mécanismes procéduraux et des exigences propres aux domaines du droit susvisés.</p><br/>
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
// //   ParcoursAcadémique: [
// //     "Global Executive MBA SKEMA Business School (En cours)",
// //     "Médiateur certifié en droit commercial OHADA McGill University",
// //     "LL.M en Common Law et droit transnational Université de Sherbrooke",
// //     "Master II en droit du commerce international Université de Montpellier",
// //     "Master I en droit des affaires Université de Montpellier",
// //   ],
// //   DistinctionsEtClassements: [
// //     "Jeune Afrique Business+ – 100 Legal Powerlist (depuis 2020)",
// //     "Chambers & Partners : Up and Coming Lawyer of the Year in Africa (2024) | Leading lawyer (2025, 2026)",
// //     "The Legal 500 – Leading Partner (2026)",
// //   ],
// //   Langue: [
// //     "Français",
// //     "Anglais",
// //   ],
  linkedin: " https://www.linkedin.com/in/grace-epote-50719927a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "gepote@dhavocats.com",
};

const GraceEpotePage = () => {
  return <ProfilePage expertData={graceData} />;
};

export default GraceEpotePage;