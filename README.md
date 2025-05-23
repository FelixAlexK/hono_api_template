# hono_api_template

A minimal template for building fast, modern REST APIs using [Hono](https://hono.dev/) and [Bun](https://bun.sh).

## What is this template for?

This template provides a simple, ready-to-use starting point for developing RESTful APIs with:

- **Hono**: a lightweight, high-performance web framework for JavaScript/TypeScript.
- **Bun**: an all-in-one JavaScript runtime, bundler, and package manager.

It includes:

- Basic project structure with TypeScript support
- Pre-configured ESLint for code quality
- Example logger middleware
- `/api` base path for your endpoints

## How to use

### 1. Install dependencies

```bash
bun install
```

### 2. Start the development server

```bash
bun run dev
```

The server will start on `http://localhost:3000`.

### 3. Add your API routes

Edit `src/app.ts` to add your endpoints under the `/api` base path.
For example:

```ts
app.get("/api/hello", c => c.text("Hello, world!"));
```

### 4. Lint your code

```bash
bun run lint
```

### 5. Format and fix code style issues

```bash
bun run lint:fix
```

---

This project was created using `bun init` in bun v1.2.13.
