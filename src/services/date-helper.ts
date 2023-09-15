class DateHelper {
  getYearDifference(dateString: string) {
    const date = new Date(dateString);
    const monthDiff = Date.now() - date.getTime();
    const ageDate = new Date(monthDiff);
    const year = ageDate.getUTCFullYear();
    const age = Math.abs(year - 1970);

    return age;
  }
}

export default DateHelper;
