// server: a computer program or device that provides a service to another computer program and its user
const express = require("express");
const morgan = require("morgan");
const logger = morgan("dev");
const PORT = 4000;

const app = express();
const videoRouter = express();
const userRouter = express();

// req: browser asks you about sth
// res: we respond

app.use(logger);
// get: send request to the browser

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
