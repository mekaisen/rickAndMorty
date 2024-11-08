import { useGetCharacterForPagination } from '@/utils/api/tQuery/hooks/useGetCharacterForPagination';
import { useInterseption } from '@/utils/hooks';

export const InfScroll = () => {
  const getPagination = useGetCharacterForPagination();
  const cursor = useInterseption(() => getPagination.fetchNextPage());
  const characters = getPagination.data as unknown as Character[];
  if (getPagination.isLoading) {
    return (<div>Loading</div>);
  }

  return (
    <section className='w-full grid grid-cols-[275px_275px_275px_275px] justify-center gap-10 mt-5'>
      {characters.map((char) => (

        <div key={char.id} className='text-center '>
          <div className='bg-slate-600 rounded-lg p-4 flex flex-col items-center justify-center  h-full'>
            <span className='text-lg font-medium mb-2'><h2>{ char?.name }</h2></span>
            <div className='rounded-md overflow-hidden w-[250px]'><img src={char?.image} alt={char?.name} /></div>
          </div>

        </div>

      ))}
      <div ref={cursor}></div>
    </section>
  );
};
