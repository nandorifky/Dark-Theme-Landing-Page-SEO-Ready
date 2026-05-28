/**
 * Theme Configuration - Centralized colors, spacing, typography
 * Update di sini untuk mengubah tema visual tanpa hardcoding
 */

export const THEME = {
  colors: {
    background: {
      dark: '#0f0f0f',
      panel: '#1a1a1a',
      panelAlt: '#222222',
    },
    text: {
      primary: '#f0f0f0',
      secondary: '#aaaaaa',
    },
    accent: {
      main: '#ffb100',
      hover: '#e09b00',
      alt: '#ff5722',
    },
    border: '#333333',
  },
  
  spacing: {
    section: '60px',
    sectionMd: '40px',
    sectionSm: '20px',
    containerPadding: '24px',
    containerMaxWidth: '1200px',
  },
  
  typography: {
    fontFamily: {
      heading: "'Chakra Petch', sans-serif",
      body: "'Rajdhani', sans-serif",
      mono: "'Roboto Mono', monospace",
    },
    fontSize: {
      h1: '3rem',
      h2: '2.25rem',
      h3: '1.5rem',
      body: '18px',
      small: '14px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  
  borders: {
    thick: '3px solid',
    thin: '1px solid',
  },
  
  transitions: {
    default: 'all 0.2s ease-in-out',
    fast: 'all 0.1s ease-in-out',
    slow: 'all 0.3s ease-in-out',
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.5)',
  },
};

/**
 * Helper function untuk CSS variable string
 */
export function getCSSVariableString(): string {
  return `
    --bg-dark: ${THEME.colors.background.dark};
    --bg-panel: ${THEME.colors.background.panel};
    --bg-panel-alt: ${THEME.colors.background.panelAlt};
    --text-primary: ${THEME.colors.text.primary};
    --text-secondary: ${THEME.colors.text.secondary};
    --accent: ${THEME.colors.accent.main};
    --accent-hover: ${THEME.colors.accent.hover};
    --accent-alt: ${THEME.colors.accent.alt};
    --border-color: ${THEME.colors.border};
    --font-heading: ${THEME.typography.fontFamily.heading};
    --font-body: ${THEME.typography.fontFamily.body};
    --font-mono: ${THEME.typography.fontFamily.mono};
    --transition: ${THEME.transitions.default};
  `.trim();
}

/**
 * Helper untuk inline styles (gunakan dengan hati-hati)
 */
export const inlineStyles = {
  accentColor: { color: THEME.colors.accent.main },
  accentBg: { backgroundColor: THEME.colors.accent.main },
  textSecondary: { color: THEME.colors.text.secondary },
  borderThin: { borderBottom: `${THEME.borders.thin} ${THEME.colors.border}` },
  containerPadding: { padding: `0 ${THEME.spacing.containerPadding}` },
};
