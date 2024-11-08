import { Link } from '@tanstack/react-router';

import { Button } from '@/components';
import { trpc } from '@/utils/api/trpc';

export const Tinder = () => {
  const getCharacterQuery = trpc.character.getRandomCharacter.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchInterval: false
  });
  const character = getCharacterQuery.data;
  const rateCharacterQuery = trpc.rating.rateCharacter.useMutation({
    onSuccess: () => getCharacterQuery.refetch()
  });
  if (!getCharacterQuery.data || getCharacterQuery.isLoading) {
    return (
      <section className='flex h-full flex-col items-center justify-center'>
        <div className='animate-ping w-[150px] h-[150px] rounded-full bg-sky-400 opacity-75'>
        </div>
      </section>
    );
  }
  return (
    <section className='flex h-full flex-col items-center justify-center'>
      <div className='text-center'>
        <div className='mb-4'><h1 className='font-extrabold text-2xl'>Do you like them all ☄️ ?</h1></div>
        <div className='bg-slate-600 rounded-lg p-6 flex flex-col items-center justify-center mb-4'>
          <span className='text-lg font-medium mb-4'><h2>{ character?.name }</h2></span>
          <div className='rounded-md overflow-hidden w-[250px] mb-8'><img src={character?.image} alt={character?.name} /></div>
          <div className='flex gap-3 w-full'>
            <Button className='ring-2 ring-lime-500 hover:ring-offset-4 ring-offset-slate-600 transition-shadow' onClick={() => { rateCharacterQuery.mutate({ id: character!.id, rate: 'like' }); }} disabled={rateCharacterQuery.isPending}>like</Button>
            <Button className='ring-2 ring-red-500 hover:ring-offset-4 ring-offset-slate-600 transition-shadow' onClick={() => { rateCharacterQuery.mutate({ id: character!.id, rate: 'dislike' }); }} disabled={rateCharacterQuery.isPending}>dislike</Button>
          </div>
        </div>
        <span className='text-xl font-medium'>Show results <Link className='text-sky-500' to='/rating'>here</Link></span>

      </div>

    </section>
  );
};
