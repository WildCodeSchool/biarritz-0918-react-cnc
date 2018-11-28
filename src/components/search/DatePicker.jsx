import React, {Component} from 'react';
import 'react-dates/initialize';
import style from 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

export default class DatePicker extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        date: null,
        focused: false
    };
  }

  render() {
    return (
        <div>
            <SingleDatePicker
                date={this.state.date}
                onDateChange={date => this.setState({ date })}
                focused={this.state.focused}
                onFocusChange={({ focused }) => this.setState({ focused })} 
                id={this.props.id}
            />
        </div>
    );
  }
}
