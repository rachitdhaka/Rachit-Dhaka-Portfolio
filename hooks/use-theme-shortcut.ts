import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export const useThemeShortcut = () => {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on 't'
      if (e.key.toLowerCase() === 't') {
        const target = e.target as HTMLElement;
        
        // Ignore if typing in an input, textarea, or contentEditable element
        if (
          ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || 
          target.isContentEditable
        ) {
          return;
        }

        // Toggle logic
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [resolvedTheme, setTheme]);
};
