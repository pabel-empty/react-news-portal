import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'https://api.currentsapi.services/v1'
});
export default axiosConfig;
