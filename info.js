//Created by bennett
//all info can be seen on the github page

//Birth Year
var birthMonth = document.getElementById("birthMonthVar");
var birthDay = document.getElementById("birthDayVar");
var birthYear = document.getElementById("birthYearVar");

//Current Year
var currentMonth = document.getElementById("birthMonthVar");
var currentDay = document.getElementById("birthDayVar");
var currentYear = document.getElementById("birthYearVar");

//Other
var currentSubmit = document.getElementById("currentSubmitVar");
var submission = document.getElementById("submissionVar")
const averageDaysAlive = ((currentYear - birthYear) * 365 + 
    (currentMonth - birthMonth) * 30 + (currentDay - birthDay))

    //Submit Button Function
function submitFunction(){
    
    submission.innerHTML = "You have lived for ";

}