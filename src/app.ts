import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();
app.use("*", logger());

const _apiRoutes = app.basePath("/api");

export default app;
