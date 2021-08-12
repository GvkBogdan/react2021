function getPosts() {

    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());
}

function getPost(id) {

    return fetch('https://jsonplaceholder.typicode.com/comments' + id)
        .then(value => value.json());


}

export {getPosts, getPost};