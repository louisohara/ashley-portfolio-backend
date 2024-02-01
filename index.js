app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
