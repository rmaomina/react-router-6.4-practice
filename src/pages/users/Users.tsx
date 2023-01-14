import { Link, Outlet } from 'react-router-dom';
import members from '../../data/db';

function Users() {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {members.map(member => {
          return (
            <li key={member.userId}>
              <Link to={`${member.userId}`}>{member.name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

export default Users;
