import { z } from 'zod';

import { prisma } from '../utils/api/prisma';

import { publicProcedure, router } from '.';

export const ratingRouter = router({
  rateCharacter: publicProcedure
    .input(z.object({
      id: z.number(),
      rate: z.union([z.literal('like'), z.literal('dislike')])
    }))
    .mutation(async ({ input }) => {
      const updateCharacter = prisma.haracter.update({
        where: { id: input.id },
        data: {
          ...(input.rate === 'like' && {
            likes: {
              increment: 1
            }
          }),
          ...(input.rate === 'dislike' && {
            dislikes: {
              increment: 1
            }
          })
        }
      });
      console.log(updateCharacter);
      return updateCharacter;
    })
});
