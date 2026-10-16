import { useParams, Navigate } from 'react-router-dom';
import ProfilePage from '@/components/ProfilePage';
import { getTeamData } from '@/data/team';
import { useLanguage } from '@/i18n/LanguageContext';

const TeamMemberProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLanguage();
  const teamData = getTeamData(lang);

  if (!id || !teamData[id]) {
    return <Navigate to="/404" replace />;
  }

  return <ProfilePage expertData={teamData[id]} />;
};

export default TeamMemberProfile;
