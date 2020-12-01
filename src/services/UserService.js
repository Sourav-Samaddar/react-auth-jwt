import axios from 'axios';
import authHeader from "./AuthHeader";

const USER_API_BASE_URL = "http://localhost:9192"
class UserService {

    login(loginDetails) {
        return axios.post(USER_API_BASE_URL+"/authenticate",loginDetails);
    }
    getHello() {
        return axios.get(USER_API_BASE_URL+"/hello",authHeader());
    }
    getAllowMe() {
        return axios.get(USER_API_BASE_URL+"/allowme");
    }
    getUserDetails(user) {
        return axios.post(USER_API_BASE_URL+"/userDetails",user,authHeader());
    }
}

export default new UserService()