import axios from 'axios';

const BASE_URL = 'http://localhost:3000/orders';

export const fetchOrders = () => {
  return axios
    .get(BASE_URL)
    .then(resp => resp.data)
    .catch(err => console.log(err));
};
