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
app.use(express.static("public"));
app.use(cors());

app.use("/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/films", filmsRouter);
app.use("/api/nominations", nominationsRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/collaborators", collaboratorsRouter);

const PORT = process.env.PORT || 5050;

// auth router is for management of the edit/put requests - only the separate frontend connects to auth router.
// the front end to edit the data will be auth-protected and will be separate to the other website
// do not need auth in order to get the

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
