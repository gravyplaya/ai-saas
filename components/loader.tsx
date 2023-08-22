import { Disc3 } from "lucide-react";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Disc3 size={40} />
      </div>
      <p className="text-sm text-muted-foreground">
        Tavonn AI is thinking...
        <br />
        Wait time depends on queue.
      </p>
    </div>
  );
};
