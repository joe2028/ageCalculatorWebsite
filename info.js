//Created by bennett
//all info can be seen on the github page

//Birth Year

    //Submit Button Function
function sun(){
    var birthMonth = document.getElementById("birthMonthVar").value;
    var birthDay = document.getElementById("birthDayVar").value;
    var birthYear = document.getElementById("birthYearVar").value;

    //Current Year
    var currentMonth = document.getElementById("currentMonthVar").value;
    var currentDay = document.getElementById("currentDayVar").value;
    var currentYear = document.getElementById("currentYearVar").value;

    //Other
    var Submit = document.getElementById("currentSubmitVar");
    const averageDaysAlive = ((currentYear - birthYear) * 365 + 
    (currentMonth - birthMonth) * 30 + (currentDay - birthDay));
    document.getElementById("submissionsVar").innerHTML = "You have lived for " + 
    averageDaysAlive + " days.";

}