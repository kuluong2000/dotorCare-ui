import axios from 'axios';
import BASE_URL from './configUrl';
import Swal from 'sweetalert2';
export const apiService = {
  register: (data) => {
    return axios
      .post(`${BASE_URL}/api/authen/signUp`, data)
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => err.response);
  },
  login: (data) => {
    axios
      .post(`${BASE_URL}/api/authen/login`, {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('data-user', JSON.stringify(res.data));
        } else {
          console.log('lỗi dồi bạn iu');
        }
      })
      .catch((err) => alert('lỗi'));
  },
};
