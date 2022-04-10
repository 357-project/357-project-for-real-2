import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "#629460",
        },
        secondary: {
            main: "#f50057",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fffff8',
          },
    },
});

export default theme;