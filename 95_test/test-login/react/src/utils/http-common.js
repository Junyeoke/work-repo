import axios from 'axios';
export default axios.create({
    baseURL: "http://localhost:3000/api",
    // baseURL: "http://localhost:3002/api",
    headers: {
        "Content-Type": "application/json"
    }
})

