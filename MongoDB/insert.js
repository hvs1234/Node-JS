const dbConnect = require("./mongodb");
const data = require("./insertAPI")

const insertdata = async () => {
  let db = await dbConnect();
  const result = await db.insertMany(data);
  console.log(result);
};
module.exports = insertdata;
