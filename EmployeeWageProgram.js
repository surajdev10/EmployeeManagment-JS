//Welcome to Employee Wage Problem
//UC1
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
  console.log("UC1--- Employee is Absent");
} else {
  console.log("UC1--- Employee is Present");
}

//UC2
{ 
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
 {
     let empHrs = 0;
     let empCheck = Math.floor(Math.random() * 10) % 3;
     switch (empCheck)
        {
        case IS_PART_TIME:
          empHrs = PART_TIME_HOURS;
          break;
        case IS_FULL_TIME:
          empHrs = FULL_TIME_HOURS;
          break;
        default:
          empHrs = 0;
        }
     let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC2--- EmpWage:" + empWage);
  }
}

// UC3
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    var WAGE_PER_HOUR = 20;  
    function getWorkingHours(empCheck) {
    switch (empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
    }
    empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC3--- Hour:" + empHrs + " EmpWage:" + empWage);
}

//UC4
{
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);}
    empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC4--- Number of Days: " +  NUM_OF_WORKING_DAYS +
                 " Total Hrs:" +totalEmpHrs + " Emp Wage:" + empWage  );
}

//UC5
{
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH &&  totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
       totalWorkingDays++;
       let empCheck = Math.floor(Math.random() * 10) % 3;
       totalEmpHrs += getWorkingHours(empCheck);
    }
    empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log( "UC5--- Total Days:" + totalWorkingDays +
             " Total Hrs:" +  totalEmpHrs + " EmpWage: " +  empWage);
}
          
//UC6
function calcDailyWage(empHrs)
{
    return empHrs * WAGE_PER_HOUR;
}
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
empWage = calcDailyWage(totalEmpHrs);
console.log("Employee wage array: " + empDailyWageArr.join(" "));
console.log("UC6--- Total Days: " + totalWorkingDays +
      " Total Hrs: " + totalEmpHrs +
      " Emp Wage: " + empWage);

//UC7      
// UC 7A- Calc total Wage using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage)
{
   totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A- Total Days: " + totalWorkingDays +
        " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);
function totalWages(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages));

//UC 7B - Show the day along with Daily Wage using Array Map Helper Function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) 
{
   dailyCntr++;
   return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log(mapDayWithWageArr);

//UC 7C - Show Days when Full Time Wage of 160 were earned
function fulltimeWage(dailyWage) 
{
   return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When FullTime Wage is Earned");
console.log(fullDayWageArr);

// UC 7D:- Find the first occurences when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime wage was earned on Day: " + mapDayWithWageArr.find(findFulltimeWage));

// UC 7E:- Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7E - Check All Element have Full Time Wage: " + fullDayWageArr.every(isAllFulltimeWage));

// UC 7F:- Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC7F - Check if there is any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G:- Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage)
{
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));
