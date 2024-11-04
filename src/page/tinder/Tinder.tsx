import { Button } from '../../components/Button/Button';
import { trpc } from '../../utils/api/trpc/trps';

export const Tinder = () => {
  const getCharacterQuery = trpc.character.getRandomCharacter.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchInterval: false
  });
  const character = getCharacterQuery.data;
  const rateCharacterQuery = trpc.rating.rateCharacter.useMutation({
    onSuccess: () => getCharacterQuery.refetch()
  });
  console.log(rateCharacterQuery.isPending);
  return (
    <section className='flex h-full flex-col items-center justify-center'>
      <div>
        <div className='mb-4'><h1 className='font-extrabold text-2xl'>Do you like them all ☄️ ?</h1></div>
        <div className='bg-slate-600 rounded-lg p-6 flex flex-col items-center justify-center '>
          <span className='text-lg font-medium mb-4'><h2>{ character?.name }</h2></span>
          <div className='rounded-md overflow-hidden w-[250px] mb-8'><img src={character?.image} alt={character?.name} /></div>
          <div className='flex gap-3 w-full'>
            <Button onClick={() => { rateCharacterQuery.mutate({ id: character!.id, rate: 'like' }); }} disabled={rateCharacterQuery.isPending}>like</Button>
            <Button onClick={() => { rateCharacterQuery.mutate({ id: character!.id, rate: 'dislike' }); }} disabled={rateCharacterQuery.isPending}>dislike</Button>
          </div>
        </div>

      </div>

    </section>
  );
};
