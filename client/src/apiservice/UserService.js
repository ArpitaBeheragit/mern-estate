import axios from 'axios';

class UserService {
  constructor() {}

  async registerUser(user) {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/signup', user);
      console.log("Response from API:", res.data);
      return { status: true, data: res.data };
    } catch (error) {
      console.log("Error registering user:", error);
      if (error.response && error.response.data && error.response.data.message === 
        error.response.data.message.includes('E11000')) {
        return { status: false, message: 'Username or email already exists.' };
      }
      return { status: false, message: error?.response?.data?.message };
    }
  }

  async loginUser(user){
    try {
        const res = await axios.post('http://localhost:3000/api/auth/signin', user)
        console.log(res.data);
        return {status: true, data: res.data}
    } catch (error) {
        console.log(error);
        return {status: false, message: error?.response?.data?.message}
    }
}
}

const userService = new UserService();
export default userService;
