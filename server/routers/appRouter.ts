import { characterRouter } from './character';
import { ratingRouter } from './rating';
import { router } from '.';

export const appRouter = router({
  character: characterRouter,
  rating: ratingRouter
});

export type AppRouter = typeof appRouter;
