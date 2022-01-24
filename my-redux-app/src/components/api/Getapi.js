import axios from 'axios';


export const apidata=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/users"
})