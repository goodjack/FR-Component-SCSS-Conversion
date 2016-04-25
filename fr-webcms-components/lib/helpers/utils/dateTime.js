'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function DateTimeFormat(locale, options) {
  (0, _warning2.default)(locale === 'en-US', 'Wrong usage of DateTimeFormat. The ' + locale + ' locale is not supported.');

  this.format = function format(date) {
    var output = void 0;

    if (options.month === 'short' && options.weekday === 'short' && options.day === '2-digit') {

      output = dayList[date.getDay()] + ', ';
      output += monthList[date.getMonth()] + ' ';
      output += date.getDate();
    } else if (options.month === 'long' && options.year === 'numeric') {

      output = monthLongList[date.getMonth()];
      output += ' ' + date.getFullYear();
    } else {
      (0, _warning2.default)(false, 'Wrong usage of DateTimeFormat');
    }

    return output;
  };
}

exports.default = {
  DateTimeFormat: DateTimeFormat,

  addDays: function addDays(date, days) {
    var newDate = this.clone(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  },
  addMonths: function addMonths(date, months) {
    var newDate = this.clone(date);
    newDate.setMonth(date.getMonth() + months);
    return newDate;
  },
  addYears: function addYears(date, years) {
    var newDate = this.clone(date);
    newDate.setFullYear(date.getFullYear() + years);
    return newDate;
  },
  clone: function clone(date) {
    return new Date(date.getTime());
  },
  cloneAsDate: function cloneAsDate(date) {
    var clonedDate = this.clone(date);
    clonedDate.setHours(0, 0, 0, 0);
    return clonedDate;
  },
  getDaysInMonth: function getDaysInMonth(date) {
    var resultDate = this.getFirstDayOfMonth(date);

    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);

    return resultDate.getDate();
  },
  getFirstDayOfMonth: function getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  },
  getWeekArray: function getWeekArray(date) {
    var dayArray = [];
    var daysInMonth = this.getDaysInMonth(date);
    var daysInWeek = void 0;
    var emptyDays = void 0;
    var firstDayOfWeek = void 0;
    var week = void 0;
    var weekArray = [];

    for (var days = 1; days <= daysInMonth; days++) {
      dayArray.push(new Date(date.getFullYear(), date.getMonth(), days));
    }

    while (dayArray.length) {
      firstDayOfWeek = dayArray[0].getDay();
      daysInWeek = 7 - firstDayOfWeek;
      emptyDays = 7 - daysInWeek;
      week = dayArray.splice(0, daysInWeek);

      for (var _days = 0; _days < emptyDays; _days++) {
        week.unshift(null);
      }

      weekArray.push(week);
    }

    return weekArray;
  },
  format: function format(dateObj) {
    var month = dateObj.getMonth() + 1;
    var date = dateObj.getDate();
    var year = dateObj.getFullYear();
    return month + '/' + date + '/' + year;
  },
  isEqualDate: function isEqualDate(d1, d2) {
    return d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
  },
  isBeforeDate: function isBeforeDate(d1, d2) {
    var date1 = this.cloneAsDate(d1);
    var date2 = this.cloneAsDate(d2);

    return date1.getTime() < date2.getTime();
  },
  isAfterDate: function isAfterDate(d1, d2) {
    var date1 = this.cloneAsDate(d1);
    var date2 = this.cloneAsDate(d2);

    return date1.getTime() > date2.getTime();
  },
  isBetweenDates: function isBetweenDates(dateToCheck, startDate, endDate) {
    return !this.isBeforeDate(dateToCheck, startDate) && !this.isAfterDate(dateToCheck, endDate);
  },
  isDateObject: function isDateObject(date) {
    return date instanceof Date;
  },
  monthDiff: function monthDiff(d1, d2) {
    var monthDiff = void 0;
    monthDiff = (d1.getFullYear() - d2.getFullYear()) * 12;
    monthDiff += d1.getMonth();
    monthDiff -= d2.getMonth();
    return monthDiff;
  },
  yearDiff: function yearDiff(d1, d2) {
    return ~ ~(this.monthDiff(d1, d2) / 12);
  },
  getDateDiffText: function getDateDiffText(d1, d2) {
    var dateDiff = d1 - d2;
    var min = 1000 * 60;
    var hour = min * 60;
    var day = hour * 24;
    var diffByDay = dateDiff / day;
    var mf = Math.floor;
    var diffVal = void 0;
    var dateDiffText = void 0;
    if (mf(dateDiff / day / 30) > 11) {
      diffVal = mf(diffByDay / (30 * 12));
      dateDiffText = diffVal + ' years ago';
    } else if (mf(diffByDay / 30) > 0) {
      diffVal = mf(diffByDay / 30);
      dateDiffText = diffVal + ' months ago';
    } else if (mf(dateDiff / day) > 7) {
      diffVal = mf(dateDiff / (day * 7));
      dateDiffText = diffVal + ' weeks ago';
    } else if (mf(dateDiff / day) > 0) {
      diffVal = mf(dateDiff / day);
      dateDiffText = diffVal + ' days ago';
    } else if (mf(dateDiff / hour) > 0) {
      diffVal = mf(dateDiff / hour);
      dateDiffText = diffVal + ' hours ago';
    } else if (mf(dateDiff / min) > 0) {
      diffVal = mf(dateDiff / min);
      dateDiffText = diffVal + ' minutes ago';
    } else {
      diffVal = mf(dateDiff / 1000);
      dateDiffText = diffVal + ' seconds ago';
    }

    return dateDiffText;
  }
};