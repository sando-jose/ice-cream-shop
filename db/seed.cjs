const client = require("./client.cjs");

const dropTables = async () => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS flavors`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { dropTables };
