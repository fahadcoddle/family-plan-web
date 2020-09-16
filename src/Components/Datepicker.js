/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import 'Components/Datepicker.scss';
import btn from 'Assets/back.png';
import { Button } from 'antd';
import {
    addDays,
    addMonths,
    differenceInMonths,
    format,
    isSameDay,
    lastDayOfMonth,
    startOfMonth,
    subDays,
    isAfter,
    differenceInCalendarDays
} from 'date-fns';

let currentCount = 0;

export default function DatePicker({ endDate, selectDate, getSelectedDay, color, dates, eventDates, labelFormat, onScrolled }) {
    const [selectedDate, setSelectedDate] = useState(subDays(new Date(), 3));
    // const firstSection = { marginLeft: '40px' };
    const startDate = subDays(new Date(), 90);
    const currentDate = new Date();
    const lastDate = addDays(startDate, endDate || 365);
    const primaryColor = color || 'rgb(54, 105, 238)';
    const selectedStyle = {
        fontWeight: 'bold',
        // width: '45px',
        // height: '45px',
        // border: '1px solid red',
    };
    

    const labelColor = { color: primaryColor };

    const getStyles = (day) => {
        if (isSameDay(day, selectedDate)) {
            return selectedStyle;
        }
        return null;
    };

    const getId = (day) => {
        return isSameDay(day, selectedDate);
    };
    
    const formatDate = (date) => {
        var d = new Date(date);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    
    const isNumber = value => typeof value === 'number' && value === value && value !== Infinity && value !== -Infinity

    function renderDays() {
        const dayFormat = 'E';
        const dateFormat = 'd';
        const months = [];
        let days = [];
        let count = 0;
        for (let i = 0; i <= differenceInMonths(lastDate, startDate); i++) {
            let start, end;
            const month = startOfMonth(addMonths(startDate, i));

            start = i === 0 ? Number(format(startDate, dateFormat)) - 1 : 0;
            end =
                i === differenceInMonths(lastDate, startDate)
                    ? Number(format(lastDate, 'd'))
                    : Number(format(lastDayOfMonth(month), 'd'));
            for (let j = start; j < end; j++) {
                const day = addDays(month, j);
                let selected = getId(day);
                const difference = differenceInCalendarDays(day,new Date());
                let centerClass = 'dateDayItem';
                let custodyDates;
                if(dates){
                    custodyDates = dates[formatDate(day)];
                } 

                let ed;
                if(eventDates){
                    ed = eventDates[formatDate(day)];
                }

                if(isNumber(difference)){
                    if(difference % 7 == 0){
                        count++;
                        centerClass='dateDayItem center-'+count;
                        if(isSameDay(day, new Date()) && currentCount == 0){
                          currentCount = count;
                        }
                    }
                }
                days.push(
                    <div
                        id={selected ? 'selected' : ''}
                        className={centerClass}
                        style={getStyles(day)}
                        key={day}
                        data-date={day}
                        onClick={() => onDateClick(day)}
                    >
                        <div className={selected ? 'dateLabel select' : 'dateLabel'}>
                            <span>{format(day, dateFormat)}</span>
                        </div>
                        <div className="dayLabel">{format(day, dayFormat)}</div>
                        <div className="notify">
                            { custodyDates && custodyDates.dots.map(color => <span style={{background: color}}></span>)}
                        </div>
                    </div>,
                );
            }
            months.push(
                <div className="monthContainer" key={month} data-month={month}>
                    <span className="monthYearLabel" style={labelColor}>
                        {format(month, labelFormat || 'MMMM yyyy')}
                    </span>
                    <div className="daysContainer">{days}</div>
                </div>,
            );
            days = [];
        }

        return (
            <div id={'container'} className="dateListScrollable">
                {months}
            </div>
        );
    }

    const onDateClick = (day) => {
        setSelectedDate(day);
        if (getSelectedDay) {
            getSelectedDay(day);
        }
    };

    useEffect(() => {
        if (getSelectedDay) {
            if (selectDate) {
                getSelectedDay(selectDate);
            } else {
                getSelectedDay(startDate);
            }
        }
    }, []);

    useEffect(() => {
        if (selectDate) {
            if (!isSameDay(selectedDate, selectDate)) {
                setSelectedDate(selectDate);
                setTimeout(() => {
                    let view = document.getElementById('selected');
                    if (view) {
                        view.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    }
                }, 10);
            }
        }
    }, [selectDate]);

    const nextWeek = () => {
        /*const e = document.getElementById('container');
        const width = e ? e.getBoundingClientRect().width : null;
        e.scrollLeft += width - 5;*/
        setTimeout(() => {
            currentCount++;
            let view = document.getElementsByClassName('dateDayItem center-'+currentCount);
            if (view && view[0]) {
                view[0].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                //const nextWeek = addDays(startDate, currentCount*7);
                if(onScrolled){
                  onScrolled(view[0].getAttribute('data-date'))
                }
            }
        }, 20);
        
    };

    const prevWeek = () => {
        /*const e = document.getElementById('container');
        const width = e ? e.getBoundingClientRect().width : null;
        e.scrollLeft -= width - 5;*/

        setTimeout(() => {
            currentCount--;
            let view = document.getElementsByClassName('dateDayItem center-'+currentCount);
            if (view && view[0]) {
                view[0].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                if(onScrolled){
                  onScrolled(view[0].getAttribute('data-date'))
                }
            }
        }, 20);
    };

    return (
        <div className="container">
            <div className="buttonWrapper">
                <Button className="button btn-left" onClick={prevWeek}>
                    <img src={btn} alt="arrow" />
                </Button>
            </div>
            {renderDays()}
            <div className="buttonWrapper">
                <Button className="button btn-right" onClick={nextWeek}>
                    <img src={btn} alt="arrow" />
                </Button>
            </div>
        </div>
    );
}
