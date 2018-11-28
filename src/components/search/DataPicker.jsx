import React, {Component} from 'react';
import { Form, Input, FormGroup, Container, Label } from 'reactstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import  { DateRangePicker }  from 'react-dates';

export default class DataPick extends Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focused: null
        }
    }
    render(){
        return (
            <div>
                <DateRangePicker
                    startDate={this.state.startDate}
                    startDateId="1"
                    endDate={this.state.endDate}
                    endDateId="2"
                    onDatesChange={ ( { startDate, endDate } )  => this.setState({ startDate, endDate }) }
                    focused={this.state.focused} 
                    onFocusChange={({ focused }) => this.setState({ focused })}
                />
            </div>
        )
    }
}