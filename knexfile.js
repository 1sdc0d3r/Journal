// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/Journal.db3"
    },
    useNullAsDefault: true,
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

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/Journal.db3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      }
    }
    // client: "postgresql",
    // connection: {
    //   database: "my_db",
    //   user: "username",
    //   password: "password"
    // },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: "knex_migrations"
    // }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./__test__"
    },
    useNullAsDefault: true
    // migrations: {
    //   directory: "./data/migrations"
    // },
    // seeds: {
    //   directory: "./data/seeds"
    // }
  }
};
