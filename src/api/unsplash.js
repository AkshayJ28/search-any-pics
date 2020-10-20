import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5E9sSmzExI6BKRh-6-hJjAzAlY7sxQFYED31GLz-G2k',
    },
});
