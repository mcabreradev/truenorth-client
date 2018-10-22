import axios from 'axios';

export const ENDPOINT = "https://mcabreradev-truenorth-api.herokuapp.com";
export const DESTINATION_ENDPOINT = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&mode=walking&key=AIzaSyD0_X5HIFD7PG7Qoc-QFAW_yadmTdMMXfY";

export const findAll = () => {

    return axios.get(`${ENDPOINT}/restaurants`)
}

export const findById= (restaurant_id) => {

    return axios.get(`${ENDPOINT}/restaurants?_id=${restaurant_id}`);
}

export const getDistance = (coordinates) => {

    return axios.get(`${DESTINATION_ENDPOINT}
        &origins=${coordinates.origin.lat},${coordinates.origin.lng}
        &destinations=${coordinates.destination.lat},${coordinates.destination.lng}`);
}