//Function to determine the correct hours to post on website

//Define Regular Holidays
var laborDay = new Date('09/06/2021');
var thanksgivingDay = new Date('11/25/2021');
var christmasEve = new Date('12/24/2021');
var christmasDay = new Date('12/25/2021');
var newYearsDay = new Date('01/01/2022');
var mlkDay = new Date('01/17/2022');
var goodFriday = new Date('04/15/2022');
var easter = new Date('04/17/2022');
var memorialDay = new Date('05/30/2022');
var independence = new Date('07/04/2022');

//Fall Semester Dates
var fallSemesterBegin = new Date('08/30/2021'); //First Day of Classes
var midFallBreakBegin = new Date('10/13/2021'); //Wednesday Before of Mid Fall Break
var midFallBreakEnd = new Date('10/17/2021'); //Sunday of Mid Fall Break
var homecoming = new Date('10/09/2021');
var thanksgivingBegin = new Date('11/23/2021'); //Tuesday Before Thanksgiving
var thanksgivingEnd = new Date('11/29/2021'); //Monday after Thanksgiving
var fallExtendedHoursBegin = new Date('12/05/2021'); //Begin Extended Hours
var fallSemesterEnd = new Date('12/18/2021'); //Last day of Classes

//Christmas Closing
var christmasClosingBegin = new Date('12/23/2021'); //First day of closing
var christmasClosingEnd = newYearsDay; //Last day of closing

//Spring Semester Dates
var springSemesterBegin = new Date('01/12/2022'); //First Day of Classes
var springBreakBegin = new Date('03/12/2022'); //First Saturday of Spring Break
var springBreakEnd = new Date('03/20/2022'); //Last Sunday of Spring Break
var springSemesterEnd = new Date('05/06/2022'); //Last Day of Classes

function determineHours(currentDate) {
  if (
    currentDate.getMonth() + 1 == newYearsDay.getMonth() + 1 &&
    currentDate.getDate() == newYearsDay.getDate()
  ) {
    return 'New Years Day';
  } else if (
    currentDate.getMonth() + 1 == mlkDay.getMonth() + 1 &&
    currentDate.getDate() == mlkDay.getDate()
  ) {
    return 'MLK Day';
  } else if (
    currentDate.getMonth() + 1 == goodFriday.getMonth() + 1 &&
    currentDate.getDate() == goodFriday.getDate()
  ) {
    return 'Good Friday';
  } else if (
    currentDate.getMonth() + 1 == easter.getMonth() + 1 &&
    currentDate.getDate() == easter.getDate()
  ) {
    return 'Easter';
  } else if (
    currentDate.getMonth() + 1 == memorialDay.getMonth() + 1 &&
    currentDate.getDate() == memorialDay.getDate()
  ) {
    return 'Memorial Day';
  } else if (
    currentDate.getMonth() + 1 == independence.getMonth() + 1 &&
    currentDate.getDate() == independence.getDate()
  ) {
    return 'Independence Day';
  } else if (
    currentDate.getMonth() + 1 == laborDay.getMonth() + 1 &&
    currentDate.getDate() == laborDay.getDate()
  ) {
    return 'Labor Day';
  } else if (
    currentDate.getMonth() + 1 == homecoming.getMonth() + 1 &&
    currentDate.getDate() == homecoming.getDate()
  ) {
    return 'Homecoming';
  } else if (
    currentDate.getMonth() + 1 == christmasEve.getMonth() + 1 &&
    currentDate.getDate() == christmasEve.getDate()
  ) {
    return 'Christmas Eve';
  } else if (
    currentDate.getMonth() + 1 == christmasDay.getMonth() + 1 &&
    currentDate.getDate() == christmasDay.getDate()
  ) {
    return 'Christmas';
  } else if (currentDate > newYearsDay && currentDate < springSemesterBegin) {
    return 'break';
  } else if (
    currentDate.getMonth() + 1 == goodFriday.getMonth() + 1 &&
    currentDate.getDate() == goodFriday.getDate() - 1
  ) {
    return 'Day Before Good Friday';
  } else if (
    currentDate.getMonth() + 1 == easter.getMonth() + 1 &&
    currentDate.getDate() == easter.getDate() + 1
  ) {
    return 'Easter Traveling Day';
  } else if (currentDate > goodFriday && currentDate < easter) {
    return 'break';
  } else if (currentDate >= springBreakBegin && currentDate < springBreakEnd) {
    return 'break';
  } else if (
    currentDate.getMonth() + 1 == springBreakEnd.getMonth() + 1 &&
    currentDate.getDate() == springBreakEnd.getDate()
  ) {
    return 'End of Spring Break';
  } else if (
    currentDate > springSemesterEnd ||
    currentDate < fallSemesterBegin
  ) {
    return 'break';
  } else if (
    currentDate >= midFallBreakBegin &&
    currentDate < midFallBreakEnd
  ) {
    return 'Mid Fall Break';
  } else if (
    currentDate >= thanksgivingBegin &&
    currentDate <= thanksgivingEnd
  ) {
    return 'Thanksgiving Break';
  } else if (
    currentDate >= fallExtendedHoursBegin && 
    currentDate < fallSemesterEnd
  ) {
    return 'Extended Hours';
  } else if (
    currentDate >= christmasClosingBegin &&
    currentDate <= christmasClosingEnd
  ) {
    return 'Christmas Closing';
  } else if (
    currentDate > fallSemesterEnd &&
    currentDate.getFullYear() == fallSemesterEnd.getFullYear()
  ) {
    return 'break';
  }
}

function getDay(day) {
  var weekday;

  switch (day) {
    case 0:
      weekday = 'Sunday';
      break;
    case 1:
      weekday = 'Monday';
      break;
    case 2:
      weekday = 'Tuesday';
      break;
    case 3:
      weekday = 'Wednesday';
      break;
    case 4:
      weekday = 'Thursday';
      break;
    case 5:
      weekday = 'Friday';
      break;
    case 6:
      weekday = 'Saturday';
      break;
  }

  return weekday;
}

function semesterHours(day) {
  var operatingHours;

  switch (day) {
    case 0:
      operatingHours = '1:30pm - 11:00pm';
      break;
    case 5:
      operatingHours = '8am - 5:00pm';
      break;
    case 6:
      operatingHours = 'Closed';
      break;
    default:
      operatingHours = '8am - 11:00pm';
  }

  return operatingHours;
}

function breakHours(day) {
  var operatingHours;

  switch (day) {
    case 0:
    case 6:
      operatingHours = 'Closed';
      break;
    default:
      operatingHours = '8:00am - 5:00pm';
  }

  return operatingHours;
}

function midFallBreakHours(day) {
  var operatingHours;

  switch (day) {
    case 3:
      operatingHours = '7:45am - 5:00pm';
      break;
    default:
      operatingHours = 'Closed for Mid Fall Break';
  }

  return operatingHours;
}

function thanksgivingBreakHours(day) {
    var operatingHours;

    switch (day) {
        case 2:
            operatingHours = '7:45am - 5:00pm';
            break;
        default:
            operatingHours = 'Closed\nHappy Thanksgiving';
    }

    return operatingHours;
}

function endOfSemesterExtendedHours(day){
  var operatingHours;

  switch(day){
    case 0:
      operatingHours = '1:30pm - Midnight';
      break;
    case 6:
      operatingHours = '11am - 6pm';
      break;
    default:
      operatingHours = '8am - Midnight';
  }

  return operatingHours;
}

function displayHours(date) {
  //Get current date

  // When testing comment out and uncomment the one below
  var currentDate = new Date();
  //var currentDate = date;

  //Get current year, month, day of month, and day of week
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var dayOfMonth = currentDate.getDate();
  var dayOfWeek = currentDate.getDay();

  var weekday = getDay(dayOfWeek);
  var hoursToday;

  switch (determineHours(currentDate)) {
    case 'New Years Day':
      hoursToday = 'Closed for New Years Day';
      break;
    case 'MLK Day':
      hoursToday = '5pm - Midnight';
      break;
    case 'End of Spring Break':
      hoursToday = '7:00pm - Midnight';
      break;
    case 'Day Before Good Friday':
      hoursToday = '7:45am - 5:00pm';
      break;
    case 'Good Friday':
      hoursToday = 'Closed for Good Friday';
      break;
    case 'Easter':
      hoursToday = 'Closed for Easter';
      break;
    case 'Easter Traveling Day':
      hoursToday = '8:00am - 11:00pm';
      break;
    case 'Memorial Day':
      hoursToday = 'Closed for Memorial Day';
      break;
    case 'Independence Day':
      hoursToday = 'Closed for Independence Day';
      break;
    case 'Labor Day':
      hoursToday = 'Closed for Labor Day';
      break;
    case 'Mid Fall Break':
      hoursToday = midFallBreakHours(dayOfWeek);
      break;
    case 'Homecoming':
      hoursToday = 'Closed\nHappy Homecoming\nGBGR!';
      break;
    case 'Thanksgiving Break':
        hoursToday = thanksgivingBreakHours(dayOfWeek);
        break;
    case 'Christmas Eve':
    case 'Christmas':
      hoursToday = 'Closed\nMerry Christmas';
      break;
    case 'Christmas Closing':
      hoursToday = 'Closed';
    case 'break':
      hoursToday = breakHours(dayOfWeek);
      break;
    case 'Extended Hours':
      hoursToday = endOfSemesterExtendedHours(dayOfWeek);
      break;
    default:
      hoursToday = semesterHours(dayOfWeek);
  }
  

  //console.log(currentDate, determineHours(currentDate));
  //return hoursToday;

  //Uncomment for testing
  //console.log(
  //  `${month}/${dayOfMonth} (${determineHours(currentDate)})= ${hoursToday}`
  //);
}

// Testing through Date range
//let testDate = new Date();
//while (testDate < christmasDay) {
//  displayHours(testDate);
//
//  let newTestDate = testDate.setDate(testDate.getDate() + 1);
//  testDate = new Date(newTestDate);
//}