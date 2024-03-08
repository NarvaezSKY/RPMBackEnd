//imports
import app from "./app.js";
import { PORT } from "./config/config.js";
import { connection } from "./database/db.js";


//main function
async function main() {
  try {
    connection();

    //using the enviroment port in app
    app.listen(PORT);
    //log for the port
    console.log(`Listening on port ${PORT}`);
  } catch (error) {
    //log if there's something wrong
    console.error(error);
  }
}
//executing main function
main();
