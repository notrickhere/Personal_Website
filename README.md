# Project (CS5610)

This folder is now prepared to be tracked with Git. Steps to initialize and push to GitHub are below.

## Local Git (run in this project folder)

```bash
# initialize repo
git init

git add .

git commit -m "Initial commit"

# set main branch (optional)
git branch -M main
```

## Create remote and push

Option A — using GitHub CLI (`gh`):

```bash
# creates repo on GitHub and pushes
gh repo create <USERNAME>/<REPO> --public --source=. --remote=origin --push
```

Option B — create repo on GitHub website, then:

```bash
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

## Make Node version persistent (optional)

To make the installed Node version the default for new shells:

```bash
nvm alias default 25.2.1
```

## Notes

- `node_modules/` is ignored by `.gitignore` — do not commit it. Use `package.json` + `package-lock.json` (or `yarn.lock`) to reproduce installs across platforms.
- If you want, I can create the GitHub repo for you (requires `gh` auth) or show exact commands for your username/repo name.