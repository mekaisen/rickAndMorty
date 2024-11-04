import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pagination')({
  component: () => <div>Hello /pagination!</div>
});
