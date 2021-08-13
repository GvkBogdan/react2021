import axios from 'axios';

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
};
const axiosInstance = axios.create(config);

const getUsers = () => axiosInstance.get(`users`);

const getPosts = (userid) => axiosInstance.get(`users/${userid}/posts`)

const getComments = (postId)  => axiosInstance.get(`/posts/${postId}/comments`)


export {getUsers,getPosts,getComments}