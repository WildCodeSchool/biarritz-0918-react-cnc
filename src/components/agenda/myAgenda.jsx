import React, { Fragment } from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import 'moment/locale/fr';

import styles from './myAgenda.module.css';
import { EXITED } from 'react-transition-group/Transition';
import Axios from 'axios';
import * as AuthApi from '../../Auth.api';

const moment = extendMoment(Moment);

export default class Agenda extends React.Component {
   state = {
      dateContext: moment(),
      today: moment(),
      showWeekPopup: false,
      showYearPopup: false,
      displayAll: false
   };
   constructor(props) {
      super(props);
      this.width = props.width || '350px';
      this.style = props.style || {};
   }
   inThePast = (date) => {
      let today = this.state.today;
      if (parseInt(date.format('Y')) < parseInt(today.format('Y'))) {
         this.setState({
            dateContext: moment()
         });
      }
   };
   //func onListener
   onChangeYear = (e, date, arrow) => {
      let newDate = date;
      if (arrow === 'back') {
         newDate.add(-1, 'years');
      } else if (arrow === 'next') {
         newDate.add(+1, 'years');
      }
      this.setState({ dateContext: newDate });
      this.inThePast(this.state.dateContext);
   };
   onChangeMonth = (e, date, arrow) => {
      let newDate = date;
      if (arrow === 'back') {
         newDate.add(-1, 'months');
      } else if (arrow === 'next') {
         newDate.add(+1, 'months');
      }
      this.setState({ dateContext: newDate });
      this.inThePast(this.state.dateContext);
   };
   onChangeWeek = (e, date, arrow) => {
      let newDate = date;
      if (arrow === 'back') {
         newDate.add(-1, 'week');
      } else if (arrow === 'next') {
         newDate.add(1, 'week');
      }
      this.setState({ dateContext: newDate });
      this.inThePast(this.state.dateContext);
   };
   handleClick = (e) => {
      let date = moment(e.currentTarget.id);
      date.add(1, 'hour');
      let stylistId = '' + this.props.currentStylist;
      if (stylistId != '') {
         Axios.get(AuthApi.SERVER + `/api/me`, {
            headers: {
               Accept: 'application/json',
               Authorization: 'Bearer ' + AuthApi.getToken()
            }
         }).then((response) => {
            Axios.post(
               AuthApi.SERVER + '/api/rdvs',
               {
                  dateStart: date,
                  dateEnd: date,
                  userid: '/api/user_ids/' + response.data.id,
                  stylist: '/api/stylists/' + stylistId
               },
               {
                  headers: {
                     Accept: 'application/json',
                     Authorization: 'Bearer ' + AuthApi.getToken()
                  }
               }
            )
            .then(() => this.props.update('undefined', stylistId))
            .then(() => alert("Rendez-vous pris !"));
         });
      }
   };
   // render
   YearNav = () => {
      let date = this.state.dateContext;
      let today = this.state.today;
      if (date.format('Y') === today.format('Y')) {
         return (
            <Fragment>
               <div className={styles.labelPointerNone}>&#8249;</div>
               <div className={styles.labelTitle}>{date.format('Y')}</div>
               <div
                  className={styles.labelPointer}
                  onClick={(e) => {
                     this.onChangeYear(e, date, 'next');
                  }}
               >
                  &#8250;
               </div>
            </Fragment>
         );
      } else {
         return (
            <Fragment>
               <div
                  className={styles.labelPointer}
                  onClick={(e) => {
                     this.onChangeYear(e, date, 'back');
                  }}
               >
                  &#8249;
               </div>
               <div className={styles.labelTitle}>{date.format('Y')}</div>
               <div
                  className={styles.labelPointer}
                  onClick={(e) => {
                     this.onChangeYear(e, date, 'next');
                  }}
               >
                  &#8250;
               </div>
            </Fragment>
         );
      }
   };
   MonthNav = () => {
      let date = this.state.dateContext;
      let today = this.state.today;
      if (date.format('Y') === today.format('Y') && date.format('MMMM') === today.format('MMMM')) {
         return (
            <div>
               <div className={styles.labelPointerNone}>&#8249;</div>
               <div className={styles.labelTitle}>{date.format('MMMM')}</div>
               <div
                  className={styles.labelPointer}
                  onClick={(e) => {
                     this.onChangeMonth(e, date, 'next');
                  }}
               >
                  &#8250;
               </div>
            </div>
         );
      } else {
         return (
            <div>
               <div
                  className={styles.labelPointer}
                  onClick={(e) => {
                     this.onChangeMonth(e, date, 'back');
                  }}
               >
                  &#8249;
               </div>
               <div className={styles.labelTitle}>{date.format('MMMM')}</div>
               <div
                  className={styles.labelPointer}
                  onClick={(e) => {
                     this.onChangeMonth(e, date, 'next');
                  }}
               >
                  &#8250;
               </div>
            </div>
         );
      }
   };
   WeekNav = () => {
      let today = this.state.today;
      let date = this.state.dateContext;
      let firstDay = moment(date).startOf('isoWeek');
      let lastDay = moment(date).endOf('isoWeek');
      if (
         date.format('Y') === today.format('Y') &&
         date.format('MMMM') === today.format('MMMM') &&
         date.week() === today.week()
      ) {
         return (
            <div>
               <div className={styles.labelPointerNone}>&#8249;</div>
               <div className={styles.labelTitle}>
                  {firstDay.format('Do MMM') + '   au   ' + lastDay.format('Do MMM')}
               </div>
               <div
                  className={styles.labelPointer}
                  onClick={(e) => {
                     this.onChangeWeek(e, date, 'next');
                  }}
               >
                  &#8250;
               </div>
            </div>
         );
      } else {
         return (
            <div>
               <div
                  className={styles.labelPointer}
                  onClick={(e) => {
                     this.onChangeWeek(e, date, 'back');
                  }}
               >
                  &#8249;
               </div>
               <div className={styles.labelTitle}>
                  {firstDay.format('Do MMM') + '   au   ' + lastDay.format('Do MMM')}
               </div>
               <div
                  className={styles.labelPointer}
                  onClick={(e) => {
                     this.onChangeWeek(e, date, 'next');
                  }}
               >
                  &#8250;
               </div>
            </div>
         );
      }
   };
   HeaderAgenda = () => {
      let date = this.state.dateContext;
      let beginDay = moment(date).startOf('isoWeek');
      let endDay = moment(date).endOf('isoWeek');
      let dayRange = moment().range(beginDay, endDay);
      let days = [];
      for (let day of dayRange.by('day')) {
         days.push(day);
      }
      let headerWeek = days.map((day) => {
         return (
            <td key={day.format('ddd')} className={styles.weekDay}>
               <div>{day.format('ddd')}</div>
               <div>{day.format('Do')}</div>
            </td>
         );
      });

      return headerWeek;
   };
   BodyAgenda = () => {
      let allRdvs = this.props.rdvs;
      let dataRdvs = [];
      if (allRdvs.length > 0) {
         allRdvs.map((rdv) => {
            dataRdvs.push(moment(rdv.dateStart).format('DD MM YYYY LT'));
         });
      }
      let date = this.state.dateContext;
      let beginDay = moment(date).startOf('isoWeek');
      let endDay = moment(date).endOf('isoWeek');
      let dayRange = moment().range(beginDay, endDay);
      let days = [];
      for (let day of dayRange.by('day')) {
         days.push(day);
      }
      let totalSlots = [];
      let dayContext = date.startOf('d');
      let beginHour = dayContext.clone().add(8, 'h');
      let endHour = dayContext.clone().add(20, 'h');

      while (beginHour < endHour) {
         days.map((day) => {
            if (!dataRdvs.includes(day.format('DD MM YYYY') + ' ' + beginHour.format('LT'))) {
               totalSlots.push(
                  <td
                     key={day.format('D') + day.format('LT')}
                     id={day.format('YYYY-MM-DD') + 'T' + beginHour.format('LT')}
                     onClick={(e) => {
                        e.preventDefault();
                        this.handleClick(e);
                     }}
                  >
                     <div>
                        <span className={styles.agendaContainerSlot + ' ' + styles.dateHover}>
                           {beginHour.format('LT')}
                        </span>
                     </div>
                  </td>
               );
            } else {
               console.log('toto');

               totalSlots.push(<td />);
            }
         });
         beginHour = beginHour.add(30, 'm');
      }
      let rows = [];
      let cells = [];
      totalSlots.forEach((row, i) => {
         if (i % 7 !== 0) {
            cells.push(row);
         } else {
            let insertRow = cells.slice();
            rows.push(insertRow);
            cells = [];
            cells.push(row);
         }
         if (i === totalSlots.length - 1) {
            let insertRow = cells.slice();
            rows.push(insertRow);
         }
      });
      let trElements = rows.map((itemHour, i) => {
         return <tr key={i * 100}>{itemHour}</tr>;
      });

      return trElements;
   };
   BodyAgendaSalon = () => {
      let allRdvs = this.props.rdvs;
      let dataRdvs = [];
      if (allRdvs.length > 0) {
         allRdvs.map((rdv) => {
            dataRdvs.push(moment(rdv.dateStart).format('DD MM YYYY LT'));
         });
      }
      let date = this.state.dateContext;
      let beginDay = moment(date).startOf('isoWeek');
      let endDay = moment(date).endOf('isoWeek');
      let dayRange = moment().range(beginDay, endDay);
      let days = [];
      for (let day of dayRange.by('day')) {
         days.push(day);
      }
      let totalSlots = [];
      let dayContext = date.startOf('d');
      let beginHour = dayContext.clone().add(8, 'h');
      let endHour = dayContext.clone().add(20, 'h');

      while (beginHour < endHour) {
         days.map((day, i) => {
            if (dataRdvs.includes(day.format('DD MM YYYY') + ' ' + beginHour.format('LT'))) {
               totalSlots.push(
                  <td key={i} id={day.format('YYYY-MM-DD') + 'T' + beginHour.format('LT')}>
                     <div>
                        <span className={styles.agendaContainerSlot + ' ' + styles.dateHover}>
                           {beginHour.format('LT')}
                        </span>
                     </div>
                  </td>
               );
            } else {
               totalSlots.push(<td key={i} />);
            }
         });
         beginHour = beginHour.add(30, 'm');
      }
      let rows = [];
      let cells = [];
      totalSlots.forEach((row, i) => {
         if (i % 7 !== 0) {
            cells.push(row);
         } else {
            let insertRow = cells.slice();
            rows.push(insertRow);
            cells = [];
            cells.push(row);
         }
         if (i === totalSlots.length - 1) {
            let insertRow = cells.slice();
            rows.push(insertRow);
         }
      });
      let trElements = rows.map((itemHour, i) => {
         return <tr key={i * 100}>{itemHour}</tr>;
      });

      return trElements;
   };
   render() {
      let body = null;
      if (this.props.salon) {
         body = this.BodyAgendaSalon();
      } else {
         body = this.BodyAgenda();
      }
      return (
         <div className={styles.agendaContainer} style={this.style}>
            <div className={styles.agendaMonth}>{this.MonthNav()}</div>
            <div className={styles.agendaYear}>{this.YearNav()}</div>
            <div className={styles.agendaWeek}>{this.WeekNav()}</div>
            <table className={styles.agenda}>
               <thead className={styles.labelDate}>
                  {/* <td colSpan="5">
              </td> */}
                  <tr>{this.HeaderAgenda()}</tr>
               </thead>
               <tbody>{body}</tbody>
            </table>
         </div>
      );
   }
}
