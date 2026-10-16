import type { Lang } from "@/i18n/LanguageContext";
import type { TeamMember } from "./types";
import { teamData } from "./teamData";
import { teamDataEn } from "./teamData.en";

export const getTeamData = (lang: Lang): Record<string, TeamMember> => {
  if (lang === "fr") return teamData;
  return Object.fromEntries(
    Object.entries(teamData).map(([id, member]) => [id, { ...member, ...(teamDataEn[id] ?? {}) }])
  );
};
