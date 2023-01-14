import { useParams, Outlet, Link } from 'react-router-dom';
import members from '../../data/db';

function User() {
  const { userId } = useParams();
  const [userInfo] = members.filter(el => el.userId === Number(userId));

  return (
    <div>
      <h1>{userInfo.name}님의 정보</h1>
      <ul>
        <li>{userInfo.name}</li>
        <li>{userInfo.profile}</li>
        <li>
          <Link to="info">...more</Link>
        </li>
      </ul>
      <Outlet
        context={{
          userInfo: userInfo.desc,
        }}
      />
    </div>
  );
}

export default User;
