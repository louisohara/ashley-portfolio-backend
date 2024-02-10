const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const authRouter = require("./routes/authRouter");
const usersRouter = require("./routes/usersRouter");
const filmsRouter = require("./routes/filmsRouter");
const nominationsRouter = require("./routes/nominationsRouter");
const reviewsRouter = require("./routes/reviewsRouter");
const collaboratorsRouter = require("./routes/collaboratorsRouter");
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/films", filmsRouter);
app.use("/api/nominations", nominationsRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/collaborators", collaboratorsRouter);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
