//Function to determine the correct hours to post on website

//Define Regular Holidays
var newYearsDay = new Date('01/01/2021');
var mlkDay = new Date('01/18/2021');
var goodFriday = new Date('04/02/2021');
var easter = new Date('04/04/2021');
var memorialDay = new Date('05/31/2021');
var independence = new Date('07/04/2021');
var laborDay = new Date('09/07/2020');
var thanksgivingDay = new Date('11/26/2020');
var christmasEve = new Date('12/24/2020');
var christmasDay = new Date('12/25/2020');

//Spring Semester Dates
var springSemesterBegin = new Date('01/13/2021'); //First Day of Classes
var springBreakBegin = new Date('03/13/2021'); //First Saturday of Spring Break
var springBreakEnd = new Date('03/21/2021'); //Last Sunday of Spring Break
var springSemesterEnd = new Date('05/07/2021'); //Last Day of Classes

//Fall Semester Dates
var fallSemesterBegin = new Date('08/31/2020'); //First Day of Classes
var midFallBreakBegin = new Date('10/07/2020'); //Wednesday Before of Mid Fall Break
var midFallBreakEnd = new Date('10/11/2020'); //Sunday of Mid Fall Break
var homecoming = new Date('10/17/2020');
var thanksgivingBegin = new Date('11/24/2020'); //Tuesday Before Thanksgiving
var thanksgivingEnd = new Date('11/30/2020'); //Monday after Thanksgiving
var fallSemesterEnd = new Date('12/18/2020'); //Last day of Classes

//Christmas Closing
var christmasClosingBegin = new Date('12/23/2020'); //First day of closing
var christmasClosingEnd = newYearsDay; //Last day of closing

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
    currentDate > springSemesterEnd &&
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
      operatingHours = '7:45am - 5:00pm';
      break;
    case 6:
      operatingHours = 'Closed';
      break;
    default:
      operatingHours = '7:45am - 11:00pm';
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
      hoursToday = '8:00am - Midnight';
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
    default:
      hoursToday = semesterHours(dayOfWeek);
  }
  
  switch(dayOfWeek){
	case 4:
	case 5:
		hoursToday = '8:00am - 5:00pm';
		break;
	case 0:
		hoursToday = '5:00pm - 11:00pm';
		break;
  }

  //console.log(currentDate, determineHours(currentDate));
  return hoursToday;

  //Uncomment for testing
  //console.log(
  //  `${month}/${dayOfMonth} (${determineHours(currentDate)})= ${hoursToday}`
  //);
}

// Testing through Date range
//let testDate = new Date();
//while (testDate < independence) {
//  displayHours(testDate);
//
//  let newTestDate = testDate.setDate(testDate.getDate() + 1);
//  testDate = new Date(newTestDate);
