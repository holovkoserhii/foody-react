import axios from 'axios';

const BASE_URL = '/src/order-history.json';

export const getOrderHistory = () =>
  axios
    .get(BASE_URL)
    .then(response => response.json)
    .then(response => response.data);
