# Node, Express and PostgreSQL

[![Greenkeeper badge](https://badges.greenkeeper.io/alpersonalwebsite/node-express-postgre.svg)](https://greenkeeper.io/)

`Node + Express` (locally) connecting, querying, parsing and retrieving to /x endpoint *1000 users* from an external sever (`isilo.db.elephantsql.com`).
The *MAIN* purpose of this repo is to `benchmark performance`

## Installation
```
yarn install
```
## Running the server

```
npm start
```

## API endpoints or routes 

### Home or / 
Returns: `object`
```
{
message: "Node.js, Express, and Postgres API"
}
```
### Users or /users
Returns: 1000 records - `array of objects`
```
[
    {
      user_id: 1,
      name: "Johnathon",
      lastname: "Grimes",
      email: "tssvjkoUc",
      age: 78
    },
    {
      user_id: 2,
      name: "Arlo",
      lastname: "Conway",
      email: "XVFWcLTJ",
      age: 21
    },
    {
      user_id: 3,
      name: "Gabrielle",
      lastname: "Watts",
      email: "1chQ",
      age: 18
    }
    ...
    ...
    ...
]
```

## Benchmarking 
```
curl http://localhost:3002/users -w "%{time_connect},%{time_total},%{speed_download},%{http_code},%{size_download},%{url_effective}\n" -o /dev/null
```

Note: replace `3002` with the port shown in your terminal.

Example result:
```
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 78341  100 78341    0     0   165k      0 --:--:-- --:--:-- --:--:--  164k
```