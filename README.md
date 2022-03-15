## About The Project

- Learn modern React by building 4 projects including a Firebase 9 app and a full stack MERN app
- Tutorial for Github Finder App
- [Original Repo: Github Finder App](https://github.com/bradtraversy/github-finder-app)
- [Brad Traversy](https://github.com/bradtraversy)
- [Will Adamas](https://github.com/bushblade)
- [Hassib](https://github.com/hassibmoddasser)

&nbsp;

## API

- [GitHub REST API](https://docs.github.com/en/rest) : To create integrations, retrieve data, and automate your workflows, build with the GitHub REST API.

&nbsp;

## Installation

1. Install NPM packages.

```sh
npm install
```

2. Create .env file in the root folder.

```sh
touch .env
```

3. Enter your information in .env file

```env
REACT_APP_GITHUB_PAT="someGithubPersonalAccessTokenFromDeveloperSettings"
```

&nbsp;

### Notes taken from Cleaning up our actions & axios comment section:

> Isn't it better to have the dispatch inside the searchUsers function in GithubContext?

> No. The reason would be that every time you update your context state that you re declare all your action functions as the component re renders, which is costly in terms of performance and unnecessary. Then with providing all those functions via the Provider they change every time you update the context state, which then triggers infinite renders if you pass one of those functions as a dependency to useEffect.
> The linter warns you about this, but Brad chose to ignore the linter warnings until the refactor.
> By moving all the action functions outside for the Provider component it guarantees that they stay the same and are not recreated on every render, this is vastly more performant and doesn't trigger infinite renders if passed as a useEffect dependency because the function never changes.
