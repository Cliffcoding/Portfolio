import axios from 'axios';
const POST_URL = 'http://localhost:3000/email';

export const sendEmail = (data) => {
  console.log(data);
  return axios.post(POST_URL, data);
}
