import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { httpBatchLink } from '@trpc/client';

import { trpc } from './utils/api/trpc/trps';

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:4000'
        })
      ]
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className='container h-full flex flex-col'>
          <div className='flex justify-center p-4'>

            <div className='flex w-96 h-8 bg-gray-700 text-cyan-50 gap-3 justify-center items-center rounded-lg'>
              <Link to='/' className='[&.active]:font-bold'>
                Главная

              </Link>
              <Link to='/tinder' className='[&.active]:font-bold'>
                Тиндер
              </Link>
              <Link to='/pagination' className='[&.active]:font-bold'>
                Пагинация
              </Link>
            </div>
          </div>
          <hr />
          <Outlet />
          <ReactQueryDevtools />
          <TanStackRouterDevtools />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
