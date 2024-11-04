import { createFileRoute } from '@tanstack/react-router';

import { Tinder } from '../page/tinder/Tinder';

export const Route = createFileRoute('/tinder')({
  component: Tinder
});
