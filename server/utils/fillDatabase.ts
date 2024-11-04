import { prisma } from './api/prisma';
import { getCharacter } from './api/request/character';

export const fillDatabase = async () => {
  const haracterCount = await prisma.haracter.count();
  if (haracterCount) return;
  const character = await getCharacter();

  const characterWithImages = character.data.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image
  })
  );
  console.log('database filled');
  if (!characterWithImages) return;

  await prisma.haracter.createMany({ data: characterWithImages });
};
