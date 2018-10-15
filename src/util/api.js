import axios from 'axios';

export const ENDPOINT = "https://mcabreradev-truenorth-api.herokuapp.com";

export const findAll = () => {
    return axios.get(`${ENDPOINT}/restaurants`)
}

export const findById= (restaurant_id) => {
    return axios.get(`${ENDPOINT}/restaurants?_id=${restaurant_id}`);
}