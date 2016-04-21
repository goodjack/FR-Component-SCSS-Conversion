import warning from 'warning';

const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthList = [
  'Jan', 'Feb', 'Mar',
  'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec',
];
const monthLongList = [
  'January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'November', 'December',
];

function DateTimeFormat(locale, options) {
  warning(locale === 'en-US',
    `Wrong usage of DateTimeFormat. The ${locale} locale is not supported.`);

  this.format = function format(date) {
    let output;

    if (options.month === 'short' &&
      options.weekday === 'short' &&
      options.day === '2-digit') {

      output = `${dayList[date.getDay()]}, `;
      output += `${monthList[date.getMonth()]} `;
      output += date.getDate();
    } else if (options.month === 'long'
        && options.year === 'numeric') {

      output = monthLongList[date.getMonth()];
      output += ` ${date.getFullYear()}`;
    } else {
      warning(false, 'Wrong usage of DateTimeFormat');
    }

    return output;
  };
}

export default {
  DateTimeFormat,

  addDays(date, days) {
    const newDate = this.clone(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  },

  addMonths(date, months) {
    const newDate = this.clone(date);
    newDate.setMonth(date.getMonth() + months);
    return newDate;
  },

  addYears(date, years) {
    const newDate = this.clone(date);
    newDate.setFullYear(date.getFullYear() + years);
    return newDate;
  },

  clone(date) {
    return new Date(date.getTime());
  },

  cloneAsDate(date) {
    const clonedDate = this.clone(date);
    clonedDate.setHours(0, 0, 0, 0);
    return clonedDate;
  },

  getDaysInMonth(date) {
    const resultDate = this.getFirstDayOfMonth(date);

    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);

    return resultDate.getDate();
  },

  getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  },

  getWeekArray(date) {
    const dayArray = [];
    const daysInMonth = this.getDaysInMonth(date);
    let daysInWeek;
    let emptyDays;
    let firstDayOfWeek;
    let week;
    const weekArray = [];

    for (let days = 1; days <= daysInMonth; days++) {
      dayArray.push(new Date(date.getFullYear(), date.getMonth(), days));
    }

    while (dayArray.length) {
      firstDayOfWeek = dayArray[0].getDay();
      daysInWeek = 7 - firstDayOfWeek;
      emptyDays = 7 - daysInWeek;
      week = dayArray.splice(0, daysInWeek);

      for (let days = 0; days < emptyDays; days++) {
        week.unshift(null);
      }

      weekArray.push(week);
    }

    return weekArray;
  },

  format(dateObj) {
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${month}/${date}/${year}`;
  },

  isEqualDate(d1, d2) {
    return d1 && d2 &&
      (d1.getFullYear() === d2.getFullYear()) &&
      (d1.getMonth() === d2.getMonth()) &&
      (d1.getDate() === d2.getDate());
  },

  isBeforeDate(d1, d2) {
    const date1 = this.cloneAsDate(d1);
    const date2 = this.cloneAsDate(d2);

    return (date1.getTime() < date2.getTime());
  },

  isAfterDate(d1, d2) {
    const date1 = this.cloneAsDate(d1);
    const date2 = this.cloneAsDate(d2);

    return (date1.getTime() > date2.getTime());
  },

  isBetweenDates(dateToCheck, startDate, endDate) {
    return (!(this.isBeforeDate(dateToCheck, startDate)) &&
            !(this.isAfterDate(dateToCheck, endDate)));
  },

  isDateObject(date) {
    return date instanceof Date;
  },

  monthDiff(d1, d2) {
    let monthDiff;
    monthDiff = (d1.getFullYear() - d2.getFullYear()) * 12;
    monthDiff += d1.getMonth();
    monthDiff -= d2.getMonth();
    return monthDiff;
  },

  yearDiff(d1, d2) {
    return ~~(this.monthDiff(d1, d2) / 12);
  },

};
