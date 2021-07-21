# Node, Express and PostgreSQL

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Overview

This is an easy, basic and raw example of **HOW to** implement an API with Node, Express and PostgreSQL (with Sequelize ORM).

## Requirements

- Node 12+
- NPM
- PostgreSQL
- Sequelize ORM
- Optional: ElephantSQL account

## Install dependencies

To avoid issues with `husky`, first enable `git hooks` (and add our hook):

```shell
npx husky install

npx husky add .husky/pre-commit
```

Then, install the dependencies as usual:

```shell
npm install
```

## DB

### Create database

```shell
createdb users
```

### Populate data

```shell
psql users
```

#### Add data to users table

```sql
COPY users(id, firstname, lastname, age, gender, username, company, email, phone, address, created_at, updated_at)
FROM '/Users/your-user/data/node-express-postgresql/users.csv'
DELIMITER ','
CSV HEADER;
```

### Dump data from local DB to external

```shell
pg_dump postgres://your-user:your-password@127.0.01/agency | psql postgres://your-user:your-password@your-endpoint.db.elephantsql.com/your-database-name
```

## Running the server

### Development

```shell
npm run dev
```

### Production

```shell
npm run build

npm start
```

## API endpoints

### GET /api/users

- Returns an object with the key data containing an array of objects with `40 records`.
- Supports query string:
  - ?limit=integer
  - ?offset=integer

#### Request:

```shell
curl http://127.0.0.1:3333/api/users
```

#### Sample response:

```json
{
  "data": [
    {
      "id": 1,
      "firstname": "Christian",
      "lastname": "Deackes",
      "age": 36,
      "gender": "Genderqueer",
      "username": "cdeackes0",
      "company": "Eayo",
      "email": "cdeackes0@mit.edu",
      "phone": "602-240-5463",
      "address": "53 Lakewood Plaza",
      "createdAt": "2020-11-30T08:00:00.000Z",
      "updatedAt": "2021-03-28T07:00:00.000Z"
    },
    {
      "id": 2,
      "firstname": "Staford",
      "lastname": "Noice",
      "age": 27,
      "gender": "Female",
      "username": "snoice1",
      "company": "Oyoloo",
      "email": "snoice1@si.edu",
      "phone": "951-811-1800",
      "address": "18298 Crest Line Road",
      "createdAt": "2021-06-30T07:00:00.000Z",
      "updatedAt": "2021-07-14T07:00:00.000Z"
    }
  ]
}
```

#### Query string

##### GET /api/users?limit=1

- Returns `n` record(s) where `n` is the value (type: Number) of the `limit` key.

###### Request:

```
curl http://127.0.0.1:3333/api/users?limit=1
```

###### Response:

```json
{
  "data": [
    {
      "id": 1,
      "firstname": "Christian",
      "lastname": "Deackes",
      "age": 36,
      "gender": "Genderqueer",
      "username": "cdeackes0",
      "company": "Eayo",
      "email": "cdeackes0@mit.edu",
      "phone": "602-240-5463",
      "address": "53 Lakewood Plaza",
      "createdAt": "2020-11-30T08:00:00.000Z",
      "updatedAt": "2021-03-28T07:00:00.000Z"
    },
  ]
}
```

Wrong type for `n` value will return _all the users_.
Example: `users?limit=%27Hello%27`

##### GET /api/users?offset=10

- Returns from `n` (PRIMARY KEY) where `n` is the value (type: Number) of the `offset` key.

###### Request:

```
curl http://127.0.0.1:3333/api/users?offset=10
```

###### Response:

```json
{
  "data": [
    {
      "id": 11,
      "firstname": "Goldie",
      "lastname": "Dany",
      "age": 88,
      "gender": "Female",
      "username": "gdanya",
      "company": "Devcast",
      "email": "gdanya@berkeley.edu",
      "phone": "954-161-7922",
      "address": "68 Drewry Plaza",
      "createdAt": "2021-03-28T07:00:00.000Z",
      "updatedAt": "2021-03-19T07:00:00.000Z"
    },
    {
      "id": 12,
      "firstname": "Kial",
      "lastname": "Hamberstone",
      "age": 53,
      "gender": "Male",
      "username": "khamberstoneb",
      "company": "Skipfire",
      "email": "khamberstoneb@yellowpages.com",
      "phone": "896-244-3662",
      "address": "68425 Buell Point",
      "createdAt": "2020-10-11T07:00:00.000Z",
      "updatedAt": "2021-06-02T07:00:00.000Z"
    }
  ]
}
```

### GET /latency

- Returns an object with a delay of 1 second (default)
- Supports query string:
  - ?limit=integer
  - ?offset=integer

#### Request:

```
curl http://127.0.0.1:3333/latency
```

#### Response:

```json
{
  "data": "Thanks for waiting 1 second"
}
```

#### Query string

##### GET /latency?delay=2000

- Increases latency (delay) to `n` milliseconds where, _min:1000_ and _max:4000_. Default value: 1000ms.

Wrong type for `n` value will produce a default delay of 1000ms.

###### Request:

```
curl http://127.0.0.1:3333/latency?delay=2000
```

###### Response:

```json
{
  "data": "Thanks for waiting 2 seconds"
}
```

### GET everything else

- Any other endpoint will retrieve an object

#### Request:

```
curl http://127.0.0.1:3333/
```

#### Response:

```json
{
  "message": "Node.js, Express, and PostgreSQL API!"
}
```