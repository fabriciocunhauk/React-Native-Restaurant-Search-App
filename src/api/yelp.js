import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer C0TLcT7gsdeQH6RYMeetFP3tbZlWJNdJm397ss08BN0A7Jv7DWnbuySOvlK55zcMttvttbjFbqSu_mkzF0E2Ny05-DN59JtTPsffwQddIa9snZVJAosxAF15HXz6XnYx'
    }
});