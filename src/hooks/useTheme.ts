import { use } from 'react';

import { ThemeContext } from '../providers/theme';

export const useTheme = () => {
  const { theme, setTheme, isDark } = use(ThemeContext);

  return { theme, isDark, setTheme };
};
