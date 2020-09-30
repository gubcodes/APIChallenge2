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
const url2 = `https://api.meteostat.net/v2/stations/search/search?query=indianapolis`; //cut down, see above
const url3 = `https://api.meteostat.net/v2/stations/daily?station=72438&start=` //cut down, see above
const url2Key = 't47hKspOMH0e4gdhx5kmKtH0uBxyyISK';
//sol1
let solTest1 = document.querySelector('.solTest1');
let tempHighTest1 = document.querySelector('.tempHighTest1');
let tempLowTest1 = document.querySelector('.tempLowTest1');
let pressureTest1 = document.querySelector('.pressureTest1');
let windTest1 = document.querySelector('.windTest1');
//sol2
let solTest2 = document.querySelector('.solTest2');
let tempHighTest2 = document.querySelector('.tempHighTest2');
let tempLowTest2 = document.querySelector('.tempLowTest2');
let pressureTest2 = document.querySelector('.pressureTest2');
let windTest2 = document.querySelector('.windTest2');
//sol3
let solTest3 = document.querySelector('.solTest3');
let tempHighTest3 = document.querySelector('.tempHighTest3');
let tempLowTest3 = document.querySelector('.tempLowTest3');
let pressureTest3 = document.querySelector('.pressureTest3');
let windTest3 = document.querySelector('.windTest3');
//sol4
let solTest4 = document.querySelector('.solTest4');
let tempHighTest4 = document.querySelector('.tempHighTest4');
let tempLowTest4 = document.querySelector('.tempLowTest4');
let pressureTest4 = document.querySelector('.pressureTest4');
let windTest4 = document.querySelector('.windTest4');
//sol5
let solTest5 = document.querySelector('.solTest5');
let tempHighTest5 = document.querySelector('.tempHighTest5');
let tempLowTest5 = document.querySelector('.tempLowTest5');
let pressureTest5 = document.querySelector('.pressureTest5');
let windTest5 = document.querySelector('.windTest5');
//sol6
let solTest6 = document.querySelector('.solTest6');
let tempHighTest6 = document.querySelector('.tempHighTest6');
let tempLowTest6 = document.querySelector('.tempLowTest6');
let pressureTest6 = document.querySelector('.pressureTest6');
let windTest6 = document.querySelector('.windTest6');
//sol7
let solTest7 = document.querySelector('.solTest7');
let tempHighTest7 = document.querySelector('.tempHighTest7');
let tempLowTest7 = document.querySelector('.tempLowTest7');
let pressureTest7 = document.querySelector('.pressureTest7');
let windTest7 = document.querySelector('.windTest7');
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
    solTest1.innerText=sol1;
    tempHighTest1.innerText=JSO[`${sol1}`].AT.mx;
    tempLowTest1.innerText=JSO[`${sol1}`].AT.mn;
    pressureTest1.innerText=JSO[`${sol1}`].PRE.av;
    windTest1.innerText=JSO[`${sol1}`].HWS.av;
    //sol2
    solTest2.innerText=sol2;
    tempHighTest2.innerText=JSO[`${sol2}`].AT.mx;
    tempLowTest2.innerText=JSO[`${sol2}`].AT.mn;
    pressureTest2.innerText=JSO[`${sol2}`].PRE.av;
    windTest2.innerText=JSO[`${sol2}`].HWS.av;
    //sol3
    solTest3.innerText=sol3;
    tempHighTest3.innerText=JSO[`${sol3}`].AT.mx;
    tempLowTest3.innerText=JSO[`${sol3}`].AT.mn;
    pressureTest3.innerText=JSO[`${sol3}`].PRE.av;
    windTest3.innerText=JSO[`${sol3}`].HWS.av;
    //sol4
    solTest4.innerText=sol4;
    tempHighTest4.innerText=JSO[`${sol4}`].AT.mx;
    tempLowTest4.innerText=JSO[`${sol4}`].AT.mn;
    pressureTest4.innerText=JSO[`${sol4}`].PRE.av;
    windTest4.innerText=JSO[`${sol4}`].HWS.av;
    //sol5
    solTest5.innerText=sol5;
    tempHighTest5.innerText=JSO[`${sol5}`].AT.mx;
    tempLowTest5.innerText=JSO[`${sol5}`].AT.mn;
    pressureTest5.innerText=JSO[`${sol5}`].PRE.av;
    windTest5.innerText=JSO[`${sol5}`].HWS.av;
    //sol6
    solTest6.innerText=sol6;
    tempHighTest6.innerText=JSO[`${sol6}`].AT.mx;
    tempLowTest6.innerText=JSO[`${sol6}`].AT.mn;
    pressureTest6.innerText=JSO[`${sol6}`].PRE.av;
    windTest6.innerText=JSO[`${sol6}`].HWS.av;
    //sol7
    solTest7.innerText=sol7;
    tempHighTest7.innerText=JSO[`${sol7}`].AT.mx;
    tempLowTest7.innerText=JSO[`${sol7}`].AT.mn;
    pressureTest7.innerText=JSO[`${sol7}`].PRE.av;
    windTest7.innerText=JSO[`${sol7}`].HWS.av;
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




//meteostat ---------------------------------------------
fetch(url2, {
    headers: {
        'x-api-key' : url2Key
    },
  })
  .then(function(result) {
    return result.json();
}).then(function(JSO2) {
    // console.log(JSO2);
    displayResultsStation(JSO2);
});

function displayResultsStation(JSO2) {
console.log(JSO2);
}

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

function displayResultsWeek(JSO3) {
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
tempAvgDay1.innerText=day1.tavg;
tempHighDay1.innerText=day1.tmax;
tempLowDay1.innerText=day1.tmin;
pressureDay1.innerText=day1.pres;
windDay1.innerText=day1.wspd;
//day2
solDay2.innerText=day2.date;
tempAvgDay2.innerText=day2.tavg;
tempHighDay2.innerText=day2.tmax;
tempLowDay2.innerText=day2.tmin;
pressureDay2.innerText=day2.pres;
windDay2.innerText=day2.wspd;
//day3
solDay3.innerText=day3.date;
tempAvgDay3.innerText=day3.tavg;
tempHighDay3.innerText=day3.tmax;
tempLowDay3.innerText=day3.tmin;
pressureDay3.innerText=day3.pres;
windDay3.innerText=day3.wspd;
//day4
solDay4.innerText=day4.date;
tempAvgDay4.innerText=day4.tavg;
tempHighDay4.innerText=day4.tmax;
tempLowDay4.innerText=day4.tmin;
pressureDay4.innerText=day4.pres;
windDay4.innerText=day4.wspd;
//day5
solDay5.innerText=day5.date;
tempAvgDay5.innerText=day5.tavg;
tempHighDay5.innerText=day5.tmax;
tempLowDay5.innerText=day5.tmin;
pressureDay5.innerText=day5.pres;
windDay5.innerText=day5.wspd;
//day6
solDay6.innerText=day6.date;
tempAvgDay6.innerText=day6.tavg;
tempHighDay6.innerText=day6.tmax;
tempLowDay6.innerText=day6.tmin;
pressureDay6.innerText=day6.pres;
windDay6.innerText=day6.wspd;
//day7
solDay7.innerText=day7.date;
tempAvgDay7.innerText=day7.tavg;
tempHighDay7.innerText=day7.tmax;
tempLowDay7.innerText=day7.tmin;
pressureDay7.innerText=day7.pres;
windDay7.innerText=day7.wspd;

}



};
