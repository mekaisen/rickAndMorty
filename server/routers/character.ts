import { MAX_CHARACTER } from '../constants';
import { prisma } from '../utils/api/prisma';
import { fillDatabase } from '../utils/fillDatabase';

import { publicProcedure, router } from './index';
// interface ips {
//   resolve: string
// }
// function resolveAfterOneSecond(id: string) {
//   return new Promise<ips>((resolve) => {
//     const string = { resolve: `Резолвится через одну секунду${id}` };
//     setTimeout(() => {
//       resolve(string);
//     }, 5000);
//   });
// }

export const characterRouter = router({
  getRandomCharacter: publicProcedure.query(async () => {
    const randomId = Math.round(Math.random() * (MAX_CHARACTER - 1) + 1);
    console.log('randomId', randomId);
    const character = prisma.haracter.findFirst({ where: { id: randomId } });

    await fillDatabase();
    return character;
  })
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
