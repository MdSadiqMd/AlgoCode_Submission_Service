// npm i @types/k6 --> k6
// sudo npm i -g pm2 --> pm2 start script.ts --interpreter ts-node -i max --> It Means we are running max number of cors of our machine
import http from 'k6/http';
import { sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('error');

export let options = {
    // 1. Giving Virtual users and duration time
    /* vus: 100,
    duration: '1m', */

    // 2. Ramping up requests
    stages: [
        { duration: '10s', target: 500 },
        { duration: '15s', target: 100 },
        { duration: '10s', target: 600 },
        { duration: '20s', target: 500 }
    ]
};

export default function () {
    let response = http.get('http://127.0.0.1:8080/api/v1/test/ping');
    let success = response.status === 200;
    errorRate.add(!success);
    sleep(1 / 100);
}
