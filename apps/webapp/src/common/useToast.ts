import { useThemeContext } from '@nx-todo-frontend/theme';

import { toast } from 'react-toastify';

export function useToast() {
  const { theme: originalTheme } = useThemeContext();

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
