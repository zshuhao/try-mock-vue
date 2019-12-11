import axios from 'axios'

export default (options) => {
    options.headers = options.headers || options.header || {
        'Content-Type': 'application/json;charset=UTF-8'
    }
    options.method = options.method || 'POST'
    options.data = options.data || {}
    return axios(options)
}
