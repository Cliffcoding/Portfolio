import axios from 'axios';
const POST_URL = 'https://jason-portfolio-server.herokuapp.com/email';

export const sendEmail = (data) => {
  console.log(data);
  return axios.post(POST_URL, data);
}
