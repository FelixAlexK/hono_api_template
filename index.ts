import app from "./src/app";

const server = Bun.serve({
  port: 3000,
  hostname: "0.0.0.0",
  fetch: app.fetch,
});

console.log("Server is running", server.port);
