import { createFileRoute } from '@tanstack/react-router';

import { Rating } from '../page/rating/Rating';

export const Route = createFileRoute('/rating')({
  component: Rating
});
