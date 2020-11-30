(function () {
  const App = (function () {

    let date;
    let option;
    let minuts; // 150672
    var minutes;

    function changeDate(date, operator, value) {
      this.date = date;
      this.option = operator;
      this.minuts = value;

      // value to days - hours - minutes
      this.minutes = minutes(this.minuts);

      this.date = this.date.split(' ');
      var dateForm = this.date[0].split('/');

      var year = dateForm[2];
      var month = dateForm[1];
      var day = dateForm[0];

      var timeForm = this.date[1].split(':');
      var hour = timeForm[0];
      var minute = timeForm[1];

      var date = new Date(year + '/' + month + '/' + day)

      date.setDate(date.getDate() + this.minutes['d'])
      date.setHours(date.getHours() + this.minutes['h'])
      date.setMinutes(date.getMinutes() + this.minutes['m'])

      return date;
    }

    function minutes(minuts) {
      const minutsInAnHour = 60;
      const secondsInAMinute = 60 * minutsInAnHour;
      const minutsInADay = 24 * minutsInAnHour;

      const days = Math.ceil(minuts / minutsInADay);

      const hourSeconds = minuts % minutsInADay;
      const hours = Math.ceil(hourSeconds / minutsInAnHour);

      const minuteSeconds = hourSeconds % secondsInAMinute;
      const minutes = Math.ceil(minuteSeconds / minutsInAnHour);

      return {
          'd': days,
          'h': hours,
          'm': minutes,
      };
    }

    return {
      changeDate: changeDate
    }
  })();
  
  console.log( App.changeDate('15/01/2007 13:22', '+', '150672') )

})()