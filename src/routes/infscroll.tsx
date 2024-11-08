import { createFileRoute } from '@tanstack/react-router';

import { InfScroll } from '@/page/inscroll/InfScroll';

export const Route = createFileRoute('/infscroll')({
  component: InfScroll
});
