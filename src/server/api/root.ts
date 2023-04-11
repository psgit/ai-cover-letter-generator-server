import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { jobRouter } from "./routers/job";
import { openaiConfigurationRouter } from "./routers/openaiConfiguration";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  job: jobRouter,
  openaiConfiguration: openaiConfigurationRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
