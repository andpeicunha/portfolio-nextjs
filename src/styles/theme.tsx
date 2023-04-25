interface ThemeInterface {
  COLORS: {
    /** Roxo Primário (DEFAULT) conforme design pattern  */
    roxo900: string;
    roxo700: string;
    roxo500: string;
    cinza100: string;
    cinza300: string;
    cinza700: string;
    red400: string;
    red100: string;
    green500: string;
    green100: string;
    branco: string;
  };

  FONT_FAMILY: {
    familyRoboto: string;
    familyPoppins: string;
  };

  FONT_SIZE: {
    xSmall: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
    xxLarge: number;
  };

  /** Esses são os números definidos em cada propriedade
   *
   * xxSmall: 2,
   * xSmall: 4,
   * small: 8,
   * medium: 16,
   * large: 32,
   * xLarge: 64,
   * xxLarge: 128,
   */
  SPACING: {
    xxSmall: number;
    xSmall: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
    xxLarge: number;
  };

  /**
   * desktopXl: '(min-width: 1440px)',
   * desktop: '(min-width: 1024px) and (max-width: 1439px)',
   * tablet: '(min-width: 768px) and (max-width: 1023px)',
   * mobile: '(max-width: 767px)',
   */
  MEDIA: {
    desktopXl: string;
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

export const THEME: ThemeInterface = {
  COLORS: {
    roxo900: '#30107d',
    roxo700: '#401a9b',
    roxo500: '#5f35b8',
    cinza100: '#f1f5f8',
    cinza300: '#b9b9b9',
    cinza700: '#484f55',
    red400: '#db3766',
    red100: '#ffd9d9',
    green500: '#06D6A2',
    green100: '#ccfff2',
    branco: '#ffffff',
  },
  FONT_FAMILY: {
    familyRoboto: "'Roboto', sans-serif",
    familyPoppins: "'Poppins', sans-serif",
  },
  FONT_SIZE: {
    xSmall: 8,
    small: 10,
    medium: 12,
    large: 14,
    xLarge: 16,
    xxLarge: 18,
  },
  SPACING: {
    xxSmall: 2,
    xSmall: 4,
    small: 8,
    medium: 16,
    large: 32,
    xLarge: 64,
    xxLarge: 128,
  },
  MEDIA: {
    desktopXl: '(min-width: 1440px)',
    desktop: '(min-width: 1024px) and (max-width: 1439px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    mobile: '(max-width: 767px)',
  },
};
