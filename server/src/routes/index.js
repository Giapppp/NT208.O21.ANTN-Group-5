import authRouter from "./auth";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  return app.use("/", (req, res) => {
    res.json({ data: "Hello from server" });
  });
};

export default initRoutes;
