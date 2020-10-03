// ?NASA APIs:
// key: SmOaKKepEB7sVT8SDnESBJQnz2A40xjB7l4sEzAG
// example: https://api.nasa.gov/planetary/apod?api_key=SmOaKKepEB7sVT8SDnESBJQnz2A40xjB7l4sEzAG
// Account Email: gubcode@gmail.com
// Account ID: 0e3507ca-8781-4e41-a0db-84a13c4c0c52

// ?InSight: Mars Weather Service API:
// example: https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0
// provides per-Sol summary data for each of the last seven available Sols

// ?meteostat.net API:
// key: t47hKspOMH0e4gdhx5kmKtH0uBxyyISK
//fetch header: curl --header "x-api-key: t47hKspOMH0e4gdhx5kmKtH0uBxyyISK"
//example to find station: "https://api.meteostat.net/v2/stations/search/search?query=indianapolis"
//example to find days: "https://api.meteostat.net/v2/stations/daily?station=68816&start=2019-06-01&end=2019-06-30"

//assets
const url = 'https://api.nasa.gov/insight_weather/?api_key=SmOaKKepEB7sVT8SDnESBJQnz2A40xjB7l4sEzAG&feedtype=json&ver=1.0';
let url2 = `https://api.meteostat.net/v2/stations/search/search?query=indianapolis`; //cut down, see above
let url3 = `https://api.meteostat.net/v2/stations/daily?station=72438&start=` //cut down, see above
const url2Key = 't47hKspOMH0e4gdhx5kmKtH0uBxyyISK';
//sol1
let solSol1 = document.querySelector('.solSol1');
let tempAvgSol1 = document.querySelector('.tempAvgSol1');
let tempHighSol1 = document.querySelector('.tempHighSol1');
let tempLowSol1 = document.querySelector('.tempLowSol1');
let pressureSol1 = document.querySelector('.pressureSol1');
let windSol1 = document.querySelector('.windSol1');
//sol2
let solSol2 = document.querySelector('.solSol2');
let tempAvgSol2 = document.querySelector('.tempAvgSol2');
let tempHighSol2 = document.querySelector('.tempHighSol2');
let tempLowSol2 = document.querySelector('.tempLowSol2');
let pressureSol2 = document.querySelector('.pressureSol2');
let windSol2 = document.querySelector('.windSol2');
//sol3
let solSol3 = document.querySelector('.solSol3');
let tempAvgSol3 = document.querySelector('.tempAvgSol3');
let tempHighSol3 = document.querySelector('.tempHighSol3');
let tempLowSol3 = document.querySelector('.tempLowSol3');
let pressureSol3 = document.querySelector('.pressureSol3');
let windSol3 = document.querySelector('.windSol3');
//sol4
let solSol4 = document.querySelector('.solSol4');
let tempAvgSol4 = document.querySelector('.tempAvgSol4');
let tempHighSol4 = document.querySelector('.tempHighSol4');
let tempLowSol4 = document.querySelector('.tempLowSol4');
let pressureSol4 = document.querySelector('.pressureSol4');
let windSol4 = document.querySelector('.windSol4');
//sol5
let solSol5 = document.querySelector('.solSol5');
let tempAvgSol5 = document.querySelector('.tempAvgSol5');
let tempHighSol5 = document.querySelector('.tempHighSol5');
let tempLowSol5 = document.querySelector('.tempLowSol5');
let pressureSol5 = document.querySelector('.pressureSol5');
let windSol5 = document.querySelector('.windSol5');
//sol6
let solSol6 = document.querySelector('.solSol6');
let tempAvgSol6 = document.querySelector('.tempAvgSol6');
let tempHighSol6 = document.querySelector('.tempHighSol6');
let tempLowSol6 = document.querySelector('.tempLowSol6');
let pressureSol6 = document.querySelector('.pressureSol6');
let windSol6 = document.querySelector('.windSol6');
//sol7
let solSol7 = document.querySelector('.solSol7');
let tempAvgSol7 = document.querySelector('.tempAvgSol7');
let tempHighSol7 = document.querySelector('.tempHighSol7');
let tempLowSol7 = document.querySelector('.tempLowSol7');
let pressureSol7 = document.querySelector('.pressureSol7');
let windSol7 = document.querySelector('.windSol7');
//day1
let solDay1 = document.querySelector('.solDay1');
let tempAvgDay1 = document.querySelector('.tempAvgDay1');
let tempHighDay1 = document.querySelector('.tempHighDay1');
let tempLowDay1 = document.querySelector('.tempLowDay1');
let pressureDay1 = document.querySelector('.pressureDay1');
let windDay1 = document.querySelector('.windDay1');
//day2
let solDay2 = document.querySelector('.solDay2');
let tempAvgDay2 = document.querySelector('.tempAvgDay2');
let tempHighDay2 = document.querySelector('.tempHighDay2');
let tempLowDay2 = document.querySelector('.tempLowDay2');
let pressureDay2 = document.querySelector('.pressureDay2');
let windDay2 = document.querySelector('.windDay2');
//day3
let solDay3 = document.querySelector('.solDay3');
let tempAvgDay3 = document.querySelector('.tempAvgDay3');
let tempHighDay3 = document.querySelector('.tempHighDay3');
let tempLowDay3 = document.querySelector('.tempLowDay3');
let pressureDay3 = document.querySelector('.pressureDay3');
let windDay3 = document.querySelector('.windDay3');
//day4
let solDay4 = document.querySelector('.solDay4');
let tempAvgDay4 = document.querySelector('.tempAvgDay4');
let tempHighDay4 = document.querySelector('.tempHighDay4');
let tempLowDay4 = document.querySelector('.tempLowDay4');
let pressureDay4 = document.querySelector('.pressureDay4');
let windDay4 = document.querySelector('.windDay4');
//day5
let solDay5 = document.querySelector('.solDay5');
let tempAvgDay5 = document.querySelector('.tempAvgDay5');
let tempHighDay5 = document.querySelector('.tempHighDay5');
let tempLowDay5 = document.querySelector('.tempLowDay5');
let pressureDay5 = document.querySelector('.pressureDay5');
let windDay5 = document.querySelector('.windDay5');
//day6
let solDay6 = document.querySelector('.solDay6');
let tempAvgDay6 = document.querySelector('.tempAvgDay6');
let tempHighDay6 = document.querySelector('.tempHighDay6');
let tempLowDay6 = document.querySelector('.tempLowDay6');
let pressureDay6 = document.querySelector('.pressureDay6');
let windDay6 = document.querySelector('.windDay6');
//day7
let solDay7 = document.querySelector('.solDay7');
let tempAvgDay7 = document.querySelector('.tempAvgDay7');
let tempHighDay7 = document.querySelector('.tempHighDay7');
let tempLowDay7 = document.querySelector('.tempLowDay7');
let pressureDay7 = document.querySelector('.pressureDay7');
let windDay7 = document.querySelector('.windDay7');
//city
let userCity = document.querySelector('.userCity')

//NASA --------------------------------------------------
fetch(url)
    .then(function(result) {
        return result.json();
    }).then(function(JSO) {
        console.log(JSO);
        displayResults(JSO);
    });

function displayResults(JSO) {
    console.log(JSO.sol_keys); //array of sols available in json
    let sol1 = JSO.sol_keys[0];
    let sol2 = JSO.sol_keys[1];
    let sol3 = JSO.sol_keys[2];
    let sol4 = JSO.sol_keys[3];
    let sol5 = JSO.sol_keys[4];
    let sol6 = JSO.sol_keys[5];
    let sol7 = JSO.sol_keys[6];
    //sol1
    solSol1.innerText=sol1;
    tempAvgSol1.innerText=JSO[`${sol1}`].AT.av + '°F';
    tempHighSol1.innerText=JSO[`${sol1}`].AT.mx;
    tempLowSol1.innerText=JSO[`${sol1}`].AT.mn;
    // pressureSol1.innerText=JSO[`${sol1}`].PRE.av;
    windSol1.innerText=JSO[`${sol1}`].HWS.av;
    //sol2
    solSol2.innerText=sol2;
    tempAvgSol2.innerText=JSO[`${sol2}`].AT.av + '°F';
    tempHighSol2.innerText=JSO[`${sol2}`].AT.mx;
    tempLowSol2.innerText=JSO[`${sol2}`].AT.mn;
    // pressureSol2.innerText=JSO[`${sol2}`].PRE.av;
    windSol2.innerText=JSO[`${sol2}`].HWS.av;
    //sol3
    solSol3.innerText=sol3;
    tempAvgSol3.innerText=JSO[`${sol3}`].AT.av + '°F';
    tempHighSol3.innerText=JSO[`${sol3}`].AT.mx;
    tempLowSol3.innerText=JSO[`${sol3}`].AT.mn;
    // pressureSol3.innerText=JSO[`${sol3}`].PRE.av;
    windSol3.innerText=JSO[`${sol3}`].HWS.av;
    //sol4
    solSol4.innerText=sol4;
    tempAvgSol4.innerText=JSO[`${sol4}`].AT.av + '°F';
    tempHighSol4.innerText=JSO[`${sol4}`].AT.mx;
    tempLowSol4.innerText=JSO[`${sol4}`].AT.mn;
    // pressureSol4.innerText=JSO[`${sol4}`].PRE.av;
    windSol4.innerText=JSO[`${sol4}`].HWS.av;
    //sol5
    solSol5.innerText=sol5;
    tempAvgSol5.innerText=JSO[`${sol5}`].AT.av + '°F';
    tempHighSol5.innerText=JSO[`${sol5}`].AT.mx;
    tempLowSol5.innerText=JSO[`${sol5}`].AT.mn;
    // pressureSol5.innerText=JSO[`${sol5}`].PRE.av;
    windSol5.innerText=JSO[`${sol5}`].HWS.av;
    //sol6
    solSol6.innerText=sol6;
    tempAvgSol6.innerText=JSO[`${sol6}`].AT.av + '°F';
    tempHighSol6.innerText=JSO[`${sol6}`].AT.mx;
    tempLowSol6.innerText=JSO[`${sol6}`].AT.mn;
    // pressureSol6.innerText=JSO[`${sol6}`].PRE.av;
    windSol6.innerText=JSO[`${sol6}`].HWS.av;
    //sol7
    solSol7.innerText=sol7;
    tempAvgSol7.innerText=JSO[`${sol7}`].AT.av + '°F';
    tempHighSol7.innerText=JSO[`${sol7}`].AT.mx;
    tempLowSol7.innerText=JSO[`${sol7}`].AT.mn;
    // pressureSol7.innerText=JSO[`${sol7}`].PRE.av;
    windSol7.innerText=JSO[`${sol7}`].HWS.av;
    //gettin them dates
    let date1Unf = JSO[JSO.sol_keys[0]].First_UTC;
    date1 = date1Unf.slice(0, 10);
    let date2Unf = JSO[JSO.sol_keys[1]].First_UTC;
    date2 = date2Unf.slice(0, 10);
    let date3Unf = JSO[JSO.sol_keys[2]].First_UTC;
    date3 = date3Unf.slice(0, 10);
    let date4Unf = JSO[JSO.sol_keys[3]].First_UTC;
    date4 = date4Unf.slice(0, 10);
    let date5Unf = JSO[JSO.sol_keys[4]].First_UTC;
    date5 = date5Unf.slice(0, 10);
    let date6Unf = JSO[JSO.sol_keys[5]].First_UTC;
    date6 = date6Unf.slice(0, 10);
    let date7Unf = JSO[JSO.sol_keys[6]].First_UTC;
    date7 = date7Unf.slice(0, 10);
    console.log(date1, date2, date3, date4, date5, date6, date7); //our dates to plug into meteostat url3

//convert celsius to fahrenheit AND limit decimal places
function convertTemp(celsius) {
    let fahrenheitNum = celsius * 9/5 + 32;
    let fahrenheitUnf = fahrenheitNum.toString();
    console.log(typeof fahrenheitUnf);
    let fahrenheit = fahrenheitUnf.slice(0,6);
    return fahrenheit;
}



//thermometer marker placement --------------!!!!!----------------
function markerPlacement(temp) { //converts to the margin percentage we need
    let makeNumber = parseInt(temp);
    let paddingPercent = Math.floor((makeNumber + 200)/4);
    return paddingPercent; //the margin percentage we need
}
let sol1Temp = markerPlacement(JSO[`${sol1}`].AT.av);
console.log(sol1Temp);

document.getElementById('redMarker1').style["margin-left"] = `${sol1Temp}%`; //! THIS WORKS


//search box submit
const searchForm = document.querySelector('form');
searchForm.addEventListener('submit', captureSearch);

function captureSearch(e) {
    e.preventDefault();
    let userInput = document.getElementById('userInput').value;
    console.log(userInput);
    let userCity = document.querySelector('.userCity');
    // userCity.innerText=userInput;
    location.reload();
}  // }

let url2 = `https://api.meteostat.net/v2/stations/search/search?query=` + userInput.value;
console.log(url2);
console.log(userInput);

//meteostat ---------------------------------------------
fetch(url2, {
    headers: {
        'x-api-key' : url2Key
    },
  })
  .then(function(result) {
    return result.json();
}).then(function(JSO2) {
    console.log(JSO2);
    displayResultsStation(JSO2);
});

function displayResultsStation(JSO2) {
    // console.log('HERE:', JSO2.data[0].name.en);
    
    //alternative text for null
if (!JSO2.data) {
    userCity.innerText = `Sorry, no data currently available for '` + userInput.value + `'`;
} else {
    userCity.innerText = JSO2.data[0].name.en;
};

console.log(JSO2.data[0].id);
let url3 = `https://api.meteostat.net/v2/stations/daily?station=${JSO2.data[0].id}&start=`

console.log(url3);

fetch(url3 + date1 + '&end=' + date7, {
    headers: {
        'x-api-key' : url2Key
    },
  })
  .then(function(result) {
    return result.json();
}).then(function(JSO3) {
    // console.log(JSO3);
    displayResultsWeek(JSO3);
});

}
function displayResultsWeek(JSO3) {
console.log(JSO3);
console.log(JSO3.data[0].date); //targeting date
console.log(JSO3.data[0].tavg); //targeting average temp
console.log(JSO3.data[0].tmax); //targeting high temp
console.log(JSO3.data[0].tmin); //targeting low temp
console.log(JSO3.data[0].pres); //targeting average pressure ----null (create if else statement?)
console.log(JSO3.data[0].wspd); //targeting average windspeed

let day1 = JSO3.data[0];
let day2 = JSO3.data[1];
let day3 = JSO3.data[2];
let day4 = JSO3.data[3];
let day5 = JSO3.data[4];
let day6 = JSO3.data[5];
let day7 = JSO3.data[6];
//day1
solDay1.innerText=day1.date;
tempAvgDay1.innerText=convertTemp(day1.tavg) + '°F';
tempHighDay1.innerText=convertTemp(day1.tmax);
tempLowDay1.innerText=convertTemp(day1.tmin);
// pressureDay1.innerText=day1.pres;
windDay1.innerText=day1.wspd;
//day2
solDay2.innerText=day2.date;
tempAvgDay2.innerText=convertTemp(day2.tavg) + '°F';
tempHighDay2.innerText=convertTemp(day2.tmax);
tempLowDay2.innerText=convertTemp(day2.tmin);
// pressureDay2.innerText=day2.pres;
windDay2.innerText=day2.wspd;
//day3
solDay3.innerText=day3.date;
tempAvgDay3.innerText=convertTemp(day3.tavg) + '°F';
tempHighDay3.innerText=convertTemp(day3.tmax);
tempLowDay3.innerText=convertTemp(day3.tmin);
// pressureDay3.innerText=day3.pres;
windDay3.innerText=day3.wspd;
//day4
solDay4.innerText=day4.date;
tempAvgDay4.innerText=convertTemp(day4.tavg) + '°F';
tempHighDay4.innerText=convertTemp(day4.tmax);
tempLowDay4.innerText=convertTemp(day4.tmin);
// pressureDay4.innerText=day4.pres;
windDay4.innerText=day4.wspd;
//day5
solDay5.innerText=day5.date;
tempAvgDay5.innerText=convertTemp(day5.tavg) + '°F';
tempHighDay5.innerText=convertTemp(day5.tmax);
tempLowDay5.innerText=convertTemp(day5.tmin);
// pressureDay5.innerText=day5.pres;
windDay5.innerText=day5.wspd;
//day6
solDay6.innerText=day6.date;
tempAvgDay6.innerText=convertTemp(day6.tavg) + '°F';
tempHighDay6.innerText=convertTemp(day6.tmax);
tempLowDay6.innerText=convertTemp(day6.tmin);
// pressureDay6.innerText=day6.pres;
windDay6.innerText=day6.wspd;
//day7
solDay7.innerText=day7.date;
tempAvgDay7.innerText=convertTemp(day7.tavg) + '°F';
tempHighDay7.innerText=convertTemp(day7.tmax);
tempLowDay7.innerText=convertTemp(day7.tmin);
// pressureDay7.innerText=day7.pres;
windDay7.innerText=day7.wspd;

console.log(url2);
}



};
