import React from 'react'
import styles from './app.scss'
import Login from 'app/login'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff3d00',
    },
    error: {
      main: orange[500],
    },
    text: {
      primary: '#ffffff',
    }
  },
  typography: { useNextVariants: true },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Login />
    </MuiThemeProvider>
  )
}

export default App
