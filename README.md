# MEAN Socket Messenger

The project is under active development. At the current stage you're able to chat only with local users on your machine (e.g. using different browsers or an incognito mode). See additional info below.

## Features

* You have to sign up to use this messenger. Note that your passwords are never stored in raw but get encrypted with [crypto sha-512]
* Your access token lives 7 days
* On the main page you can see a list of all users
* Choose one of them to start chatting

## Todo

* Save message history to MongoDB
* Load message history for opened chat
* Implement normal design (don't read it as "beautiful")
* Load messages that have been sent while you where offline
* Push notifications on new messages

## To run the project

1. Clone this repository
1. `npm install`
1. Meanwhile, create a `.env` file in the root directory, with following content:
   ```text
   PORT=4201
   JWT_SECRET_KEY=<any random string here>
   ```
1. Run `mongod` process (you need [MongoDB][install mongodb] installed)
1. `npm run server`
1. `npm start` and navigate to `http://localhost:4200`, or just use an `npm start -- -o` command

### Questions? [Ask them!](mailto:alex94orlovsky@gmail.com)

---

##### This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

[crypto sha-512]: https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest
[install mongodb]: https://docs.mongodb.com/manual/installation/
