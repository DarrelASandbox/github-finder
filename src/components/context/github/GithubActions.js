const GITHUB_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_PAT;

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });

  const { items } = await response.json();

  return items;
};
