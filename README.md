## Project setup

```bash
$ yarn install
$ yarn add @nestjs/typeorm typeorm pg
```

## Compile and run the project

```bash
# development
# we use swc for faster compilation
$ yarn run start
# or
$ nest start

# watch mode
$ yarn run start:dev
# production mode
$ yarn run start:prod
```

## Adding a new module in the modules directory
```bash
nest generate resouce modules/<module_name>
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

## Google OAuth flow
1. Create an app in google cloud console
2. Update Authorized JavaScript origins to: http://localhost:3000
3. Update Authorized redirect URIs to: http://localhost:3000/auth/google/callback
4. Update data access scope to email & profile info

Frontend
   ↓
Backend → /auth/google
   ↓
Google SSO screen
   ↓
Backend callback (/auth/google/callback)
   ↓
Redirect to frontend

## Coding convention
- Use nest cli to generate resource: module, class, controller...
- Table naming: singular (maps cleanly to TypeORM entity)
- Camel case: class name, class attribute (JS, TS convention), DTOs, response Data
- UPPER_SNAKE_CASE for constants.
- Snake case: table name, column name because PostgreSQL folds all names - of tables, columns, functions and everything else - to lower case unless they're "double quoted".
- Folder & api path: kebab-case because hyphens are easy to read in a URL and are universally supported across different systems and programming languages
- DTO → class (validation, decorators). Interface → internal typing only
