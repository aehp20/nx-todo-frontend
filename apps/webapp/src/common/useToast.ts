import { toast } from 'react-toastify';

import { useTheme } from '@nx-todo-frontend/theme';

export function useToast() {
  const { theme: originalTheme } = useTheme();

  const successToast = (message: string) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: originalTheme,
    });
  };

  return {
    successToast,
  };
}
