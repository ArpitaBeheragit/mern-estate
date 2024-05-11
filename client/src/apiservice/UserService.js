import axios from 'axios';
import { getToken } from '../utils/HelperFunction';

class UserService {
  constructor() {}

  async registerUser(user) {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/signup', user);
      console.log("Response from API:", res.data);
      return { status: true, data: res.data };
    } catch (error) {
      console.error("Error registering user:", error);
      if (error.response && error.response.data && error.response.data.message.includes('E11000')) {
        return { status: false, message: 'Username or email already exists.' };
      }
      return { status: false, message: error?.response?.data?.message };
    }
  }

  async loginUser(user) {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/signin', user);
      console.log(res.data);
      return { status: true, data: res.data };
    } catch (error) {
      console.error("Error logging in:", error);
      return { status: false, message: error?.response?.data?.message };
    }
  }

  async userProfile(){
    try {
        const res = await axios.get("http://localhost:3000/api/auth/profile", {
            headers: {
                'Authorization' : `Bearer ${getToken()}`
            }
        })
        console.log(res.data);
        return {data: res.data, status: true}
    } catch (error) {
        console.log(error);
        return {status: false, message: error?.response?.data?.message}
    }
}

  async updateUser(id, user) {
    try {
      const res = await axios.put(`http://localhost:3000/api/user/update/${id}`, user,{
        headers:{
          'Authorization':`Bearer ${getToken()}`
        }
      });
      console.log(res.data);
      return { status: true, data: res.data };
    } catch (error) {
      console.error("Error updating user:", error);
      return { status: false, message: error?.response?.data?.message };
    }
  }
  async deleteUser(id) {
    try {
      const res = await axios.delete(`http://localhost:3000/api/user/delete/${id}`, {
        headers:{
          'Authorization':`Bearer ${getToken()}`
        }
      });
      console.log(res.data);
      return { status: true, data: res.data };
    } catch (error) {
      console.error("Error deleting user:", error);
      return { status: false, message: error?.response?.data?.message };
    }
  }

}

const userService = new UserService();
export default userService;
