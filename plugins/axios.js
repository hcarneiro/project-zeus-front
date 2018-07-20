import axios from 'axios'

let options = {}
options.baseURL = `http://${process.env.API_URL || 'localhost'}:${process.env.API_PORT || 5000}`

export default axios.create(options)