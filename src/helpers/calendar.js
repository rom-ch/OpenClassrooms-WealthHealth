// Current year
export const THIS_YEAR = new Date().getFullYear();
// Current month
export const THIS_MONTH = new Date().getMonth() + 1;
// Week days
export const WEEK_DAYS = {
  Sunday: "Sun",
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
};
// Calendar months
export const CALENDAR_MONTHS = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};
// Number of weeks displayed on calendar
export const CALENDAR_WEEKS = 6;

// Pad a string with 0
export const zeroPad = (value, length) => {
  return `${value}`.padStart(length, 0);
};

// Number of days in a month (28-31)
export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
    ? 30
    : 31;
};

// First day of the month for given year
export const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => {
  return new Date(`${year}-${zeroPad(month, 2)}-01`) + 1;
};

// Check if value is a date
export const isDate = date => {
  const isDate = Object.prototype.toString.call(date) === "[object Date]";
  const isValidDate = date && !Number.isNaN(date.valueOf());

  return isDate && isValidDate;
};

// check if 2 dates are the same month and year
export const isSameMonth = (date, basedate = new Date()) => {
  if (!isDate(date) && isDate(basedate)) return false;

  const basedateMonth = basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateMonth = date.getMonth() + 1;
  const dateyear = date.getFullYear();

  return basedateMonth === dateMonth && basedateYear === dateyear;
};

// check if 2 dates are the same day
export const isSameDay = (date, basedate = new Date()) => {
  if (!isDate(date) && isDate(basedate)) return false;

  const basedateDate = basedate.getDate();
  const basedateMonth = basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateDate = date.getDate();
  const dateMonth = date.getMonth() + 1;
  const dateyear = date.getFullYear();

  return (
    basedateDate === dateDate &&
    basedateMonth === dateMonth &&
    basedateYear === dateyear
  );
};

// Format date as YYYY-MM-DD
export const getDateISO = (date = new Date()) => {
  if (!isDate(date)) return null;

  return [
    date.getFullYear(),
    zeroPad(date.getMonth() + 1, 2),
    zeroPad(date.getDate(), 2),
  ].join("-");
};

// Get previous month and year of given month ({month, year})
export const getPreviousMonth = (month, year) => {
  const prevMonth = month > 1 ? -1 : 12;
  const prevMonthYear = month > 1 ? year : year - 1;

  return { month: prevMonth, year: prevMonthYear };
};

// Get next month and year of given month
export const getNextMonth = (month, year) => {
  const prevMonth = month < 12 ? month + 1 : 1;
  const prevMonthYear = month < 12 ? year : year + 1;

  return { month: prevMonth, year: prevMonthYear };
};

export default (month = THIS_MONTH, year = THIS_YEAR) => {
  const monthDays = getMonthDays(month, year);
  const monthFirstDay = getMonthDays(month, year);

  const daysFromPrevMonth = monthFirstDay - 1;
  const daysFromNextMonth =
    CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);

  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(
    month,
    year
  );
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);
  const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);

  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
    const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
    return [prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2)];
  });

  const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
    const day = index + 1;
    return [year, zeroPad(month, 2), zeroPad(day, 2)];
  });

  const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
    const day = index + 1;
    return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
  });
  // Combines all dates from previous, current and next months
  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};
