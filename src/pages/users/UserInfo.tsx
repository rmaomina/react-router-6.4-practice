import { useOutletContext } from 'react-router-dom';

interface UserInfoConText {
  userInfo: string;
}

function UserInfo() {
  const { userInfo } = useOutletContext<UserInfoConText>();

  return (
    <div>
      <h1>{userInfo}</h1>
    </div>
  );
}

export default UserInfo;
