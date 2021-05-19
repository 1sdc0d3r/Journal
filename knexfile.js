// const pgUser = process.env.PG_USER || "jackBarry";
// const pgDb = process.env.PG_DB || "password";
// const prodConnection = `postgres://${pgUser}@localhost/${pgDb}`;

module.exports = {
  // development: {
  //   client: "pg", //sqlite3
  //   // connection: "postgres://username:password@hostname:port/database"
  //   connection: "postgresql://localhost/MicroJournal",
  //   // connection: "postgres://postgres:password@localhost:5432/MicroJournal",
  //   migrations: {
  //     directory: "./database/migrations",
  //     tableName: "knex_migrations"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   seeds: {
  //     directory: "./database/seeds"
  //   }
  // },
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/Journal.db3"
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    useNullAsDefault: true,
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/JournalTest.db3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      }
    }
  },
  // testing: {
  //   client: "pg",
  //   connection: "postgresql://localhost/testing",
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     directory: "./database/migrations",
  //     tableName: "knex_migrations",
  //   },
  // },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL, //this is what PG on HEROKU looks for
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};

// connection: "postgres:// username : password @ addressToServer:5432 / databaseName"
// connection: {
//   host: 'db.ourcompany.com',
//   user: 'me',
//   password: 'mini me',
//   database: 'school'
// }}
