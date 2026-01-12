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

## Cross-platform (Windows ↔ macOS) checklist

- **Pin Node version:** the repo includes `.nvmrc` set to `25.2.1`. On each machine run:

```bash
nvm install
nvm use
```

- **Line endings:** `.gitattributes` enforces LF to avoid accidental CRLF issues on macOS.

- **Avoid OS-specific shell commands in `package.json` scripts**: use cross-platform packages when needed:

  - Use `rimraf` instead of `rm -rf` for cross-platform removal.
  - Use `cross-env` to set environment variables in scripts.

- **Paths:** in code, use Node's `path` module instead of hard-coded separators.

- **Reproducible installs:** commit `package-lock.json` (or `yarn.lock`) so installs are deterministic across machines.

- **Recommended local setup (one-time per machine):**

```bash
# install nvm and use .nvmrc
nvm install
nvm use

# install deps
npm install
```

- If you want, I can scaffold a minimal `package.json` with `cross-env` and `rimraf`, and add an install/test script. Tell me if you want me to add that.
