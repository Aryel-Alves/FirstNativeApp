import axios from 'axios'

const api = axios.create({
    baseURL: 'https://appninja.com/api'
})

export default api