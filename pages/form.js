import Nav from '../components/nav'
import { Calendar, CalendarCell, CalendarWeekCell, CalendarNavigationItem, CalendarHeaderTitle, DateInput, DatePicker, TimePicker, MultiViewCalendar, DateRangePicker, DateTimePicker } from '@progress/kendo-react-dateinputs'
import '@progress/kendo-react-intl'
import '@progress/kendo-react-tooltip'
import '@progress/kendo-react-common'
import '@progress/kendo-react-popup'
import '@progress/kendo-date-math'
import '@progress/kendo-react-dropdowns'
import { Form, Field } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';

const FormPage = () => {
    return (
        <div>
            <Nav/>
            <div>
                <h2>Form</h2>
                <div className="center-content">
                    <div className="center-content form-background">
                        <div className="form-container">
                                <label>Move Out Date</label> <span className="label-astx">*</span>
                                <div className="form-field">
                                    <div className="input-icon">
                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                    </div>
                                    <div><DatePicker style={{width: '500px'}} /></div>
                                </div>
                            <br />
                            <label>New Address</label> <span className="label-astx">*</span>
                            <div className="form-field">
                                <div className="input-icon">
                                    <i className="fa fa-road" aria-hidden="true"></i>
                                </div>
                                <div><Input /></div>
                            </div>
                            <br />
                            <label>Date of Birth</label> <span className="label-astx">*</span>
                            <div className="form-field">
                                <div className="input-icon">
                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                </div>
                                <div><DatePicker style={{width: '500px'}} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .center-content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .form-background {
                    background: url('https://secureaccess.saws.org/azuredev/Images/moving.jpg');
                    width: 800px;
                    padding: 20px;
                }
                .form-container {
                    background-color: #258ab8;
                    width: 500px;
                    padding: 20px;
                }
                .form-field {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: flex-start;
                    align-items: center;
                }
                .form-field:nth-child(1) {
                    flex: 0 1 auto;
                    }
                
                .form-field:nth-child(2) {
                    flex: 1 1 auto;
                    background-color: pink;
                    }
                label {
                    color: white;
                    font-weight: 600;
                    font-size: 20px;
                    font-family: 'Oswald', sans-serif;
                    margin: 0 0 5px 0;
                }
                .label-astx {
                    display: inline-block;
                    color: #da690b;
                }
                .input-icon {
                    width: 20%;
                    display: inline-block;
                    vertical-align: top;
                    margin: 0 -5px 0 0;
                    height: 50px;
                    background: #da690b;
                    background: -webkit-linear-gradient(to bottom, #da690b, #ef5d07);
                    background: linear-gradient(to bottom, #da690b, #ef5d07);
                }
                .input-icon i {
                    color: #fff;
                    display: block;
                    text-align: center;
                    font-size: 2em;
                    padding: 10px 0 0 0;
                    margin: 0 0 0 0;
                }
                input {
                    width: 300px;
                }
            `}</style>
        </div>
    )
}
//https://secureaccess.saws.org/azuredev/Images/moving.jpg
export default FormPage;