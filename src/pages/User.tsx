import { useParams } from 'react-router-dom';
import members from '../data/db';

function User() {
  const { userId } = useParams();
  const userInfo = members.filter(el => el.userId === Number(userId));

  return (
    <div>
      <h1>{userInfo[0].name}님의 정보</h1>
      <ul>
        <li>{userInfo[0].name}</li>
        <li>{userInfo[0].profile}</li>
      </ul>
    </div>
  );
}

export default User;
