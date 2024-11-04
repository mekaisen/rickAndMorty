import { getCharacter } from '../api/axios';
import { prisma } from '../db/prisma';

export const fillDataBase = async () => {
  const haracterCount = await prisma.haracter.count();
  console.log(haracterCount);
  console.log('database filled');
  if (haracterCount) return;
  const character = await getCharacter();
  const characterWithImages = character.data.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image
  })
  );
  if (!characterWithImages) return;

  prisma.haracter.createMany({ data: characterWithImages });
};
