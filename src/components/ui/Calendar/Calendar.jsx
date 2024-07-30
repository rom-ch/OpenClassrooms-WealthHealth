import { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS,
} from "../../../helpers/calendar";

function Calendar({ date, onDateChanged }) {
  const [dateState, setDateState] = useState({
    current: new Date(),
    month: 0,
    year: 0,
  });

  const [today, setToday] = useState(new Date());

  useEffect(() => {
    addDateToState(date);
  }, []);

  const addDateToState = date => {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();
    setDateState({
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear(),
    });
  };

  const getCalendarDates = () => {
    const { current, month, year } = dateState;
    console.log(typeof current);
    console.log(current);
    const calendarMonth = month || +current?.getMonth() + 1;
    const calendarYear = year || current?.getFullYear();
    return calendar(calendarMonth, calendarYear);
  };

  return (
    <div className="CalendarContainer">
      {renderMonthAndYear()}
      <div className="CalendarGrid">
        <Fragment>{Object.keys(WEEK_DAYS).map(renderDayLabel)}</Fragment>
        <Fragment>{getCalendarDates().map(renderCalendarDate)}</Fragment>
      </div>
    </div>
  );
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  onDateChanged: PropTypes.func,
};

export default Calendar;
