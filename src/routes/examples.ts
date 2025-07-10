// import { zValidator } from "@hono/zod-validator";
// import { and, desc, eq } from "drizzle-orm";
import {
    Hono,
} from "hono";
// import { HTTPException } from "hono/http-exception";
// import { z } from "zod";

// import db from "../db";
// import {  } from "../db/schema/";
// import { } from "../types";

export const exampleRoute = new Hono()
    .get("/examples", async (c) => {
        return c.json("This is an example route", 200);
    });
