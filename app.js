const request = require('request-json');
const random = require('random');

const appVersion = "1.0.2";

const DEVICE = process.env.HZN_DEVICE_ID;
const HUB_URL = process.env.HUB_URL;


console.log(`Version: ${appVersion}`  );
console.log(`Hub: ${process.env.HUB_URL}`);

var client = request.createClient(HUB_URL);
 
function update(){

    var temp = (random.int(min = 270, max = 320))/10;

    var data = {
        "id": DEVICE,
        "temp": temp
    }

    client.post('data/', data, function(err, res, body) {
        return console.log("POST /data/ " + JSON.stringify(data) + ' response: ' + res.statusCode);
    });

}

setInterval(update,30000);
