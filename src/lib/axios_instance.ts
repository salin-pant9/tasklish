import axios from "axios";

const instance = axios.create({
    baseURL:"http://tasklish-host-env.eba-uama3f35.ap-southeast-2.elasticbeanstalk.com/"
});

export default instance;