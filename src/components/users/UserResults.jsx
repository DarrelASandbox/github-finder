import { useEffect, useState } from 'react';
import UserItem from './UserItem';

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('https://api.github.com/users', {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_PAT}`,
      },
    });
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

  const userResults = (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );

  return !isLoading ? userResults : <div className='loading'></div>;
};
export default UserResults;
