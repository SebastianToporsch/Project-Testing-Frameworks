//Setup express and firebase
import express from 'express';


import { index } from './Routes/routes.js';



const app = express();
const port = 3000;

//Setup pug
app.set('view engine', 'pug');






app.use("/", index);

// Start listening on port 3000.
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`));

export default app