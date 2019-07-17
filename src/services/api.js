import axios from 'axios'

const api = axios.create({
    baseURL: 'http://rocketseat-node.herokuapp.com/api' // http://172.17.91.209:8080/api
})

export default api