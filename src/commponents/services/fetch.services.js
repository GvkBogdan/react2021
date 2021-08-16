const url = 'https://jsonplaceholder.typicode.com/'

const getPosts = (id) =>{
    return fetch(url + 'posts')
        .then(value => value.json())
}

const getComments = (id) =>{
    return fetch(url + 'comments')
        .then(value => value.json())
}

export {getPosts, getComments}