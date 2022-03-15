import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_PAT;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    if (response.status === 404) window.location = '/notfound';
    else {
      const data = await response.json();
      dispatch({ type: 'GET_USER', payload: data });
    }
  };

  const searchUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: { Authorization: `token ${GITHUB_TOKEN}` },
      }
    );

    if (response.status === 404) window.location = '/notfound';
    else {
      const data = await response.json();
      dispatch({ type: 'GET_USER_REPOS', payload: data });
    }
  };

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        searchUser,
        searchUserRepos,
        setLoading,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
