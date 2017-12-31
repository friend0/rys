module.exports = {
  development: {
    connection: "postgres://avnadmin:mmlpfcw0xhm80429@pg-354d56fc-empireryan-6431.aivencloud.com:28800/defaultdb?sslmode=require",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres"
  }
};
