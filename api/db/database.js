// database.js

const { Sequelize } = require("sequelize");

class Database {
  constructor(connection_string) {
    this.sequelize = new Sequelize(connection_string);
  }

  async authenticate() {
    try {
      await this.sequelize.authenticate();
      console.log("Veritabanı bağlantısı başarılı.");
    } catch (error) {
      console.error("Veritabanına bağlanırken bir hata oluştu:", error);
      process.exit(1);
    }
  }
}

module.exports = Database;
