import axios from 'axios'

// let token = localStorage.getItem('token')
export const baseURL = 'https://x10mentorship-dev.herokuapp.com/api'

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api