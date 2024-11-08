import { trpc } from '../../utils/api/trpc/trps';

export const Rating = () => {
  const getCharactersQuery = trpc.character.getCharacters.useQuery();
  const character = getCharactersQuery.data;
  const sortedCharacter = character?.sort((a, b) => (b.likes - a.likes));
  return (
    <div className='flex gap-4 flex-col items-center max-w-[850px] m-auto'>
      {sortedCharacter?.map((char) => {
        const allVotes = (char.likes + char.dislikes) || 1;
        return (
          <div key={char.id} className='bg-slate-900 bg-opacity-20 border-[1px] border-gray-900 border-opacity-30 p-4 rounded-md grid grid-cols-[auto_1fr_1fr_1fr_1fr] grid- gap-4 w-full items-center justify-items-center shadow-xl shadow-slate-900/20 '>
            <div className='w-36 h-36 rounded-md overflow-hidden animate-fade-in'><img src={char.image} alt={char.name} /></div>
            <div className='font-bold text-balance max-w-32 text-center'>{char.name}</div>
            <div>likes: <span className='font-bold text-lg'>{char.likes}</span></div>
            <div>dislikes: <span className='font-bold text-lg'>{char.dislikes}</span></div>
            <div>Percent: <span className='font-bold text-lg'>{Math.round((char.likes / allVotes) * 100)}%</span></div>
          </div>
        );
      })}
    </div>
  );
};
