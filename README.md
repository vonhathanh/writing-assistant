## Project setup

```bash
$ yarn install
$ yarn add @nestjs/typeorm typeorm pg
```

## Compile and run the project

```bash
# development
# we use swc for faster compilation
$ yarn run start --b -b swc

# watch mode
$ yarn run start:dev --b -b swc

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
## Coding convention
- Use nest cli to generate resource: module, class, controller...
- Camel case: class name, class attribute (JS, TS convention)
- Snake case: table name, column name because PostgreSQL folds all names - of tables, columns, functions and everything else - to lower case unless they're "double quoted".
- Folder & api path: kebab-case because hyphens are easy to read in a URL and are universally supported across different systems and programming languages
