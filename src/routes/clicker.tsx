import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/clicker')({
  component: () => <div>Hello /clicker!</div>
});
