var talkingCalendar = function (date) {

var split = date.split("/");
var year = split[0];
var month = split[1];
var day = split[2];


var newMonth = month;
switch (newMonth) {
  case "01":
  newMonth = "January ";
  break;
  case "02":
  newMonth = "February ";
  break;
  case "03":
  newMonth = "March ";
  break;
  case "04":
  newMonth = "April ";
  break;
  case "05":
  newMonth = "May ";
  break;
  case "06":
  newMonth = "June ";
  break;
  case "07":
  newMonth = "July ";
  break;
  case "08":
  newMonth = "August ";
  break;
  case "09":
  newMonth = "September ";
  break;
  case "10":
  newMonth = "October ";
  break;
  case "11":
  newMonth = "November ";
  break;
  case "12":
  newMonth = "December ";
  break;
  default:
  "Not a month";
}



var dayAtChar0 = day.charAt(0);
var dayAtChar1 = day.charAt(1);

if (dayAtChar0 === "0") {
  return dayAtChar1;
} else {
  return day;
}



};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// OUTPUT

//December 2nd, 2017
//November 11th, 2007
//August 24th, 1987

