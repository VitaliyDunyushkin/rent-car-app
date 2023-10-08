import axios from 'axios';

const URL = 'https://64b3b20e0efb99d86268476b.mockapi.io/advert';

export const getCars = async params => {
  const res = await axios.get(URL, params);
  const data = await res.data;
  //   console.log(data);
  return data;
};
