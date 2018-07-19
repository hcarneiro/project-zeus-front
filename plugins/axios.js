import axios from 'axios'

let options = {}
// The server-side needs a full url to works
options.baseURL = `http://${process.env.API_URL || 'localhost'}:${process.env.API_PORT || 5000}`

export default axios.create(options)