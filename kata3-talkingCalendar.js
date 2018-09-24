var talkingCalendar = function (date) {

  // IMPORTANT: *** NOT MY WORK, TAKEN FROM PREP HELP FORUM TO STUDY ***

  var arrayMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"];
  var result = new Date(date);
  var year = result.getFullYear(result); // Taking the Year
  var month = arrayMonths[(result.getMonth(date))]; // Taking the Month
  var day = result.getDate(); // Taking the Day

  if (day % 10 === 1 && (day/10 === 1 || 2 || 3)) {
    switch (day){
      case 11:
       return month + " " + day + "th, " + year;
      break;
      case 0:
       return month + "31st, " + year;
      break;
      default:
       return month + " " + day + "st, " + year;
  }
  } else if(day % 10 === 2 && (day/10 === 1 || 2 || 3)){
      switch (day){
      case 12:
       return month + " " + day + "th, " + year;
      break;
      default:
       return month + " " + day + "nd, " + year;
    }
  } else if(day % 10 === 3 && (day/10 === 1 || 2 || 3)){
      switch (day){
      case 13:
       return month + " " + day + "th, " + year;
      break;
      default:
       return month + " " + day + "rd, " + year;
    }
  } else {
     return month + " " + day + "th, " + year;
    }
  return result;




};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1991/01/9"));


// OUTPUT

//December 2nd, 2017
//November 11th, 2007
//August 24th, 1987

