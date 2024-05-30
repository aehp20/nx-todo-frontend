import { toast } from 'react-toastify';

export function useToast() {
  const successToast = (message: string) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return {
    successToast,
  };
}
