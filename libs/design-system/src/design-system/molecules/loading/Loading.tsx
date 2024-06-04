import { SpinnerIcon } from '../../atoms/icons';

import '../../../styles.css';

export default function Loading() {
  return (
    <div className="absolute w-full h-full bg-gray-300 bg-opacity-25 z-10">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <SpinnerIcon />
      </div>
    </div>
  );
}
