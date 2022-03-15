import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => (
  <div className='card shadow-md card-compact card-side bg-base-100'>
    <div className='flex-row items-center space-x-4 card-body'>
      <div>
        <div className='avatar'>
          <div className='rounded-full shadow w-14 h-14'>
            <img src={avatar_url} alt='profile' />
          </div>
        </div>
      </div>

      <Link to={`/user/${login}`}>
        <div>
          <h2 className='card-title'>{login}</h2>
        </div>
      </Link>
    </div>
  </div>
);

export default UserItem;
