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
const url2 = 'https://api.meteostat.net/v2/stations/search/search?query=indianapolis';
const url3 = 'https://api.meteostat.net/v2/stations/daily?station=72438&start=2019-06-01&end=2019-06-30'
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
    console.log(JSO.sol_keys[0].AT); //example of sol1 average temperature
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
    console.log('test: ', JSO[JSO.sol_keys[6]].First_UTC)

    //attempting to get the date:
    console.log('get the date: ', JSO.First_UTC)
}

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

fetch(url3, {
    headers: {
        'x-api-key' : url2Key
    },
  })
  .then(function(result) {
    return result.json();
}).then(function(JSO3) {
    // console.log(JSO3);
    displayResultsStation(JSO3);
});

function displayResultsStation(JSO3) {
console.log(JSO3);
}
