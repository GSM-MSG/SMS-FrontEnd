import axios from 'axios'

const serverApi = axios.create({
  baseURL: process.env.SERVER_URL,
})

export default serverApi
