// import axios from "axios";
// import moment from "moment";
const axios = require('axios')
const moment = require('moment')

const args = process.argv;
(async () => {
    let endpointTime = 0;
    for (let i = 0; i < 10; i += 1) {
        const since = moment();
        await axios.get(args[2]);
        const end = moment();
        console.log(endpointTime);
        endpointTime += end.diff(since, "ms");
    }
    const avgResponse = endpointTime / 10;
    console.log(avgResponse)
})()

// usage node app.js {{URL}]