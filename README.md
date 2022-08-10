# Tech-Blog

## Deployed Application
https://boiling-temple-73920.herokuapp.com</br>

## Description
Tech - Blog — a website where users can post and comment on user content. Tech blog uses Sequelize, an object-relational mapping (ORM) library, to simplify MySQL queries, add password hashing so that users can create secure passwords, and the application is connected to JawsDB, a MySQL add-on for Heroku.

## Technology
Javascript - scripting language </br>

Node.js - runtime environment</br>
- Express Module</br>
- Sequelize Module</br>
- DotEnv Module</br>
- BCrypt Module</br>
- HandleBars</br>
- Express Sessions</br>
- Connect Session Sequelize
    
MySql 2 - relational database</br>

Heroku - app deployment</br>
- JawsDB MySQL - Heroku add on</br>
  
Insomnia - Endpoint testing software</br>

## To Run / Develop
1. clone the repository at https://github.com/robpduo/Tech-Blog.git
2. run `npm install` at the root directory
3. setup mysql database byby opening mysql in the terminal with `mysql -u root -p` followed by `source db/schema.db`
4. seed data into the database tables on node.js using `npm run seed` in the root directory
5. to start the application enter `npm start` and connect to `localhost:3001` in a browser

## Usages
Sign-In
![image](https://user-images.githubusercontent.com/101683611/184024778-be602d16-b69d-47fb-b733-f48ae6202622.png)

Sign-up
![image](https://user-images.githubusercontent.com/101683611/184024856-238aebef-85dc-4107-8574-86ff8a5b26eb.png)

Dashboard
![image](https://user-images.githubusercontent.com/101683611/184025175-25af357b-ced8-40b1-8e03-0d33d38a8287.png)

Edit Posts
![image](https://user-images.githubusercontent.com/101683611/184025261-d5b8df36-c5f8-47d7-a906-b1d7a79c2681.png)

Home Page
![image](https://user-images.githubusercontent.com/101683611/184025462-b10f0888-b587-4be1-ae59-54b2649c1b68.png)



