# Node, Express and PostgreSQL

[![Greenkeeper badge](https://badges.greenkeeper.io/alpersonalwebsite/node-express-postgre.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.com/alpersonalwebsite/node-express-postgre.svg?branch=master)](https://travis-ci.com/alpersonalwebsite/node-express-postgre)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)


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

#### Query string parameters

**Limit users**

Returns `n` record(s) where `n` is the value (type: Number) of the `limit` key.

Example: `users?limit=1`

Result
```
[
  {
    user_id: 1,
    name: "Johnathon",
    lastname: "Grimes",
    email: "tssvjkoUc",
    age: 78
  }
]
```

Wrong type for `n` value will return *all the users*.
Example: `users?limit=%27Hello%27`


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

### CI/CD
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

### Eslint 
I have `eslint` installed `globally` in my device, so I also had to install `globally` the following packages:

```
npm install -g eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react slint-plugin-standard
```

You can check that you have them executing: 
```
npm list -g --depth 0`

```

Example result:
```
/usr/local/lib
├── eslint@5.16.0
├── eslint-config-standard@12.0.0
├── eslint-plugin-import@2.17.2
├── eslint-plugin-node@8.0.1
├── eslint-plugin-promise@4.1.1
├── eslint-plugin-react@7.12.4
├── eslint-plugin-standard@4.0.0
├── flow-bin@0.97.0
├── gatsby-cli@2.5.12
├── jshint@2.10.2
└── npm@6.7.0
```

For running the linter:
```
yarn run lint
```

For fixing the issues:
```
yarn run fix
```

Examples...

```
yarn run lint
```

Output:
```
/Users/*/node-express-postgre/index.js
   1:35  error  Extra semicolon                                semi
   2:42  error  Extra semicolon                                semi
   5:7   error  'port' is assigned a value but never used      no-unused-vars
   5:38  error  Extra semicolon                                semi
   7:22  error  Extra semicolon                                semi
  10:1   error  Expected indentation of 2 spaces but found 4   indent
  11:1   error  Expected indentation of 4 spaces but found 8   indent
  12:1   error  Expected indentation of 2 spaces but found 4   indent
  13:2   error  Extra semicolon                                semi
  15:27  error  Extra semicolon                                semi
  18:1   error  Expected indentation of 2 spaces but found 4   indent
  19:1   error  Expected indentation of 4 spaces but found 8   indent
  20:1   error  Expected indentation of 2 spaces but found 4   indent
  26:1   error  Expected indentation of 2 spaces but found 4   indent
  27:3   error  Newline required at end of file but not found  eol-last

/Users/*/node-express-postgre/queries.js
   1:27  error  Extra semicolon                                semi
   5:1   error  Expected indentation of 2 spaces but found 4   indent
   6:1   error  Expected indentation of 2 spaces but found 4   indent
   7:1   error  Expected indentation of 2 spaces but found 4   indent
   8:1   error  Expected indentation of 2 spaces but found 4   indent
   9:1   error  Expected indentation of 2 spaces but found 4   indent
  13:1   error  Expected indentation of 2 spaces but found 4   indent
  14:1   error  Expected indentation of 4 spaces but found 8   indent
  15:1   error  Expected indentation of 6 spaces but found 12  indent
  16:1   error  Expected indentation of 4 spaces but found 8   indent
  17:1   error  Expected indentation of 4 spaces but found 8   indent
  18:1   error  Expected indentation of 2 spaces but found 4   indent
  22:1   error  Expected indentation of 2 spaces but found 4   indent
  23:2   error  Newline required at end of file but not found  eol-last

✖ 29 problems (29 errors, 0 warnings)
  28 errors and 0 warnings potentially fixable with the `--fix` option.

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Then...
```
yarn run fix
```

Output:
```
yarn run v1.15.2
$ eslint *.js --ignore-pattern node_modules/
Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .

/Users/*/node-express-postgre/index.js
  5:7  error  'port' is assigned a value but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

**Great! It fixed 28 issues for us** 

Run the linter again...
```
yarn run lint
```

We should have a clean output:
```
yarn run v1.15.2
$ eslint *.js --ignore-pattern node_modules/
Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .
✨  Done in 1.28s.
```