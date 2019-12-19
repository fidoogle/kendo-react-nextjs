import Nav from '../components/nav'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
//Material UI base components. Icons from https://material-ui.com/components/material-icons/
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

//SAWS styled components based on MUI
import ButtonMUI from '../components/ButtonMUI';

const Buttons = () => {
    return (
        <ThemeProvider theme={theme}>
            <Nav/>
            <div>
                <h2>Kendo-wrapped-MaterialUI Buttons</h2>
                <p>These are Kendo buttons using Material UI for the styling and ripple effect. Kendo provides a powerful wrapper around some Material UI components.
                    <br/>Notice icons can be placed at start/end of a button.
                </p>
                <ButtonMUI
                    color="primary"
                    variant="contained"
                    startIcon={<CheckCircleIcon />}
                    endIcon={<CheckCircleOutlinedIcon />}>Primary Contained</ButtonMUI>
                <ButtonMUI
                    color="primary"
                    variant="outlined"
                    startIcon={<CheckCircleIcon />}
                    endIcon={<CheckCircleOutlinedIcon />}>Primary Outlined</ButtonMUI>
                <ButtonMUI
                    color="primary"
                    startIcon={<CheckCircleIcon />}
                    endIcon={<CheckCircleOutlinedIcon />}>Primary Plain</ButtonMUI>
                <ButtonMUI
                    color="secondary"
                    variant="contained"
                    startIcon={<CheckCircleIcon />}
                    endIcon={<CheckCircleOutlinedIcon />}>Secondary Contained</ButtonMUI>
                <ButtonMUI
                    color="secondary"
                    variant="outlined"
                    startIcon={<CheckCircleIcon />}
                    endIcon={<CheckCircleOutlinedIcon />}>Secondary Outlined</ButtonMUI>
                <ButtonMUI
                    color="secondary"
                    startIcon={<CheckCircleIcon />}
                    endIcon={<CheckCircleOutlinedIcon />}>Primary Plain</ButtonMUI>
            </div>
            <hr/>
            <h2>Kendo Buttons</h2>
            <p>These are out-of-the-box Kendo buttons with little to no customization.</p>
            
        </ThemeProvider>
    )
}

export default Buttons;