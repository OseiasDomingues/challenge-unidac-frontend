import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://desafio-unidac-backend.herokuapp.com/api/'
})