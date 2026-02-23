import { Loader2 } from 'lucide-react';

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full w-full p-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" aria-label="Loading" />
    </div>
  );
};
