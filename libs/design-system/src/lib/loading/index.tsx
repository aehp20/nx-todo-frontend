import { SpinnerIcon } from '../icons';

export default function Loading() {
  return (
    <div className="absolute w-full h-full backdrop-opacity-10 backdrop-invert bg-gray/30 z-10">
      <div className="flex items-center justify-center w-full h-full">
        <SpinnerIcon />
      </div>
    </div>
  );
}
