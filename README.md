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
- Everything is camelCase: from database columns to class name, attribute...
