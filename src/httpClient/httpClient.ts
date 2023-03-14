import axios from "axios";

export const httpClient = axios.create({
    baseURL: 'http://localhost:3005/',
    headers: {'x-api-key': 'thisisapikey'}
});