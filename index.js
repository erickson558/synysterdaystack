const dayjs = require('dayjs');

/**
 * 
 * @param {*} date
 * @param {*} format 
 * @returns date formatted
 */
function formatDate(date, format = 'YYYY-MM-DD') {
  return dayjs(date).format(format);
}
/**
 * @param {*} date
 * @returns boolean if the date is a weekend
 */

function isWeekend(date) {
  return dayjs(date).day() === 6 || dayjs(date).day() ===0;
}
/**
 * @param {*} date
 * @returns boolean if the date is valid
 * 
 */

function isValidDate(date) {
  return dayjs(date).isValid();
}
/**
 * @param {*} date
 * @returns boolean if the date is a leap year
 * 
 */

module.exports = { 
    dayjs,
    formatDate,
    isWeekend,
    isValidDate,

 };