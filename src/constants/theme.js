export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    grey: '#4d5d53',
    greyBg: '#eee8cd',
    greyOpacity: 'rgba(47, 48, 58, 0.1)',
    green: '#4caf50',
    red: '#f44336',
    tableHead: '#22b4b7',
    primaryText: '#2b2b2b',
    secondaryText: '#757575',
    tableText: '#afb1b8',
    boxShadow:
      '0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 2px 1px rgba(0, 0, 0, 0.32)',
    profileShadow: '0 0 10px rgba(0,0,0,.3)',
  },
  fonts: {
    secondary: "'Work Sans', sans-serif",
  },
  spacing: value => `${4 * value}px`,
});
