import axios from 'axios';

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com',
};

let axiosComments = axios.create(config)

const getComments = (postId)  => {

    return axiosComments.get(`/posts/${postId}/comments`);
}

export {getComments};


