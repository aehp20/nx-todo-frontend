import { toast } from 'react-toastify';

export function useToast() {
  const successToast = (message: string) => {
    toast.success(message);
  };

  return {
    successToast,
  };
}
