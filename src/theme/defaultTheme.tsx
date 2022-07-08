export type ThemeType = {
  main: string;
  text: string;
  img: string;
};

export const defaultTheme = {
  main: {
    elements: '#e879f9',
    background: '#f0abfc',
  },
  secondary: {
    elements: '#a21caf',
  },
  text: '#fff',
  icons: '#fff',
  navborder: '#fff',
  dropmenu: {
    main: '#8388ff',
    hovered: '#ffd460',
  },

  chatbox: {
    background: '#f5d0fe',
    sent: 'linear-gradient(to right top, #e879f9, #fb75dc, #ff77c2, #ff7eab, #ff879a)',
    received:
      'linear-gradient(to right top, #ffac72, #ffb56d, #ffbf68, #ffc963, #ffd460)',
  },
};
