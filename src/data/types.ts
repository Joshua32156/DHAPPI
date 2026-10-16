export interface TeamMember {
  name: string;
  role: string;
  speciality?: string;
  grade?: string;
  image: string;
  /** Phrase courte affichée sur la carte de la page Équipe */
  description?: string;
  shortDescription?: string;
  /** Biographie complète (HTML) */
  longDescription: string;
  expertiseAreas?: string[];
  ParcoursAcadémique?: string[];
  DistinctionsEtClassements?: string[];
  Langue?: string[];
  linkedin?: string;
  email?: string;
}

/** Champs traduisibles : ce que teamData.en.ts peut remplacer */
export type TeamMemberTranslation = Partial<Omit<TeamMember, "name" | "image" | "linkedin" | "email">>;
