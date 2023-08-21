const mongoose = require("mongoose");
const app = require("./app");

mongoose.set("strictQuery", true);

const { DB_URI, PORT = 3000 } = process.env;

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });
