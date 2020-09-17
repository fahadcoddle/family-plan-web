import React, {Component} from 'react';
import 'pages/Landing/Calender/Calender.scss';
import { Card, Button } from 'antd';
import Icon, { CalendarOutlined } from '@ant-design/icons';
import DatePicker from 'Components/Datepicker';
import ScrollArea from 'react-scrollbar';
import { getDots, getEventDots } from 'services/calendarService';
import { checkCookie } from 'utils/cookies';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


class Calender extends Component {
    constructor(props){
        super(props);
        this.state = {
            dates: {},
            eventDates: {},
            month:0,
            year: 0,
        }
        this.getCalendarDots = this.getCalendarDots.bind(this);
        this.getCalendarEventDots = this.getCalendarEventDots.bind(this);
    }

    componentDidMount(){
        this.getCalendarDots();
        this.getCalendarEventDots();
    }

    getCalendarDots(){
        getDots()
        .then(resp => {
            if(resp && resp.data){
                this.setState({dates: resp.data}); 
            }
        });
    }
    

    getCalendarEventDots(){
        getEventDots()
        .then(resp => {
            if(resp && resp.data){
                this.setState({eventDates: resp.data}); 
            }
        });
    }
    
    render(){
      
    const {dates, eventDates, month, year } = this.state;
    const current_date = new Date();
    return (
        <Card bordered={false} className="calender-card">
            <div className="card-head">
            <span>{(month == 0 && year == 0) ? monthNames[current_date.getMonth()] : monthNames[month]}{' '}{(month == 0 && year == 0) ? current_date.getFullYear() : year}</span>
                <div className="btn-wrap">
                    <Button className="fp-button-primary" type="primary" icon={<CalendarOutlined />}>
                        <span>Go to Calender</span>
                    </Button>
                </div>
            </div>
            <DatePicker
                labelFormat={'MMMM'}
                color={'#374e8c'}
                selectDate={new Date()}
                dates={dates}
                eventDates={eventDates}
                getSelectedDay={(val) => {
                    console.log('val', val);
                }}
                onScrolled={(val) => {
                    this.setState({month: new Date(val).getMonth(), year: new Date(val).getFullYear()})
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
                        <div className="list-item selected">
                            <div className="list-day">
                                <span>19</span>
                                <span>TUE</span>
                            </div>
                            <div className="list-details">
                                <div className="list-wrap">
                                    <div className="list-timer">
                                        <span>7:10am</span>
                                        <div className="stat">
                                            <span className="list-info blue"></span>
                                        </div>
                                    </div>
                                    <div className="list-activity">
                                        <span>Dance Lessons</span>
                                        <span>128 Main St</span>
                                    </div>
                                </div>
                                <div className="list-inner">
                                    <div className="list-timer">
                                        <span>7:10am</span>
                                        <div className="stat">
                                            <span className="list-info dark-blue"></span>
                                            <span className="list-info green"></span>
                                        </div>
                                    </div>
                                    <div className="list-activity">
                                        <span>School</span>
                                        <span>Bothwell Middle School</span>
                                    </div>
                                </div>
                                <div className="list-inner">
                                    <div className="list-timer">
                                        <span>7:10am</span>
                                        <div className="stat">
                                            <span className="list-info orange"></span>
                                            <span className="list-info green"></span>
                                        </div>
                                    </div>
                                    <div className="list-activity">
                                        <span>Swimming Class</span>
                                        <span>128 Main St</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-item ">
                            <div className="list-day">
                                <span>20</span>
                                <span>WED</span>
                            </div>
                            <div className="list-details">
                                <div className="list-wrap">
                                    <div className="list-timer">
                                        <span>7:10am</span>
                                        <div className="stat">
                                            <span className="list-info blue"></span>
                                        </div>
                                    </div>
                                    <div className="list-activity">
                                        <span>School</span>
                                        <span>Bothwell Middle School</span>
                                    </div>
                                </div>
                                <div className="list-inner">
                                    <div className="list-timer">
                                        <span>7:10am</span>
                                        <div className="stat">
                                            <span className="list-info orange"></span>
                                            <span className="list-info dark-blue"></span>
                                            <span className="list-info green"></span>
                                        </div>
                                    </div>
                                    <div className="list-activity">
                                        <span>Play game</span>
                                        <span>433 Washington St</span>
                                    </div>
                                </div>
                                <div className="list-inner">
                                    <div className="list-timer">
                                        <span>7:10am</span>
                                        <div className="stat">
                                            <span className="list-info violet"></span>
                                            <span className="list-info blue"></span>
                                        </div>
                                    </div>
                                    <div className="list-activity">
                                        <span>Dance Lessons</span>
                                        <span>128 Main St</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-item ">
                            <div className="list-day">
                                <span>21</span>
                                <span>THU</span>
                            </div>
                            <div className="list-details">
                                <div className="list-wrap">
                                    <div className="list-timer">
                                        <span>7:10am</span>
                                        <div className="stat">
                                            <span className="list-info blue"></span>
                                        </div>
                                    </div>
                                    <div className="list-activity">
                                        <span>Dance Lessons</span>
                                        <span>128 Main St</span>
                                    </div>
                                </div>
                                <div className="list-inner">
                                    <div className="list-timer">
                                        <span>7:10am</span>
                                        <div className="stat">
                                            <span className="list-info orange"></span>
                                            <span className="list-info green"></span>
                                        </div>
                                    </div>
                                    <div className="list-activity">
                                        <span>School</span>
                                        <span>Bothwell Middle School</span>
                                    </div>
                                </div>
                                <div className="list-inner">
                                    <div className="list-timer">
                                        <span>7:10am</span>
                                        <div className="stat">
                                            <span className="list-info violet"></span>
                                            <span className="list-info blue"></span>
                                        </div>
                                    </div>
                                    <div className="list-activity">
                                        <span>Dentist</span>
                                        <span>433 Washington St</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </Card>
    );
    }
};

export default Calender;
