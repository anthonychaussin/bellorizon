import {useEffect} from 'react';
import {useSystemTheme} from '../hooks/useSystemTheme';

/**
 * Component that applies the system theme to the application
 * Manages theme stylesheets based on system preference
 */
export function ThemeProvider({children}: {children: React.ReactNode}) {
  const systemTheme = useSystemTheme();

  useEffect(() => {
    // Set data-theme attribute on document element for CSS targeting
    document.documentElement.setAttribute('data-theme', systemTheme);

    // Find all stylesheets and enable/disable them based on theme
    // Vite injects CSS as <style> elements with data attributes
    const allStyles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'));

    allStyles.forEach((styleElement) => {
      const href = (styleElement as HTMLLinkElement).href || '';
      const textContent = (styleElement as HTMLStyleElement).textContent || '';
      const innerHTML = (styleElement as HTMLStyleElement).innerHTML || '';

      // Check if this is a PrimeReact theme stylesheet
      const isLightTheme = href.includes('lara-light-blue') ||
                           textContent.includes('lara-light-blue') ||
                           innerHTML.includes('lara-light-blue');
      const isDarkTheme = href.includes('lara-dark-blue') ||
                          textContent.includes('lara-dark-blue') ||
                          innerHTML.includes('lara-dark-blue');

      if (isLightTheme || isDarkTheme) {
        const shouldBeActive = (systemTheme === 'light' && isLightTheme) ||
                               (systemTheme === 'dark' && isDarkTheme);

        // For link elements, disable them
        if (styleElement.tagName === 'LINK') {
          (styleElement as HTMLLinkElement).disabled = !shouldBeActive;
        }
        // For style elements, add/remove a class to hide them
        if (styleElement.tagName === 'STYLE') {
          if (shouldBeActive) {
            styleElement.removeAttribute('data-theme-disabled');
          } else {
            styleElement.setAttribute('data-theme-disabled', 'true');
          }
        }
      }
    });
  }, [systemTheme]);

  return <>{children}</>;
}

