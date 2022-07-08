export type ThemeType = {
  main: {
    elements: string;
    background: string;
  };
  secondary: {
    elements: string;
  };
  text: string;
  icons: string;
  navborder: string;
  dropmenu: {
    main: string;
    hovered: string;
  };

  chatbox: {
    background: string;
    sent: string;
    received: string;
  };
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
