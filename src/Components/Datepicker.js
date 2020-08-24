/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './Datepicker.scss';
import btn from '../Assets/back.png';
import { Button } from 'antd';
import { addDays, addMonths, differenceInMonths, format, isSameDay, lastDayOfMonth, startOfMonth, subDays, isAfter } from 'date-fns';

export default function DatePicker({ endDate, selectDate, getSelectedDay, color, labelFormat }) {
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

    function renderDays() {
        const dayFormat = 'E';
        const dateFormat = 'd';
        const months = [];
        let days = [];
        for (let i = 0; i <= differenceInMonths(lastDate, startDate); i++) {
            let start, end;
            const month = startOfMonth(addMonths(startDate, i));

            start = i === 0 ? Number(format(startDate, dateFormat)) - 1 : 0;
            end =
                i === differenceInMonths(lastDate, startDate)
                    ? Number(format(lastDate, 'd'))
                    : Number(format(lastDayOfMonth(month), 'd'));
            for (let j = start; j < end; j++) {
                let selected = getId(addDays(month, j));
                days.push(
                    <div
                        id={selected? 'selected' : ''}
                        className="dateDayItem"
                        style={getStyles(addDays(month, j))}
                        key={addDays(month, j)}
                        onClick={() => onDateClick(addDays(month, j))}
                    >
                        <div className={selected? 'dateLabel select' : 'dateLabel'}>
                            <span>{format(addDays(month, j), dateFormat)}</span>
                        </div>
                        <div className="dayLabel">{format(addDays(month, j), dayFormat)}</div>
                        <div className="notify">
                            <span className="data blue"></span>
                            <span className="data orange"></span>
                            <span className="data green"></span>
                            <span className="data violet"></span>
                            <span className="data blue"></span>
                            <span className="data orange"></span>
                            <span className="data green"></span>
                            <span className="data violet"></span>
                            <span className="data orange"></span>
                        </div>
                    </div>,
                );
            }
            months.push(
                <div className="monthContainer" key={month}>
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
                }, 20);
            }
        }
    }, [selectDate]);

    const nextWeek = () => {
        const e = document.getElementById('container');
        const width = e ? e.getBoundingClientRect().width : null;
        console.log('nextWeek', width);
        e.scrollLeft += width - 60;
    };

    const prevWeek = () => {
        const e = document.getElementById('container');
        const width = e ? e.getBoundingClientRect().width : null;
        console.log('prevWeek', width);
        e.scrollLeft -= width - 60;
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
