import { createFileRoute } from '@tanstack/react-router';

import { useGetCharacterById } from '../utils/api/tQuery/hooks/useGetCharacterById';

const Glav = () => {
  const getCharacterById = useGetCharacterById('1');

  return (
    <div>
      <div>{getCharacterById.data?.data.name}</div>
      <img src={getCharacterById.data?.data.image} alt='' />
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Glav
});
