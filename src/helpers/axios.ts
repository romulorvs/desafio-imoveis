import axios from 'axios'

axios.defaults.baseURL = 'https://pro-api.coinmarketcap.com/v1'
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Accept-Encoding'] = 'deflate, gzip'
axios.defaults.headers.common['X-CMC_PRO_API_KEY'] = process.env.API_KEY

export default axios
