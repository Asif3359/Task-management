import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-server-beige.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;