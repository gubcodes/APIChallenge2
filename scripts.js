// NASA APIs:
// key: SmOaKKepEB7sVT8SDnESBJQnz2A40xjB7l4sEzAG
// example: https://api.nasa.gov/planetary/apod?api_key=SmOaKKepEB7sVT8SDnESBJQnz2A40xjB7l4sEzAG
// Account Email: gubcode@gmail.com
// Account ID: 0e3507ca-8781-4e41-a0db-84a13c4c0c52

// InSight: Mars Weather Service API:
// example: https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0
// provides per-Sol summary data for each of the last seven available Sols

const url = 'https://api.nasa.gov/insight_weather/?api_key=SmOaKKepEB7sVT8SDnESBJQnz2A40xjB7l4sEzAG&feedtype=json&ver=1.0';

fetch(url)
    .then(function(result) {
        return result.json();
    }).then(function(JSO) {
        console.log(JSO);
        displayResults(JSO);
    });

function displayResults(JSO) {
    console.log(JSO[650].AT.av); //example of logging degrees
    console.log(JSO.sol_keys); //array of sols available in json
    let sol1 = JSO.sol_keys[0];
    let sol2 = JSO.sol_keys[1];
    let sol3 = JSO.sol_keys[2];
    let sol4 = JSO.sol_keys[3];
    let sol5 = JSO.sol_keys[4];
    let sol6 = JSO.sol_keys[5];
    let sol7 = JSO.sol_keys[6];
}