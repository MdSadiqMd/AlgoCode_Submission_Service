import http from 'k6/http';
import { sleep } from 'k6';
import { Rate } from 'k6/metrics';

import config from './config/server.config';

export let errorRate = new Rate('error');

export let options = {
    // 1. Giving Virtual users and duration time
    /* vus: 100,
    duration: '1m', */

    // 2.
    stages: [
        { duration: '10s', target: 500 },
        { duration: '15s', target: 100 },
        { duration: '10s', target: 600 },
        { duration: '20s', target: 500 }
    ]
};

export default function () {
    let response = http.get(`${config.PORT}/api/v1/test/ping`);
    let success = response.status === 200;
    errorRate.add(!success);
    sleep(1 / 100);
}
