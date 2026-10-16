import type { Lang } from "@/i18n/LanguageContext";
import { teamData } from "./teamData";
import { teamDataEn } from "./teamData.en";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTeamData = (lang: Lang): Record<string, any> => {
  if (lang === "fr") return teamData;
  return Object.fromEntries(
    Object.entries(teamData).map(([id, member]) => [id, { ...member, ...(teamDataEn[id] ?? {}) }])
  );
};
