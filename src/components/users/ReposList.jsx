import ReposItem from './ReposItem';

const ReposList = ({ repos }) => (
  <div className='rounded-lg shadow-lg card bg-base-100'>
    <div className='card-body'>
      <h2 className='text-3xl my-4 font-bold card-title'>
        Latest Repositories
      </h2>
      {repos.map((repo) => (
        // <RepoItem key={repo.id} repo={repo} />
        <ReposItem key={repo.id} repo={repo} />
      ))}
    </div>
  </div>
);
export default ReposList;
