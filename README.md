NodeJs and ExpressJs with PostgreSQL

First setup the nodejs and expressjs with typescript

Then proceed with configuring the database which is PostgreSQL
install this packages to get started

- npm install sequelize pg pg-hstore
- npm install @types/sequelize @types/pg // This is for typescript

after installing that put this code in your desired file

- Go to file PostgreSQL/server/utls/sequelize.ts => this file configures the database using ORM Sequelize package
- After that go to PostgreSQL/server/utls/connectDb.ts => This checks if the database is connected or not
