# NxTodoFrontend

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the application

Run `npx nx serve webapp` to start the development server. Happy coding!

## Build for production

Run `npx nx build webapp` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

## Command line

```
mkdir nx-todo-frontend
npx create-nx-workspace@latest nx-todo-frontend --preset=react-monorepo
Application name · webapp
nx g @nx/react:library design-system --directory libs/design-system --unitTestRunner=jest --bundler=none
nx g @nx/react:setup-tailwind --project=design-system
nx g @nx/react:storybook-configuration --project=design-system
nx run design-system:storybook

nx g @nx/react:library theme --directory libs/theme --unitTestRunner=jest --bundler=none
nx g @nx/react:library query --directory libs/query --unitTestRunner=jest --bundler=none
nx g @nx/react:library i18n --directory libs/i18n --unitTestRunner=jest --bundler=none
nx g @nx/react:library fonts --directory libs/fonts --unitTestRunner=jest --bundler=none

nx g @nx/js:lib api --directory libs/api --unitTestRunner=jest --bundler=none
nx g @nx/js:lib hooks --directory libs/hooks --unitTestRunner=jest --bundler=none
nx g @nx/js:lib types --directory libs/types --unitTestRunner=jest --bundler=none
nx g @nx/js:lib utils --directory libs/utils --unitTestRunner=jest --bundler=none
nx g @nx/js:lib models --directory libs/models --unitTestRunner=jest --bundler=none

nx g @nx/jest:configuration --project=webapp
```

## i18n
Initial setup
```
mkdir locale
rm -rf /Users/home/learn/github/nx-todo/nx-todo-frontend/apps/webapp/public/translations/*
rm -rf /Users/home/learn/github/nx-todo/nx-todo-frontend/locale/*.json
rm /Users/home/learn/github/nx-todo/nx-todo-frontend/apps/list.txt
```

Find all the typescript files and put them into the "list" file
```
cd /Users/home/learn/github/nx-todo/nx-todo-frontend/apps/webapp/src
find . -type f \( -name '*.ts' -or -name '*.tsx' \) -print > ../../../list.txt
cd ../../..
```

Extract the translation words from the code
```
xgettext --files-from=list.txt -c -d translations -p locale --language=Python --from-code=utf-8 --keyword=_ --keyword=_:1 --keyword=_n:1,2 --keyword=_c:1c,2 --keyword=_cn:1c,2,3 -D /Users/home/learn/github/nx-todo/nx-todo-frontend/apps/webapp/src
```

Move the generated PO file to POT file
```
mv locale/translations.po locale/translations.pot
```

Creating the PO files translation by language
```
msginit -i locale/translations.pot --locale=en_EN -o locale/en.po
msginit -i locale/translations.pot --locale=fr_FR -o locale/fr.po
msginit -i locale/translations.pot --locale=es_ES -o locale/es.po
```

Updating the PO files translation by language
```
msgmerge locale/en.po locale/translations.pot -o locale/en.po
msgmerge locale/fr.po locale/translations.pot -o locale/fr.po
msgmerge locale/es.po locale/translations.pot -o locale/es.po
```

Manually updating the PO files translation by language

Generate the JSON files translation by language
```
npm run po2jsonEN
npm run po2jsonES
npm run po2jsonFR
```

Finally, remove the "list" file
```
rm /Users/home/learn/github/nx-todo/nx-todo-frontend/list.txt
```

## e2e

To open UI mode, run the following command in your terminal:
```
nx e2e webapp --ui
```

Use the codegen command to run the test generator followed by the URL of the website you want to generate tests for.
```
npx playwright codegen http://localhost:4200/
```

## Design System
Run `nx run design-system:storybook` to see the Design System components in storybook app.

# Linters

## Eslint
```
nx lint webapp
```

# npm-check-updates
Upgrades your package.json dependencies to the latest versions, ignoring specified versions.

```
sudo npm install -g npm-check-updates
ncu
ncu postcss -u
ncu --format group
```

# Migrate

```
nx migrate latest
sudo npm add --global nx@latest

npx storybook@latest upgrade --config-dir=libs/design-system/.storybook
```
