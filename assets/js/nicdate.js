//Function to determine the correct hours to post on website

//Define Regular Holidays
var newYearsDay = new Date('01/01/2020');
var mlkDay = new Date('01/20/2020');
var goodFriday = new Date('04/10/2020');
var easter = new Date('04/12/2020');
var memorialDay = new Date('05/25/2020');
var independence = new Date('07/04/2020');
var laborDay = new Date('09/07/2020');
var thanksgivingDay = new Date('11/28/2019');
var christmasEve = new Date('12/24/2019');
var christmasDay = new Date('12/25/2019');

//Spring Semester Dates
var springSemesterBegin = new Date('01/15/2020'); //First Day of Classes
var springBreakBegin = new Date('03/14/2020'); //First Saturday of Spring Break
var springBreakEnd = new Date('03/22/2020'); //Last Sunday of Spring Break
var springSemesterEnd = new Date('05/08/2020'); //Last Day of Classes

//Fall Semester Dates
var fallSemesterBegin = new Date('08/26/2019'); //First Day of Classes
var midFallBreakBegin = new Date('10/9/2019'); //Wednesday Before of Mid Fall Break
var midFallBreakEnd = new Date('10/13/2019'); //Sunday of Mid Fall Break
var homecoming = new Date('10/19/2019');
var thanksgivingBegin = new Date('11/27/2019'); //Wednesday Before Thanksgiving
var thanksgivingEnd = new Date('12/1/2019'); //Sunday after Thanksgiving
var fallSemesterEnd = new Date('12/13/2019'); //Last day of Classes

//Christmas Closing
var christmasClosingBegin = new Date('12/21/2019'); //First day of closing
var christmasClosingEnd = newYearsDay; //Last day of closing

function determineHours(currentDate){
    if((currentDate.getMonth() + 1) == (newYearsDay.getMonth() + 1) && currentDate.getDate() == newYearsDay.getDate()){
        return 'New Years Day';
    } else if ((currentDate.getMonth() + 1) == (mlkDay.getMonth() + 1) && currentDate.getDate() == mlkDay.getDate()) {
        return 'MLK Day';
    } else if ((currentDate.getMonth() + 1) == (goodFriday.getMonth() + 1) && currentDate.getDate() == goodFriday.getDate()) {
        return 'Good Friday';
    } else if ((currentDate.getMonth() + 1) == (easter.getMonth() + 1) && currentDate.getDate() == easter.getDate()) {
        return 'Easter';
    } else if ((currentDate.getMonth() + 1) == (memorialDay.getMonth() + 1) && currentDate.getDate() == memorialDay.getDate()) {
        return 'Memorial Day';
    } else if ((currentDate.getMonth() + 1) == (independence.getMonth() + 1) && currentDate.getDate() == independence.getDate()) {
        return 'Independence Day';
    } else if ((currentDate.getMonth() + 1) == (laborDay.getMonth() + 1) && currentDate.getDate() == laborDay.getDate()){
        return 'Labor Day';
    } else if ((currentDate.getMonth() + 1) == (homecoming.getMonth() + 1) && currentDate.getDate() == homecoming.getDate()) {
        return 'Homecoming';
    } else if ((currentDate.getMonth() + 1) == (thanksgivingDay.getMonth() + 1) && currentDate.getDate() == thanksgivingDay.getDate()) {
        return 'Thanksgiving';
    } else if ((currentDate.getMonth() + 1) == (thanksgivingDay.getMonth() + 1) && currentDate.getDate() == thanksgivingDay.getDate() + 1) {
        return 'Black Friday';
    } else if ((currentDate.getMonth() + 1) == (thanksgivingDay.getMonth() + 1) && currentDate.getDate() == thanksgivingDay.getDate() + 2) {
        return 'Saturday after Thanksgiving';
    } else if ((currentDate.getMonth() + 1) == (christmasEve.getMonth() + 1) && currentDate.getDate() == christmasEve.getDate()) {
        return 'Christmas Eve';
    } else if ((currentDate.getMonth() + 1) == (christmasDay.getMonth() + 1) && currentDate.getDate() == christmasDay.getDate()) {
        return 'Christmas';
    } else if(currentDate > newYearsDay && currentDate < springSemesterBegin){
        return 'break';
    } else if((currentDate.getMonth() + 1) == (goodFriday.getMonth() + 1) && currentDate.getDate() == (goodFriday.getDate() - 1)) {
        return 'Day Before Good Friday';
    } else if((currentDate.getMonth() + 1) == (easter.getMonth() + 1) && currentDate.getDate() == (easter.getDate() + 1)) {
        return 'Easter Traveling Day';
    } else if(currentDate > goodFriday && currentDate < easter) {
        return 'break';
    } else if (currentDate >= springBreakBegin && currentDate < springBreakEnd ) {
        return 'break';
    } else if ((currentDate.getMonth() + 1) == (springBreakEnd.getMonth() + 1) && currentDate.getDate() == springBreakEnd.getDate()) {
        return 'End of Spring Break';
    } else if (currentDate > springSemesterEnd && currentDate < fallSemesterBegin) {
        return 'break';
    } else if (currentDate >= midFallBreakBegin && currentDate < midFallBreakEnd) {
        return 'Mid Fall Break';
    } else if (currentDate >= thanksgivingBegin && currentDate < thanksgivingEnd){
        return 'break';
    } else if ((currentDate.getMonth() + 1) == (thanksgivingEnd.getMonth() + 1) && currentDate.getDate() == thanksgivingEnd.getDate()){
        return 'Sunday after Thanksgiving';
    } else if (currentDate > fallSemesterEnd && currentDate.getFullYear() == fallSemesterEnd.getFullYear()){
        return 'break';
    } else if (currentDate >= christmasClosingBegin && currentDate <= christmasClosingEnd) {
        return 'Christmas Closing';
    }
}

function getDay(day){
    var weekday;

    switch(day){
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

function semesterHours(day){
    var operatingHours;

    switch(day){
        case 0:
            operatingHours = '1:30pm - Midnight';
            break;
        case 5:
            operatingHours = '7:45am - 5:00pm';
            break;
        case 6:
            operatingHours = '11:00am - 5:00pm';
            break;
        default:
            operatingHours = '7:45am - Midnight';
    }

    return operatingHours;
}

function breakHours(day){
    var operatingHours;

    switch(day){
        case 0:
        case 6:
            operatingHours = 'Closed';
            break;
        default:
            operatingHours = '8:00am - 5:00pm';
    }

    return operatingHours;

}

function midFallBreakHours(day){
    var operatingHours;

    switch(day){
        case 3:
            operatingHours = '7:45am - 5:00pm';
            break;
        default:
            operatingHours = 'Closed for Mid Fall Break';
    }

    return operatingHours;
}

function displayHours(){
    //Get current date
    var currentDate = new Date();

    //Get current year, month, day of month, and day of week
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var dayOfMonth = currentDate.getDate();
    var dayOfWeek = currentDate.getDay();

    var weekday = getDay(dayOfWeek);
    var hoursToday;

    switch(determineHours(currentDate)){
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
            hoursToday = 'Closed for Homecoming\nGBGR!';
            break;
        case 'Thanksgiving':
        case 'Black Friday':
        case 'Saturday after Thanksgiving':
            hoursToday = 'Closed for Thanksgiving';
            break;
        case 'Sunday after Thanksgiving':
            hoursToday = '7pm - Midnight';
            break;
        case 'Christmas Eve':
        case 'Christmas':
            hoursToday = 'Closed\nMerry Christmas'
            break;
        case 'Christmas Closing':
            hoursToday = 'Closed';
        case 'break':
            hoursToday = breakHours(dayOfWeek);
            break;
        default:
            hoursToday = semesterHours(dayOfWeek);
    }

    //This has been added because of COVID-19
    switch(weekday) {
        case 'Sunday':
		case 'Saturday':
            hoursToday = 'Closed';
            break;
        default:
            hoursToday = '8am - 5pm (EDT)';
    }



    return 'Library building closed.<br/>Librarians available virtually:<br/>' + hoursToday;

}

console.log(displayHours());
