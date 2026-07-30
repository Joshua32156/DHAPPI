import { useParams, Navigate } from 'react-router-dom';
import ProfilePage from '@/components/ProfilePage';
import { teamData } from '@/data/teamData';

const TeamMemberProfile = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !teamData[id]) {
    return <Navigate to="/404" replace />;
  }

  return <ProfilePage expertData={teamData[id]} />;
};

export default TeamMemberProfile;
