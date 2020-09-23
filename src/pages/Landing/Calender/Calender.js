import React, { Component } from 'react';
import 'pages/Landing/Calender/Calender.scss';
import { Card, Button } from 'antd';
import Icon, { CalendarOutlined } from '@ant-design/icons';
import DatePicker from 'Components/Datepicker';
import ScrollArea from 'react-scrollbar';
import { getDots, getEventDots, getSchedule } from 'services/calendarService';
import { getCoParents } from 'services/coparentsService';
import { getChildrenUserAction, getCoParentsUserAction } from 'actions/userActions';
import { addLoading, removeLoading } from 'actions/loaderActions';
import { connect } from 'react-redux';
import Loader from 'Components/Loader/Loader';

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

class Calender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: {},
            eventDates: {},
            month: 0,
            year: 0,
            events: [],
            arr: [],
            startDate: new Date(),
        };
        this.getCalendarDots = this.getCalendarDots.bind(this);
        this.getCalendarEventDots = this.getCalendarEventDots.bind(this);
        this.getEvents = this.getEvents.bind(this);
        this.formatDate = this.formatDate.bind(this);
        this.getDateArray = this.getDateArray.bind(this);
        this.getUserCoParents = this.getUserCoParents.bind(this);
        this.getAllChildren = this.getAllChildren.bind(this);
    }

    componentDidMount() {
        const { startDate } = this.state;
        let endDate = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000);
        let ar = this.getDateArray(startDate, endDate);
        this.setState({ arr: ar });
        this.getCalendarDots();
        this.getCalendarEventDots();
        this.getEvents();
        this.getUserCoParents();
        this.getAllChildren();
    }

    formatDate = (date) => {
        var d = new Date(date);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    };

    getCalendarDots() {
        getDots().then((resp) => {
            if (resp && resp.data) {
                this.setState({ dates: resp.data });
            }
        });
    }

    getCalendarEventDots() {
        getEventDots().then((resp) => {
            if (resp && resp.data) {
                this.setState({ eventDates: resp.data });
            }
        });
    }

    getEvents() {
        this.props.dispatch(addLoading());
        setTimeout(() => {
            const { startDate } = this.state;
            let start_date = startDate;
            let end_date = new Date(start_date.getTime() + 6 * 24 * 60 * 60 * 1000);
            let ar = this.getDateArray(start_date, end_date);
            this.setState({ arr: ar });
            start_date = this.formatDate(start_date);
            end_date = this.formatDate(end_date);
            const params = { type: 'event', start_date, end_date };
            getSchedule(params).then((resp) => {
                console.log('resp', resp);
                if (resp) {
                    this.setState({ events: resp });
                    this.props.dispatch(removeLoading());
                } else {
                    this.props.dispatch(removeLoading());
                }
            });
        }, 1000);
    }

    getDateArray = function (start, end) {
        var arr = new Array();
        var dt = new Date(start);
        while (dt <= end) {
            arr.push(new Date(dt));
            dt.setDate(dt.getDate() + 1);
        }
        return arr;
    };

    getUserCoParents(){
        this.props.dispatch(getCoParentsUserAction());
    }

    getAllChildren(){
        this.props.dispatch(getChildrenUserAction());
    }
    
    render() {
        const { dates, startDate, arr, events, eventDates, month, year } = this.state;
        let endDate = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000);
        const current_date = new Date();
        const { serviceReducer } = this.props;
        return (
            <div className="loader-wrap">
                {serviceReducer.loadings ? <Loader></Loader> : null}
                <Card bordered={false} className="calender-card">
                    <div className="card-head">
                        <span>
                            {month == 0 && year == 0 ? monthNames[current_date.getMonth()] : monthNames[month]}{' '}
                            {month == 0 && year == 0 ? current_date.getFullYear() : year}
                        </span>
                        <div className="btn-wrap">
                            <Button className="fp-button-primary" type="primary" icon={<CalendarOutlined />}>
                                <span>Go to Calender</span>
                            </Button>
                        </div>
                    </div>
                    <DatePicker
                        labelFormat={'MMMM'}
                        color={'#374e8c'}
                        selectDate={startDate}
                        dates={dates}
                        eventDates={eventDates}
                        getSelectedDay={(val) => {
                            console.log('val', val);
                            this.setState({ startDate: val });
                            this.getEvents();
                        }}
                        onScrolled={(val) => {
                            this.setState({ month: new Date(val).getMonth(), year: new Date(val).getFullYear() });
                        }}
                    />
                    <div className="card-body-wrap">
                        <div className="name-wrap">
                            <div className="circle blue">
                                <span>S</span>
                            </div>
                            <div className="circle orange">
                                <span>S</span>
                            </div>
                            <div className="circle green">
                                <span>S</span>
                            </div>
                            <div className="circle violet">
                                <span>S</span>
                            </div>
                        </div>

                        <ScrollArea speed={0.8} className="list-wrapper" contentClassName="content" horizontal={false}>
                            <div className="list">
                                {arr &&
                                    arr.map((date, i) => (
                                        <div className="list-item selected">
                                            <div className="list-day">
                                                <span>{date.getDate()}</span>
                                                <span>{days[date.getDay()]}</span>
                                            </div>
                                            <div>
                                                {events &&
                                                    events.map((event, i) => (
                                                        <div className="list-details">
                                                            {this.formatDate(date) ==
                                                                this.formatDate(new Date(event.start_date)) &&
                                                            event.Members &&
                                                            event.Members[0] ? (
                                                                <div className="list-wrap">
                                                                    <div className="list-main">
                                                                        <div className="list-timer">
                                                                            <span>{event.start_time}</span>
                                                                            <div className="stat">
                                                                                {event.Members && event.Members[0] && (
                                                                                    <span
                                                                                        style={{
                                                                                            background:
                                                                                                event.Members[0].color,
                                                                                        }}
                                                                                        className="list-info"
                                                                                    ></span>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="list-activity">
                                                                            <span>{event.title}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : null}
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </ScrollArea>
                    </div>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = ({ serviceReducer }) => ({ serviceReducer });

export default connect(mapStateToProps)(Calender);
