import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import ingrid from '@/assets/TeamImages/IngridTchuem.avif';

const ingridData = {
  name: "Me Ingrid TCHUEM",
  role: "Avocat",
  speciality: "",
  image: ingrid,
  shortDescription:
    "Avocate au Barreau du Cameroun et titulaire d’une Maîtrise en Droit des affaires de l’Université de Douala, Ingrid se spécialise en contentieux des affaires, droit foncier et bancaire.",
  longDescription: `
    <p>Avocate au Barreau du Cameroun et titulaire d’une Maîtrise en Droit des affaires de l’Université de Douala, Ingrid se spécialise en contentieux des affaires, droit foncier et bancaire.</p><br/>
    <p>Elle bénéficie de près de sept années d’exercice professionnel acquises tant en entreprise, en qualité de chef service recouvrement et contentieux d’une illustre société de la place œuvrant dans le domaine des télécoms et sécurité, qu’en cabinets d’avocats.</p><br/>
    <p>Au cours de ses différentes expériences professionnelles, Ingrid a développé une expertise pointue en matière de recouvrement amiable ou forcé des créances, contentieux civil et droit pénal. Elle assure au sein du cabinet le traitement et le suivi des dossiers liés au recouvrement de créances, contentieux en droit des sociétés et droit pénal.</p><br/>
    `,
  expertiseAreas: [
    "Contentieux civil et commercial",
    "Contentieux social",
    "Défense pénale",
    "Droit et contentieux foncier",
    "Recouvrement de créances",
  ],
//   ParcoursAcadémique: [
//     "Global Executive MBA SKEMA Business School (En cours)",
//     "Médiateur certifié en droit commercial OHADA McGill University",
//     "LL.M en Common Law et droit transnational Université de Sherbrooke",
//     "Master II en droit du commerce international Université de Montpellier",
//     "Master I en droit des affaires Université de Montpellier",
//   ],
//   DistinctionsEtClassements: [
//     "Jeune Afrique Business+ – 100 Legal Powerlist (depuis 2020)",
//     "Chambers & Partners : Up and Coming Lawyer of the Year in Africa (2024) | Leading lawyer (2025, 2026)",
//     "The Legal 500 – Leading Partner (2026)",
//   ],
//   Langue: [
//     "Français",
//     "Anglais",
//   ],
  linkedin: "https://www.linkedin.com/in/ingrid-tchuem-207bb6193/",
  email: "itchuem@dhavocats.com",
};

const IngridTchuemPage = () => {
  return <ProfilePage expertData={ingridData} />;
};

export default IngridTchuemPage;