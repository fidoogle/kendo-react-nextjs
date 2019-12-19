import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0078AE'
        },
        secondary: {
            main: '#279A2C'
        },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 20,
            }
        }
    },
    status: {
        danger: 'orange',
    },
});

export default theme;