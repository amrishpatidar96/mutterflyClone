import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#d70466',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  shape:{
      borderRadius:'5px'
  }
});

export default theme;