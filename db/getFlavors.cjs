const client = require("./client.cjs");

const getFlavors = async () => {
  try {
    const { rows } = await client.query(`
      SELECT flavor FROM flavors;`);

    return rows;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getFlavors };
