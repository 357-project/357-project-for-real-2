import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider} from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#629460",
        },
        secondary: {
            main: "#f50057",
        },
        error: {
            main: "#ff0000",
        },
        background: {
            default: '#fffff8',
          },
    },
});


ReactDOM.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>,
    document.getElementById('root'));
