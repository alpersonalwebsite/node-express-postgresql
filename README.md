# Node, Express and PostgreSQL

[![Greenkeeper badge](https://badges.greenkeeper.io/alpersonalwebsite/node-express-postgre.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.com/alpersonalwebsite/node-express-postgre.svg?branch=master)](https://travis-ci.com/alpersonalwebsite/node-express-postgre)

`Node + Express` (locally) connecting, querying, parsing and retrieving to /x endpoint *1000 users* from an external sever (`isilo.db.elephantsql.com`).
The *MAIN* purpose of this repo is to `benchmark performance`

## Installation
```
yarn install
```
## Running the server

### Development
```
npm run dev
```

### Production
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

---

## Notes
**This is unrelated to the project; however, if you want to utilize a similar CI/CD pipeline, you can follow the instructions beneath**

First, be sure that you connect `Travis CLI` (*.org or *.com) with your `GitHub` account setting the proper permissions. Once this is done, you should be able to see all your "repos" in Travis dashboard.

Then, set-up an account in `heroku` and create a `new App`.

Through the heroku CLI or dashboard add your `environment variables` (secrets, or Config Vars) which is the content that we have in our `.env` and we use for development. **REMEMBER: Never integrate secrets or configurations files to control versioning**
Then, click in `More` (top right corner) and then in `Restart all dynos`.

Install `Travis CLI`.
```
gem install travis
```

Copy the `API key` from https://dashboard.heroku.com/account

In the terminal, execute the command to encrypt the `API key`
```
travis encrypt API key
```

I will return a JSON output like:
```
secure: "thiIsTheEncryptedApiKEY"
```

At the root level of your repo, create the file `.travis.yml`
1. For the moment we are going to `skip tests` (`Travis` will try to run `npm test` or `yarn test` by default)
2. Replace the value of `secure` with the encrypted value of your `API key`, example: "thiIsTheEncryptedApiKEY"
3. In `app`, set as value the name of your `heroku app`
4. In `repo`, your repository.

Now, make a change to "x-file", add/commit/push. If everything went well, once you "integrate your code to `Git`", `Travis` will start the build (you can see the process in Travis console) and deploy to `Heroku`.  
Now, you should be able to go to: https://your-app-name.herokuapp.com/ and interact with your application.