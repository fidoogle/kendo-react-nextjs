import Head from 'next/head'
import Nav from '../components/nav'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
//Material UI base components. Icons from https://material-ui.com/components/material-icons/
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

//SAWS styled components based on MUI
import ButtonMUI from '../components/ButtonMUI';
import '../theme/styles.scss';

//Kendo Buttons
import { Button, ButtonGroup, SplitButton, SplitButtonItem, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'

const Buttons = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
            </Head>
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
            </ThemeProvider>
            <hr/>
            <h2>Kendo Buttons</h2>
            <ul>
                <li>These are out-of-the-box Kendo buttons with little to no customization.</li>
                <li>There is no secondary button out-of-the-box, only primary.</li>
                <li>Icons only on start, not end of buttons.</li>
                <li>The Primary button uses a Font Awesome icon. Can also use Kendo and Material UI Icons</li>
                <li>Further customization can be done with <a href="https://www.telerik.com/kendo-react-ui/components/styling/theme-default/customization/">SCSS variables</a>.</li>
            </ul>
            <div>
                <Button icon="check">
                    Basic Button
                </Button>
                &nbsp;&nbsp;
                <Button iconClass="fa fa-key fa-fw" primary={true} togglable={true}>
                    Primary Button
                </Button>
                &nbsp;&nbsp;
                <Button look="bare">Bare Button</Button>
                &nbsp;&nbsp;
                <Button look="outline">Outline Button</Button>
            </div>
        </>
    )
}

export default Buttons;